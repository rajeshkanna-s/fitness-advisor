import type { EngineData, Category } from '../types';
import { strengthConditioningEngine } from './strength-conditioning';
import { cardiovascularTrainingEngine } from './cardiovascular-training';
import { flexibilityMobilityEngine } from './flexibility-mobility';
import { nutritionDietEngine } from './nutrition-diet';
import { sportsNutritionEngine } from './sports-nutrition';
import { weightManagementEngine } from './weight-management';
import { injuryPreventionEngine } from './injury-prevention';
import { anatomyPhysiologyEngine } from './anatomy-physiology';
import { mentalWellnessEngine } from './mental-wellness';
import { hormonalHealthEngine } from './hormonal-health';
import { recoveryScienceEngine } from './recovery-science';
import { functionalHealthEngine } from './functional-health';
import { coachingSkillsEngine } from './coaching-skills';
import { bookResources, webResources, booksAndResourcesContext } from './books-resources';

export const allEngines: EngineData[] = [
  strengthConditioningEngine,
  cardiovascularTrainingEngine,
  flexibilityMobilityEngine,
  nutritionDietEngine,
  sportsNutritionEngine,
  weightManagementEngine,
  injuryPreventionEngine,
  anatomyPhysiologyEngine,
  mentalWellnessEngine,
  hormonalHealthEngine,
  recoveryScienceEngine,
  functionalHealthEngine,
  coachingSkillsEngine,
];

export const categories: Category[] = [
  {
    id: 'strength-conditioning',
    name: 'Strength & Conditioning',
    icon: 'BsLightning',
    description: 'Progressive overload, periodization, training programs',
    color: '#FF6B35',
  },
  {
    id: 'cardiovascular-training',
    name: 'Cardio Training',
    icon: 'BsHeart',
    description: 'HIIT, LISS, heart rate zones, endurance',
    color: '#E91E63',
  },
  {
    id: 'flexibility-mobility',
    name: 'Flexibility & Mobility',
    icon: 'BsPersonStanding',
    description: 'Stretching, foam rolling, corrective exercise',
    color: '#9C27B0',
  },
  {
    id: 'nutrition-diet',
    name: 'Nutrition & Diet',
    icon: 'BsEgg',
    description: 'Macros, meal planning, special diets',
    color: '#4CAF50',
  },
  {
    id: 'sports-nutrition',
    name: 'Sports Nutrition',
    icon: 'BsCupHot',
    description: 'Supplements, pre/post-workout, protein',
    color: '#FF9800',
  },
  {
    id: 'weight-management',
    name: 'Weight Management',
    icon: 'BsSpeedometer2',
    description: 'Fat loss, bulking, body recomposition',
    color: '#2196F3',
  },
  {
    id: 'injury-prevention',
    name: 'Injury Prevention',
    icon: 'BsShieldCheck',
    description: 'Prehab, recovery, safe training',
    color: '#F44336',
  },
  {
    id: 'anatomy-physiology',
    name: 'Anatomy & Physiology',
    icon: 'BsClipboard2Pulse',
    description: 'Muscles, bones, energy systems',
    color: '#795548',
  },
  {
    id: 'mental-wellness',
    name: 'Mental Wellness',
    icon: 'BsMoonStars',
    description: 'Stress, sleep, motivation, mindfulness',
    color: '#00BCD4',
  },
  {
    id: 'hormonal-health',
    name: 'Hormonal Health',
    icon: 'BsDroplet',
    description: 'Testosterone, cortisol, insulin, thyroid',
    color: '#607D8B',
  },
  {
    id: 'recovery-science',
    name: 'Recovery Science',
    icon: 'BsBullseye',
    description: 'Sleep, deload, cold/heat therapy, HRV',
    color: '#8BC34A',
  },
  {
    id: 'functional-health',
    name: 'Functional Health',
    icon: 'BsActivity',
    description: 'Posture, core, movement patterns',
    color: '#FF5722',
  },
  {
    id: 'coaching-skills',
    name: 'Coaching Skills',
    icon: 'BsPeople',
    description: 'Assessment, motivation, business, certs',
    color: '#00ACC1',
  },
  {
    id: 'books-resources',
    name: 'Books & Resources',
    icon: 'BsBook',
    description: 'Recommended reading & websites',
    color: '#3F51B5',
  },
  {
    id: 'general',
    name: 'General',
    icon: 'BsChatDots',
    description: 'Ask anything about fitness & health',
    color: '#009688',
  },
];

export function getEngineByCategory(category: string): EngineData | undefined {
  return allEngines.find(e => e.category === category);
}

export function getEngineContext(category: string): string {
  if (category === 'books-resources') {
    return booksAndResourcesContext;
  }

  if (category === 'general') {
    return getAllEnginesContext();
  }

  const engine = getEngineByCategory(category);
  if (!engine) return getAllEnginesContext();

  return formatEngineToContext(engine);
}

function formatEngineToContext(engine: EngineData): string {
  let context = `DOMAIN: ${engine.title}\n${engine.description}\n\n`;

  for (const topic of engine.topics) {
    context += `## ${topic.name}\n${topic.description}\n`;
    context += topic.details.map(d => `- ${d}`).join('\n') + '\n';

    if (topic.subtopics) {
      for (const sub of topic.subtopics) {
        context += `\n### ${sub.name}\n${sub.description}\n`;
        context += sub.details.map(d => `- ${d}`).join('\n') + '\n';
      }
    }
    context += '\n';
  }

  context += '\nKEY TERMS:\n';
  for (const term of engine.keyTerms) {
    context += `- ${term.term}: ${term.definition}\n`;
  }

  context += '\nPRACTICAL TIPS:\n';
  for (const tip of engine.tips) {
    context += `- ${tip}\n`;
  }

  context += '\nFREQUENTLY ASKED QUESTIONS:\n';
  for (const faq of engine.faqs) {
    context += `Q: ${faq.question}\nA: ${faq.answer}\n\n`;
  }

  return context;
}

