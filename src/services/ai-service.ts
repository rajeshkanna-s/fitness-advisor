import type { Message, AppSettings } from '../types';
import { getEngineContext, detectCategory } from '../engines';

const SYSTEM_PROMPT = `You are the **world's best Fitness Advisor AI** — an elite-level expert across every domain of fitness, gym training, nutrition, diet planning, health & wellness, exercise science, and sports performance.

## STRICT BOUNDARY — FITNESS & HEALTH ONLY:
You MUST ONLY answer questions related to fitness, exercise, gym training, diet, nutrition, health, wellness, sports performance, anatomy, physiology, injury prevention, recovery, supplements, body composition, flexibility, mobility, mental health related to fitness, and coaching.

If a user asks about ANYTHING non-fitness/health (movies, actors, politics, finance, coding, general knowledge, entertainment, etc.), you MUST respond with:

"🚫 **Off-Topic Request**

I'm your **Fitness Advisor AI** — I can only help with fitness & health-related topics.

💡 **Try asking me about:**
- 🏋️ Gym Training & Exercise Programs
- 🥗 Diet Planning & Nutrition
- 💪 Muscle Building & Strength Training
- 🏃 Cardio & Endurance Training
- 🧘 Flexibility, Mobility & Recovery
- ⚖️ Weight Management & Body Composition
- 🧠 Mental Health & Wellness
- 🩺 Injury Prevention & Rehabilitation

**Ask me anything about fitness and health!** 🎯"

Do NOT answer non-fitness questions even partially. Do NOT try to connect non-fitness topics to health. Simply decline and redirect.

## Your Expertise Covers:
🏋️ Strength & Conditioning (Progressive overload, periodization, rep schemes) | 💪 Muscle Building & Hypertrophy (Training splits, volume, intensity) | 🏃 Cardiovascular Training (HIIT, LISS, heart rate zones, VO2 max) | 🧘 Flexibility & Mobility (Stretching, foam rolling, corrective exercises) | 🥗 Nutrition & Diet (Macros, micros, meal planning, calorie tracking) | 🔬 Exercise Science & Anatomy (Muscular system, kinesiology, biomechanics) | ⚖️ Weight Management (Fat loss, lean bulking, body recomposition) | 🏥 Injury Prevention & Rehab (Common injuries, recovery protocols, prehab) | 💊 Supplements & Sports Nutrition (Pre/post-workout, protein, creatine) | 🧠 Mental Health & Wellness (Stress management, sleep, mind-body connection) | 🧬 Hormonal Health (Testosterone, cortisol, insulin sensitivity) | 😴 Recovery Science (Sleep optimization, active recovery, deload strategies) | 📐 Posture & Functional Health (Corrective exercises, movement patterns) | 👩‍⚕️ Women's & Men's Health (Age-specific, hormonal cycles) | 📚 Coaching & Fitness Education

## Response Length — MATCH THE USER:
- **Simple question** (e.g., "What is progressive overload?"): Give a clear, well-structured answer with key points, a brief explanation, and a quick example. Use 1-2 headers, bullet points, and emojis. Around 150-250 words.
- **Detailed question** (e.g., "Build me a full 12-week program", "Compare push-pull-legs vs upper-lower"): Give a comprehensive response with multiple headers, tables, numbered steps, and full breakdowns. Go as detailed as needed.
- **If user says "short" or "brief"**: Then keep it minimal — 2-3 sentences only.

## Response Format Rules:
1. **Always use headers (##)** to organize your response — even short answers benefit from structure
2. **Use emojis liberally** as visual markers: ✅ for tips, ⚠️ for warnings, 💡 for insights, 📌 for key points, 🎯 for goals, 📊 for data, 🔑 for important concepts, ❌ for don'ts, ✨ for highlights, 🔥 for intensity, 💪 for strength
3. **Use bullet points and numbered lists** to break down information clearly
4. **Bold key terms** and important numbers
5. **Use tables** for comparisons (e.g., PPL vs Upper-Lower, whey vs casein, HIIT vs LISS)
6. **Keep paragraphs short** — 2-3 sentences max per paragraph
7. **Include metric and imperial units** when relevant (kg/lbs, cm/inches)
8. **Include a disclaimer** when giving specific health or medical guidance

## Important Rules:
- ⚠️ You are NOT a licensed doctor, dietitian, or physiotherapist. Remind users this is educational guidance.
- Never diagnose medical conditions or prescribe medication
- Always recommend consulting healthcare professionals for injuries or medical concerns
- Present balanced views covering both benefits and risks
- If you don't know something, say so honestly

## CRITICAL — Follow-up Suggestions:
At the very END of EVERY response (including off-topic rejections), you MUST include exactly 3 follow-up questions the user might want to ask. Format them EXACTLY like this (with the exact delimiter):

---suggestions---
What's the best rep range for building muscle mass?
How should I structure my pre-workout meal for maximum energy?
What are the most effective stretches for lower back pain?
---end-suggestions---

These suggestions must always be fitness/health-related.`;

export type StreamCallback = (chunk: string) => void;

