import { BsActivity } from 'react-icons/bs';
import './WelcomeScreen.css';

interface WelcomeScreenProps {
  onSendMessage: (content: string, category?: string) => void;
}

const suggestedQuestions = [
  { text: 'Build me a complete 12-week muscle building program for beginners', category: 'strength-conditioning' },
  { text: 'Create a 2000 calorie high-protein meal plan for fat loss', category: 'nutrition-diet' },
  { text: 'What are the best exercises for building a bigger chest and shoulders?', category: 'strength-conditioning' },
  { text: 'Compare HIIT vs LISS — which is better for fat loss?', category: 'cardiovascular-training' },
  { text: 'How should I structure my pre and post-workout nutrition?', category: 'sports-nutrition' },
  { text: 'What stretches and mobility work should I do daily to prevent injuries?', category: 'flexibility-mobility' },
];

export default function WelcomeScreen({ onSendMessage }: WelcomeScreenProps) {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="welcome-hero">
          <div className="welcome-icon">
            <BsActivity size={28} />
          </div>
          <h1 className="welcome-title">Fitness Advisor AI</h1>
        </div>
        <p className="welcome-subtitle">
          Your intelligent companion for gym training, diet planning, exercise science, health & wellness.
        </p>

        <div className="suggested-questions">
          <h4>Try asking</h4>
          <div className="questions-grid">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                className="question-btn"
                onClick={() => onSendMessage(q.text, q.category)}
              >
                {q.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