function getAllEnginesContext(): string {
  let context = 'You are a comprehensive fitness advisor with expertise in:\n\n';
  for (const engine of allEngines) {
    context += `- ${engine.title}: ${engine.description}\n`;
  }
  context += `\nYou also have knowledge of recommended fitness books and resources:\n${booksAndResourcesContext}\n`;
  context += '\nKey areas summary:\n';
  for (const engine of allEngines) {
    context += `\n## ${engine.title}\n`;
    for (const topic of engine.topics) {
      context += `- ${topic.name}: ${topic.description}\n`;
    }
  }
  return context;
}

export function detectCategory(message: string): string {
  const lower = message.toLowerCase();
  const categoryKeywords: Record<string, string[]> = {
    'strength-conditioning': ['strength', 'weight training', 'powerlifting', 'progressive overload', 'periodization', 'rep', 'set', 'bench press', 'squat', 'deadlift', 'barbell', 'dumbbell', 'hypertrophy', 'muscle building', 'bodybuilding', 'training split', 'ppl', 'push pull legs', 'upper lower', 'compound exercise', 'isolation exercise', 'olympic lift', 'clean and jerk', 'snatch'],
    'cardiovascular-training': ['cardio', 'hiit', 'liss', 'running', 'jogging', 'cycling', 'swimming', 'rowing', 'heart rate', 'vo2 max', 'endurance', 'aerobic', 'anaerobic', 'interval', 'sprint', 'marathon', 'treadmill', 'elliptical', 'jump rope', 'metabolic conditioning'],
    'flexibility-mobility': ['stretch', 'flexibility', 'mobility', 'foam roll', 'yoga', 'range of motion', 'warm up', 'cool down', 'pnf', 'myofascial', 'tight', 'stiff', 'thoracic', 'hip opener', 'hamstring stretch', 'shoulder mobility'],
    'nutrition-diet': ['nutrition', 'diet', 'macro', 'protein', 'carb', 'fat', 'calorie', 'meal plan', 'food', 'eat', 'vitamin', 'mineral', 'fiber', 'keto', 'intermittent fasting', 'plant based', 'vegan', 'mediterranean', 'paleo', 'whole food'],
    'sports-nutrition': ['supplement', 'whey', 'casein', 'creatine', 'bcaa', 'eaa', 'pre-workout', 'post-workout', 'protein powder', 'caffeine', 'electrolyte', 'carb loading', 'sports drink', 'mass gainer', 'fish oil', 'omega'],
    'weight-management': ['weight loss', 'fat loss', 'lose weight', 'bulk', 'bulking', 'cutting', 'body recomposition', 'recomp', 'bmi', 'body fat', 'tdee', 'bmr', 'calorie deficit', 'calorie surplus', 'metabolic', 'reverse diet', 'lean', 'shred'],
    'injury-prevention': ['injury', 'pain', 'hurt', 'rehab', 'rehabilitation', 'prehab', 'rotator cuff', 'knee pain', 'back pain', 'shoulder impingement', 'tendon', 'ligament', 'sprain', 'strain', 'form', 'technique', 'overtraining', 'recovery protocol'],
    'anatomy-physiology': ['anatomy', 'muscle', 'bone', 'joint', 'tendon', 'ligament', 'bicep', 'tricep', 'quad', 'hamstring', 'glute', 'deltoid', 'pectoral', 'lat', 'trap', 'skeletal', 'cardiovascular system', 'kinesiology', 'biomechanics', 'energy system', 'atp'],
    'mental-wellness': ['mental health', 'stress', 'anxiety', 'depression', 'sleep', 'motivation', 'discipline', 'mindfulness', 'meditation', 'body image', 'burnout', 'confidence', 'mind body', 'wellbeing', 'wellness'],
    'hormonal-health': ['hormone', 'testosterone', 'cortisol', 'insulin', 'growth hormone', 'thyroid', 'estrogen', 'progesterone', 'hormonal', 'endocrine', 'anabolic', 'catabolic'],
    'recovery-science': ['recovery', 'rest day', 'deload', 'cold therapy', 'ice bath', 'sauna', 'massage', 'compression', 'hrv', 'heart rate variability', 'overreach', 'sleep quality', 'active recovery'],
    'functional-health': ['posture', 'functional', 'core stability', 'movement pattern', 'balance', 'proprioception', 'fms', 'movement screen', 'desk', 'sedentary', 'pregnancy', 'postpartum', 'senior', 'elderly', 'aging'],
    'coaching-skills': ['coach', 'trainer', 'certification', 'client', 'nasm', 'ace', 'nsca', 'issa', 'personal training', 'online coaching', 'program design', 'goal setting', 'assessment', 'cpt'],
    'books-resources': ['book', 'read', 'recommend', 'resource', 'website', 'course', 'learn', 'study', 'education', 'starting strength', 'supple leopard', 'why we sleep', 'atomic habits'],
  };

  let bestCategory = 'general';
  let bestScore = 0;

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    let score = 0;
    for (const keyword of keywords) {
      if (lower.includes(keyword)) {
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  }

  return bestCategory;
}

export { bookResources, webResources, booksAndResourcesContext };
