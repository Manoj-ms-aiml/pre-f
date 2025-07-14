import { Certificate } from '../types';
import { getAssetById, getFallbackImage } from './assets';

export const certificates: Certificate[] = [
  {
    id: 'pes-certificate',
    title: 'HackSprint 5.0 Paricipation Certificate',
    issuer: 'PES University',
    date: '17/5/2024',
    uniqueDetails: "Participated in a 24-hour National Level Hackathon where our team 'Shadow Minds' developed an innovative AI-based gaming solution. This hackathon focused on real-world problem solving using emerging technologies and provided exposure to rapid prototyping and collaborative development under time constraints.",
    skillsValidated: [
      "Rapid Prototyping & Development",
      "AI/ML Implementation in Gaming",
      "Team Collaboration Under Pressure",
      "Innovative Problem Solving"
    ],
    description: 'Developed Stickman Shootout with Adaptive AI, a gamified AI-based shooter project recognized for innovation and real-time learning implementation.',
    image: getAssetById('pes-certificate')?.path || getFallbackImage('certificate'),
    credentialId: 'Shadow minds',
    verificationUrl: 'https://drive.google.com/file/d/11edLQMgrxSkfWBsq5JJ4tL8EuhmZx80F/view?usp=drive_link',
    category: 'ai-ml',
    featured: true
  },
  {
    id: 'tensorflow-developer',
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: '2024',
    uniqueDetails: "This professional certification validates expertise in building and training neural networks using TensorFlow. The certification covers computer vision, natural language processing, time series forecasting, and sequence modeling, demonstrating proficiency in production-ready machine learning solutions.",
    skillsValidated: [
      "Neural Network Architecture Design",
      "Computer Vision with CNNs",
      "Natural Language Processing",
      "Production ML Model Deployment"
    ],
    description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and machine learning problems.',
    image: getAssetById('tensorflow-certificate')?.path || getFallbackImage('certificate'),
    credentialId: 'TF-DEV-2024-002',
    verificationUrl: 'https://www.credential.net/verify',
    category: 'ai-ml',
    featured: true
  },
  {
    id: 'azure-fundamentals',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: '2023',
    uniqueDetails: "This foundational certification covers core Azure services, security, privacy, compliance, and trust. It validates understanding of cloud concepts, core Azure services, Azure pricing and support, and the fundamentals of cloud security and governance.",
    skillsValidated: [
      "Cloud Computing Fundamentals",
      "Azure Core Services",
      "Cloud Security & Compliance",
      "Azure Pricing & Support Models"
    ],
    description: 'Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
    image: getAssetById('azure-certificate')?.path || getFallbackImage('certificate'),
    credentialId: 'AZ-900-2023-003',
    verificationUrl: 'https://learn.microsoft.com/en-us/certifications/verify',
    category: 'cloud',
    featured: true
  },
  {
    id: 'docker-certified',
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2023',
    uniqueDetails: "This certification validates skills in containerization technologies, Docker platform administration, and container orchestration. It covers Docker architecture, image management, networking, storage, and security best practices for production environments.",
    skillsValidated: [
      "Container Architecture & Management",
      "Docker Image Optimization",
      "Container Networking & Storage",
      "Production Security Practices"
    ],
    description: 'Validates skills in containerization, Docker platform, and container orchestration.',
    image: getAssetById('docker-certificate')?.path || getFallbackImage('certificate'),
    credentialId: 'DCA-2023-004',
    verificationUrl: 'https://docker.com/certification/verify',
    category: 'devops',
    featured: false
  },
  {
    id: 'kubernetes-admin',
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: '2023',
    uniqueDetails: "This hands-on certification demonstrates the ability to perform the responsibilities of a Kubernetes administrator. It covers cluster architecture, workloads and scheduling, services and networking, storage, and troubleshooting in production Kubernetes environments.",
    skillsValidated: [
      "Kubernetes Cluster Management",
      "Workload Scheduling & Scaling",
      "Service Mesh & Networking",
      "Production Troubleshooting"
    ],
    description: 'Demonstrates skills required to be a successful Kubernetes Administrator in industry today.',
    image: getAssetById('kubernetes-certificate')?.path || getFallbackImage('certificate'),
    credentialId: 'CKA-2023-005',
    verificationUrl: 'https://training.linuxfoundation.org/certification/verify',
    category: 'devops',
    featured: false
  },
  {
    id: 'html-introduction',
    title: 'Introduction to HTML',
    issuer: 'IIT Bombay',
    date: '4/3/2024',
    uniqueDetails: "This comprehensive course from IIT Bombay covered advanced HTML concepts including semantic markup, accessibility standards, form validation, and responsive design principles. The curriculum emphasized modern web standards and best practices for professional web development.",
    skillsValidated: [
      "Semantic HTML5 Markup",
      "Web Accessibility Standards",
      "Form Design & Validation",
      "Responsive Web Design"
    ],
    description: 'Advanced concepts in HTML including document structure, semantic elements, forms, responsive design, and accessibility standards.',
    image: getAssetById('html-introduction')?.path || getFallbackImage('certificate'),
    credentialId: '3773291I2Q',
    verificationUrl: 'https://drive.google.com/file/d/1pVFZMUWDdlKvpqL0Ncc91Qd61rhiPiro/view?usp=sharing',
    category: 'web-dev',
    featured: false
  },
  {
    id: 'python-advanced',
    title: 'Python for Data Science and AI',
    issuer: 'IBM',
    date: '2022',
    uniqueDetails: "This comprehensive IBM certification covers Python programming for data science applications, including data manipulation with Pandas, visualization with Matplotlib, and machine learning with Scikit-learn. The course emphasized practical applications in AI and data analytics.",
    skillsValidated: [
      "Data Manipulation with Pandas",
      "Statistical Analysis & Visualization",
      "Machine Learning with Scikit-learn",
      "AI Application Development"
    ],
    description: 'Comprehensive understanding of Python programming for data science and artificial intelligence applications.',
    image: getAssetById('python-certificate')?.path || getFallbackImage('certificate'),
    credentialId: 'IBM-PY-2022-007',
    verificationUrl: 'https://ibm.com/training/verify',
    category: 'programming',
    featured: false
  },
 {
    id: 'java-introduction',
    title: 'Java Course certificate- Mastering the Fundamentals',
    issuer: 'Scaler',
    date: '25/11/2023',
    uniqueDetails: "This intensive Java fundamentals course from Scaler covered 12 comprehensive modules with 9 practical challenges through 86 detailed video tutorials. The curriculum focused on object-oriented programming principles, data structures, and algorithm implementation in Java.",
    skillsValidated: [
      "Object-Oriented Programming",
      "Java Data Structures",
      "Algorithm Implementation",
      "Problem-Solving Techniques"
    ],
    description: '. Mastering the Fundamentals, covering 12 modules and 9 challenges through 86 video tutorials.',
    image: getAssetById('java-introduction')?.path || getFallbackImage('certificate'),
    credentialId: 'Scaler-01',
    verificationUrl: 'https://drive.google.com/file/d/1fPQGlRN53c9HJynkYnC7ZhS4o49SPhbI/view?usp=drive_link',
    category: 'programming',
    featured: false
  },
  {
    id: 'gcp-associate',
    title: 'Google Cloud Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: '2022',
    uniqueDetails: "This professional certification validates the ability to deploy applications, monitor operations, and maintain cloud projects on Google Cloud Platform. It covers compute, storage, networking, and security services with hands-on experience in cloud architecture design.",
    skillsValidated: [
      "GCP Service Architecture",
      "Cloud Application Deployment",
      "Infrastructure Monitoring",
      "Cloud Security Implementation"
    ],
    description: 'Demonstrates ability to deploy applications, monitor operations, and maintain cloud projects on Google Cloud.',
    image: getAssetById('gcp-certificate')?.path || getFallbackImage('certificate'),
    credentialId: 'GCP-ACE-2022-008',
    verificationUrl: 'https://cloud.google.com/certification/verify',
    category: 'cloud',
    featured: false
  }
];