export async function sendMessage(
  messages: Message[],
  settings: AppSettings,
  category: string,
  onStream?: StreamCallback,
  signal?: AbortSignal,
): Promise<string> {
  if (!settings.apiKey) {
    return '⚠️ **API Key Required**\n\nPlease set your API key in Settings (click the ⚙️ gear icon in the sidebar) to start chatting.\n\n**Supported Providers:**\n- 🟢 **FreeModel API** (default): Pre-configured and ready\n- 🔵 **Google Gemini**: Free API key at Google AI Studio\n- 🟣 **OpenAI**: API key at OpenAI Platform\n- 🟠 **Custom API**: Any OpenAI-compatible endpoint\n\n🔒 Your API key is stored locally and never sent anywhere except the AI provider.';
  }

  const detectedCategory = category === 'general' ? detectCategory(messages[messages.length - 1]?.content || '') : category;
  const engineContext = getEngineContext(detectedCategory);

  try {
    if (settings.apiProvider === 'gemini') {
      return await callGemini(messages, settings, engineContext);
    } else if (settings.apiProvider === 'anthropic') {
      return await callAnthropic(messages, settings, engineContext, onStream, signal);
    } else {
      return await callOpenAICompatible(messages, settings, engineContext, onStream, signal);
    }
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw error;
    }
    if (error.message?.includes('API key') || error.message?.includes('401') || error.message?.includes('Unauthorized')) {
      return '❌ **Invalid API Key**\n\nPlease check your API key in Settings. Make sure you\'ve copied the entire key correctly.';
    }
    if (error.message?.includes('quota') || error.message?.includes('rate') || error.message?.includes('429')) {
      return '⏳ **Rate Limited**\n\nYou\'ve hit the API rate limit. Please wait a moment and try again.';
    }
    return `❌ **Error**\n\n${error.message || 'Failed to get response. Please check your API key and internet connection.'}`;
  }
}

async function callOpenAICompatible(
  messages: Message[],
  settings: AppSettings,
  engineContext: string,
  onStream?: StreamCallback,
  signal?: AbortSignal,
): Promise<string> {
  let model: string;
  if (settings.apiProvider === 'custom') {
    model = settings.customModelName || settings.modelName || 'gpt-4o-mini';
  } else {
    model = settings.modelName || 'FRE-5.5';
  }

  let url: string;
  if (settings.apiProvider === 'freemodel') {
    url = '/api/freemodel/v1/chat/completions';
  } else if (settings.apiProvider === 'openai') {
    url = '/api/openai/v1/chat/completions';
  } else if (settings.apiProvider === 'custom') {
    const baseUrl = settings.apiBaseUrl || 'https://api.openai.com/v1';
    url = `${baseUrl}/chat/completions`;
  } else {
    const baseUrl = settings.apiBaseUrl || 'https://api.openai.com/v1';
    url = `${baseUrl}/chat/completions`;
  }

  const apiMessages = [
    { role: 'system', content: `${SYSTEM_PROMPT}\n\n--- DOMAIN KNOWLEDGE ---\n${engineContext}` },
    ...messages.map(msg => ({
      role: msg.role as string,
      content: msg.content,
    })),
  ];

  const useStream = !!onStream;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${settings.apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: apiMessages,
      temperature: 0.7,
      max_tokens: 4096,
      stream: useStream,
    }),
    signal,
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `API error: ${response.status} ${response.statusText}`);
  }

  if (useStream && response.body) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullContent = '';
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith('data: ')) continue;
        const data = trimmed.slice(6);
        if (data === '[DONE]') break;

        try {
          const parsed = JSON.parse(data);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            fullContent += content;
            onStream(fullContent);
          }
        } catch {
          // skip malformed chunks
        }
      }
    }

    return fullContent || 'No response generated.';
  }

  const data = await response.json();
  return data?.choices?.[0]?.message?.content || 'No response generated.';
}

async function callGemini(
  messages: Message[],
  settings: AppSettings,
  engineContext: string
): Promise<string> {
  const model = settings.modelName || 'gemini-2.0-flash';
  const url = `/api/gemini/v1beta/models/${model}:generateContent?key=${settings.apiKey}`;

  const contents = messages.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }],
  }));

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: `${SYSTEM_PROMPT}\n\n--- DOMAIN KNOWLEDGE ---\n${engineContext}` }],
      },
      contents,
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
}

async function callAnthropic(
  messages: Message[],
  settings: AppSettings,
  engineContext: string,
  onStream?: StreamCallback,
  signal?: AbortSignal,
): Promise<string> {
  const model = settings.modelName || 'claude-sonnet-4-20250514';
  const url = '/api/anthropic/v1/messages';

  const apiMessages = messages.map(msg => ({
    role: msg.role as string,
    content: msg.content,
  }));

  const useStream = !!onStream;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': settings.apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model,
      max_tokens: 4096,
      system: `${SYSTEM_PROMPT}\n\n--- DOMAIN KNOWLEDGE ---\n${engineContext}`,
      messages: apiMessages,
      stream: useStream,
    }),
    signal,
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `Anthropic API error: ${response.status} ${response.statusText}`);
  }

  if (useStream && response.body) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullContent = '';
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith('data: ')) continue;
        const data = trimmed.slice(6);
        if (data === '[DONE]') break;

        try {
          const parsed = JSON.parse(data);
          if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
            fullContent += parsed.delta.text;
            onStream(fullContent);
          }
        } catch {
          // skip malformed chunks
        }
      }
    }

    return fullContent || 'No response generated.';
  }

  const data = await response.json();
  return data?.content?.[0]?.text || 'No response generated.';
}
