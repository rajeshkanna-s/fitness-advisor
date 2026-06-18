# Fitness Advisor AI

AI-powered fitness advisor chatbot built with React, TypeScript, and Vite. Get expert guidance on gym training, diet planning, exercise science, health & wellness — all powered by AI with comprehensive domain knowledge engines.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)

## Features

- **AI-Powered Chat** — Real-time streaming responses with markdown rendering, tables, code blocks, and emoji formatting
- **15 Fitness Categories** — Specialized domain knowledge across strength training, nutrition, cardio, recovery, anatomy, and more
- **14 Engine Data Files** — 6,300+ lines of scientifically accurate fitness knowledge injected as AI context
- **Voice Input** — Speak your questions using the Web Speech API (Chrome/Edge)
- **Mobile Responsive** — Slide-out sidebar on mobile, full layout on desktop
- **Dark & Light Themes** — Toggle between themes with customizable font sizes
- **Chat History** — Persistent localStorage with search, export/import as JSON
- **Follow-up Suggestions** — 3 related questions after every AI response
- **Multi-Provider Support** — FreeModel (default), Google Gemini, OpenAI, or any custom OpenAI-compatible API
- **No Database, No Cloud** — Everything runs locally in the browser

## Categories

| Category | Description |
|----------|-------------|
| Strength & Conditioning | Progressive overload, periodization, training splits, powerlifting |
| Cardio Training | HIIT, LISS, heart rate zones, VO2 max, endurance programming |
| Flexibility & Mobility | Stretching, foam rolling, yoga, corrective exercise, PNF |
| Nutrition & Diet | Macros, meal planning, keto, IF, plant-based, Mediterranean |
| Sports Nutrition | Supplements, pre/post-workout, protein, creatine, hydration |
| Weight Management | Fat loss science, lean bulking, body recomposition, TDEE |
| Injury Prevention | Prehab, common injuries, recovery protocols, form safety |
| Anatomy & Physiology | Muscular system, kinesiology, energy systems, biomechanics |
| Mental Wellness | Stress management, sleep, motivation, mindfulness, body image |
| Hormonal Health | Testosterone, cortisol, insulin, thyroid, natural optimization |
| Recovery Science | Sleep optimization, deload, cold/heat therapy, HRV monitoring |
| Functional Health | Posture correction, core stability, movement patterns, senior fitness |
| Coaching Skills | Client assessment, program design, certifications (ACE, NASM, NSCA) |
| Books & Resources | 21 recommended books + 13 websites for fitness education |

## Tech Stack

- **Frontend:** React 19, TypeScript 6, Vite 8
- **Styling:** Bootstrap 5.3, Custom CSS with CSS variables
- **Markdown:** react-markdown + remark-gfm
- **Icons:** react-icons (Bootstrap Icons)
- **Storage:** localStorage (no backend required)
- **AI:** OpenAI-compatible API (FreeModel, Gemini, OpenAI, Custom)

## Project Structure

```
src/
├── components/
│   ├── ChatArea/          # Chat interface, message bubbles, welcome screen
│   ├── Sidebar/           # Navigation, categories, chat history
│   └── Settings/          # API config, theme, font size
├── engines/               # 14 domain knowledge data files + index
│   ├── strength-conditioning.ts
│   ├── cardiovascular-training.ts
│   ├── flexibility-mobility.ts
│   ├── nutrition-diet.ts
│   ├── sports-nutrition.ts
│   ├── weight-management.ts
│   ├── injury-prevention.ts
│   ├── anatomy-physiology.ts
│   ├── mental-wellness.ts
│   ├── hormonal-health.ts
│   ├── recovery-science.ts
│   ├── functional-health.ts
│   ├── coaching-skills.ts
│   ├── books-resources.ts
│   └── index.ts           # Engine registry, category detection, context builder
├── hooks/
│   └── useChat.ts         # Chat state management, message handling
├── services/
│   ├── ai-service.ts      # AI API integration (multi-provider)
│   └── storage-service.ts # localStorage persistence
├── types/
│   └── index.ts           # TypeScript interfaces
├── App.tsx                # Root component
├── App.css
├── index.css              # Theme variables, global styles
├── main.tsx               # Entry point
└── speech.d.ts            # Web Speech API type declarations
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rajeshkanna-s/fitness-advisor.git
cd fitness-advisor

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Configuration

### AI Provider Setup

The app comes pre-configured with **FreeModel API** — no setup needed, works out of the box.

To use other providers, click **Settings** in the sidebar:

| Provider | Setup |
|----------|-------|
| **FreeModel** | Pre-configured, ready to use |
| **Google Gemini** | Free API key from [Google AI Studio](https://aistudio.google.com/apikey) |
| **OpenAI** | API key from [OpenAI Platform](https://platform.openai.com/api-keys) |
| **Custom API** | Any OpenAI-compatible endpoint |

### Vite Proxy Configuration

API requests are proxied through Vite's dev server to avoid CORS issues:

- `/api/freemodel` → `https://api.freemodel.dev`
- `/api/openai` → `https://api.openai.com`
- `/api/gemini` → `https://generativelanguage.googleapis.com`

## How It Works

1. **User sends a message** → The app detects the fitness category using keyword matching
2. **Engine context is loaded** → Relevant domain knowledge (topics, key terms, FAQs, tips) is injected into the AI system prompt
3. **AI generates response** → Streamed in real-time with fitness-specific formatting (emojis, tables, headers)
4. **Follow-up suggestions** → 3 related questions are extracted and displayed as clickable buttons
5. **Chat is persisted** → Saved to localStorage, searchable, exportable as JSON

## Engine Data Architecture

Each engine file contains structured knowledge:

```typescript
{
  category: string;        // Unique identifier
  title: string;           // Display name
  description: string;     // Brief overview
  topics: Topic[];         // 8-10 major topics with subtopics
  keyTerms: KeyTerm[];     // 20-30 glossary entries
  tips: string[];          // 8-10 practical tips
  faqs: FAQ[];             // 10-15 Q&A pairs
}
```

## Recommended Reading

The app includes a curated library of fitness books and resources:

**Exercise & Training:** Starting Strength (Rippetoe), Strength Training Anatomy (Delavier), Becoming a Supple Leopard (Starrett), The New Encyclopedia of Modern Bodybuilding (Schwarzenegger)

**Nutrition:** The Renaissance Diet 2.0 (Israetel), The Obesity Code (Dr. Fung), How Not to Die (Dr. Greger)

**Health & Wellness:** Why We Sleep (Walker), Outlive (Dr. Attia), Atomic Habits (Clear), Breath (Nestor)

**Websites:** Examine.com, ExRx.net, PubMed, Precision Nutrition, Huberman Lab, Cronometer

## License

This project is for educational purposes. AI-generated fitness advice should not replace professional medical or fitness guidance.

---

Built with React + TypeScript + Vite | Powered by AI
