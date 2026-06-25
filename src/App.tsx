import { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import ChatArea from './components/ChatArea/ChatArea';
import Settings from './components/Settings/Settings';
import PWAPrompt from './components/PWA/PWAPrompt';
import { useChat } from './hooks/useChat';
import { loadSettings, saveSettings, exportToFile, importFromFile } from './services/storage-service';
import type { AppSettings } from './types';
import './App.css';

const categoryStarters: Record<string, string> = {
  'strength-conditioning': 'Give me a complete overview of strength & conditioning — progressive overload, periodization, rep schemes, and how to design an effective training program.',
  'cardiovascular-training': 'What are the best cardio training methods? Compare HIIT vs LISS, explain heart rate zones, VO2 max, and how to improve cardiovascular fitness.',
  'flexibility-mobility': 'Guide me through flexibility and mobility training — stretching techniques, foam rolling, corrective exercises, and how to improve range of motion.',
  'nutrition-diet': 'Explain the fundamentals of nutrition — macronutrients, micronutrients, caloric balance, and how to create an effective meal plan for fitness goals.',
  'sports-nutrition': 'What should I eat before and after workouts? Cover pre/post-workout nutrition, supplementation, protein timing, creatine, and hydration strategies.',
  'weight-management': 'Help me understand weight management — the science of fat loss, lean bulking, body recomposition, and how to calculate my ideal calorie intake.',
  'injury-prevention': 'What are the most common gym injuries and how can I prevent them? Cover prehab exercises, warm-up protocols, and safe training techniques.',
  'anatomy-physiology': 'Give me an overview of exercise anatomy — the muscular system, skeletal system, how muscles contract, and key muscle groups for training.',
  'mental-wellness': 'How does mental health relate to fitness? Cover stress management, sleep hygiene, mind-body connection, and how exercise improves mental wellbeing.',
  'hormonal-health': 'Explain how hormones affect fitness — testosterone, cortisol, insulin sensitivity, thyroid function, and how to optimize hormonal health naturally.',
  'recovery-science': 'Guide me through recovery science — sleep optimization, active recovery, deload strategies, and how to maximize recovery between workouts.',
  'functional-health': 'What is functional fitness? Cover posture correction, daily movement patterns, core stability, and exercises for everyday life.',
  'coaching-skills': 'What are the essential skills for fitness coaching? Cover client assessment, goal setting, motivation, habit formation, and communication.',
  'books-resources': 'What are the best books and resources for learning about fitness, nutrition, and exercise science? Give me a curated reading list with key takeaways.',
  'general': 'What are the most important fitness concepts everyone should know? Give me a comprehensive overview of training, nutrition, and health essentials.',
};

export default function App() {
  const [settings, setSettings] = useState<AppSettings>(() => loadSettings());
  const [showSettings, setShowSettings] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {
    chats, activeChat, isLoading, streamingContent,
    createNewChat, sendUserMessage, selectChat,
    deleteChat, refreshChats, setActiveChat, stopGeneration,
  } = useChat(settings);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme);
    document.documentElement.setAttribute('data-font', settings.fontSize);
  }, [settings.theme, settings.fontSize]);

  function handleSaveSettings(newSettings: AppSettings) {
    setSettings(newSettings);
    saveSettings(newSettings);
  }

  const handleNewChat = useCallback((category?: string) => {
    const cat = category || 'general';
    setSidebarOpen(false);
    const starter = categoryStarters[cat];
    if (starter && category) {
      sendUserMessage(starter, cat);
    } else {
      const chat = createNewChat(cat);
      setActiveChat(chat);
    }
  }, [createNewChat, setActiveChat, sendUserMessage]);

  async function handleExport() {
    await exportToFile();
  }

  async function handleImport() {
    const success = await importFromFile();
    if (success) {
      refreshChats();
      alert('Chats imported successfully!');
    }
  }

  return (
    <div className="app">
      {sidebarOpen && (
        <div className="sidebar-backdrop d-md-none" onClick={() => setSidebarOpen(false)} />
      )}

      <Sidebar
        chats={chats}
        activeChatId={activeChat?.id || null}
        onNewChat={handleNewChat}
        onSelectChat={(id) => { selectChat(id); setSidebarOpen(false); }}
        onDeleteChat={deleteChat}
        onOpenSettings={() => setShowSettings(true)}
        onExport={handleExport}
        onImport={handleImport}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <ChatArea
        chat={activeChat}
        isLoading={isLoading}
        streamingContent={streamingContent}
        onSendMessage={sendUserMessage}
        onStopGeneration={stopGeneration}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {showSettings && (
        <Settings
          settings={settings}
          onSave={handleSaveSettings}
          onClose={() => setShowSettings(false)}
        />
      )}

      <PWAPrompt />
    </div>
  );
}
