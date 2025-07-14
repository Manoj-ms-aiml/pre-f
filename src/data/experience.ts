import { Experience } from '../types';
import { getAssetById, getFallbackImage } from './assets';

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Software Developer Intern",
    production: "Wider technologies",
    director: "Parikshith N",
    year: 2025,
    startDate: "01/06/2024",
    endDate: "28/02/2025",
    insights: "This internship provided comprehensive exposure to full-stack web development and client relationship management. Working directly with multiple clients taught me the importance of understanding business requirements and translating them into technical solutions. The experience with SEO optimization and performance improvements gave me valuable insights into user experience and digital marketing strategies.",
    keyLearnings: [
      "Client Communication & Requirements Analysis",
      "SEO Optimization & Digital Marketing",
      "Full-Stack Web Development",
      "Performance Optimization Techniques"
    ],
    description: "Jun 2024 - feb 2025 :Developed responsive websites for multiple clients including Habibs AK-Textiles and Janani Mansion. Created and optimized apollohealthandfitness website using Yoast SEO, increasing monthly traffic by 70%. Built Kayess Square platform for Chartered Accountants, improving file processing speed by 40%. Developed Astro Santhvana's backend using Flask and MySQL with YouTube integration and real-time updates. Enhanced Sri Kanteshwara Electronics Billing System, improving transaction accuracy by 25% and reducing processing time by 30%.",
    images: [
      getAssetById('tech-solutions-1')?.path || getFallbackImage('experience'),
      getAssetById('tech-solutions-2')?.path || getFallbackImage('experience')
    ],
    category: "tech"
  },
  {
    id: "2",
    role: "AI Intern",
    production: "AI intern at IBM",
    director: "Dr. Sarah Chen",
    year: 2024,
    startDate: "01/07/2024",
    endDate: "31/08/2024",
    insights: "This intensive AI internship at IBM provided hands-on experience with enterprise-level machine learning implementations. Working with IBM Watson tools and cloud infrastructure gave me deep insights into scalable AI solutions and the importance of model deployment strategies. The focus on sustainability-focused AI solutions opened my perspective on how technology can address global challenges.",
    keyLearnings: [
      "Enterprise AI Implementation",
      "IBM Watson & Cloud Technologies",
      "Sustainable AI Solutions",
      "Model Deployment & Testing"
    ],
    description: "Jul 2024 - Aug 2024 :Completed a hands-on internship program focused on Artificial Intelligence applications in real-world scenarios. Implemented ML models using Python for data science tasks, leveraging IBM Watson tools and Jupyter Notebooks. Built and tested predictive models for classification tasks, aids to a mini capstone project on decision making systems. Contributed to IBM Cloud migration efforts, optimizing resource utilization and reducing costs by 20%. Gained practical exposure to REST API integrations, model deployment, and component testing. Enhanced skills in sustainability-focused AI solutions, data exchange processes, and cloud-based strategies",
    images: [
      getAssetById('ai-lab-1')?.path || getFallbackImage('experience'),
      getAssetById('ai-lab-2')?.path || getFallbackImage('experience')
    ],
    category: "research"

  }
]; 