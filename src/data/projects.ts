import { Project } from '../types';
import { getAssetUrl, getAssetById, getFallbackImage } from './assets';

export const projects: Project[] = [
  {
    id: 'stickman-shootout',
    title: 'Stickman Shootout with Adaptive AI',
    description: 'A 2D shooter game with Q-Learning AI that predicts enemy movements with 85% accuracy',
    longDescription: 'Built a dynamic 2D shooter combining three game mechanics: Chess Grid movement, quick rapport building, and Hidden Search patterns. Implemented Q-Learning algorithm that achieved 85% accuracy in predicting enemy and bomb positions while reducing response time by 40%. The AI adapts to player behavior patterns, creating an increasingly challenging gaming experience.',
    technologies: ['Python', 'PyGame', 'Flask', 'Q-Learning', 'Machine Learning'],
    images: [
      getAssetById('stickman-shootout-1')?.path || getFallbackImage('project'),
      getAssetById('stickman-shootout-2')?.path || getFallbackImage('project')
    ],
    links: {
      github: 'https://github.com/manoj-ms-aiml/stickman-shootout'
    },
    category: 'ai-ml',
    featured: true
  },
  {
    id: 'emotion-recognition',
    title: 'Instagram Emotion Recognition System',
    description: 'LSTM-based NLP model for classifying emotions from social media with 90% accuracy',
    longDescription: 'Developed a sophisticated emotion recognition system using LSTM neural networks to analyze Instagram captions and comments. The system processes natural language text through advanced preprocessing techniques and achieves 90% classification accuracy across multiple emotion categories. Integrated with Instagram Graph API for real-time social media sentiment analysis.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'NLTK', 'Instagram Graph API', 'LSTM'],
    images: [
      getAssetById('emotion-recognition-1')?.path || getFallbackImage('project'),
      getAssetById('emotion-recognition-demo')?.path || getFallbackImage('project')
    ],
    links: {
      github: 'https://github.com/manoj-ms-aiml/emotion-recognition'
    },
    category: 'ai-ml',
    featured: true
  },
  {
    id: 'breast-cancer-detection',
    title: 'AI-Powered Breast Cancer Classification',
    description: 'Deep learning model for automatic IDC breast cancer detection with 85% accuracy',
    longDescription: 'Developed and evaluated deep learning models for classifying Invasive Ductal Carcinoma in digital pathology images. Implemented both baseline CNN and transfer learning approaches using VGG-16, processing over 277K pathology image patches. The system achieves up to 85% accuracy in medical image classification, demonstrating potential for clinical decision support.',
    technologies: ['Python', 'TensorFlow', 'CNN', 'Transfer Learning', 'VGG-16', 'Medical AI'],
    images: [
      getAssetById('breast-cancer-1')?.path || getFallbackImage('project'),
      getFallbackImage('project')
    ],
    links: {
      github: 'https://github.com/manoj-ms-aiml/breast-cancer-ai'
    },
    category: 'research',
    featured: true
  },
  {
    id: 'apollo-health-fitness',
    title: 'Apollo Health & Fitness Website',
    description: 'Full-stack fitness platform with SEO optimization achieving 100+ monthly visitors',
    longDescription: 'Designed, developed, and deployed a comprehensive fitness platform featuring workout plans, nutrition tracking, and client management. Implemented Yoast SEO strategies that increased monthly traffic to 100+ visitors. The platform includes responsive design, content management system, and integrated booking functionality for personal training sessions.',
    technologies: ['WordPress', 'PHP', 'MySQL', 'Yoast SEO', 'JavaScript', 'CSS3'],
    images: [
      getAssetById('apollo-health-1')?.path || getFallbackImage('project'),
      getFallbackImage('project')
    ],
    links: {
      live: 'https://apollohealthandfitness.com'
    },
    category: 'web-dev',
    featured: false
  },
  {
    id: 'astro-santhvana',
    title: 'Astro Santhvana Consultation App',
    description: 'Real-time astrology consultation platform with video integration',
    longDescription: 'Developed Python backend modules using Flask and MySQL for an astrology consultation application. Integrated YouTube videos via IFrame Player API with real-time event updates using Flask-SocketIO for enhanced user engagement. The platform supports live consultations, appointment scheduling, and multimedia content delivery.',
    technologies: ['Python', 'Flask', 'MySQL', 'Flask-SocketIO', 'YouTube API', 'WebRTC'],
    images: [
      getAssetById('astro-santhvana-1')?.path || getFallbackImage('project'),
      getFallbackImage('project')
    ],
    links: {
      github: 'https://github.com/manoj-ms-aiml/astro-santhvana'
    },
    category: 'web-dev',
    featured: false
  }
];