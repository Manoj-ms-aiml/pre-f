import { Experience } from '../types';
import { getDriveUrl, getAssetById } from './driveAssets';

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Software Development Intern",
    production: "Tech Solutions Inc.",
    director: "John Smith",
    year: 2023,
    description: "Developed and maintained web applications using React and Node.js. Implemented RESTful APIs and integrated with databases. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    images: [
      getDriveUrl(getAssetById('tech-solutions-1')?.driveId || '', 'image') || "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      getDriveUrl(getAssetById('tech-solutions-2')?.driveId || '', 'image') || "https://images.pexels.com/photos/7862662/pexels-photo-7862662.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "tech"
  },
  {
    id: "2",
    role: "Machine Learning Research Assistant",
    production: "AI Research Lab",
    director: "Dr. Sarah Chen",
    year: 2022,
    description: "Conducted research on natural language processing and computer vision. Implemented and evaluated machine learning models using Python and TensorFlow. Published research findings in academic conferences.",
    images: [
      getDriveUrl(getAssetById('ai-lab-1')?.driveId || '', 'image') || "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      getDriveUrl(getAssetById('ai-lab-2')?.driveId || '', 'image') || "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "research"
  },
  {
    id: "3",
    role: "Full Stack Developer",
    production: "Startup Accelerator",
    director: "Mike Johnson",
    year: 2021,
    description: "Built scalable web applications using modern technologies. Implemented CI/CD pipelines and automated testing. Mentored junior developers and conducted code reviews.",
    images: [
      getDriveUrl(getAssetById('startup-1')?.driveId || '', 'image') || "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=800",
      getDriveUrl(getAssetById('startup-2')?.driveId || '', 'image') || "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "tech"
  },
  {
    id: "4",
    role: "Software Engineering Intern",
    production: "Enterprise Solutions",
    director: "Lisa Wang",
    year: 2020,
    description: "Developed backend services using Java and Spring Boot. Created database schemas and optimized query performance. Participated in agile development processes and sprint planning.",
    images: [
      getDriveUrl(getAssetById('enterprise-1')?.driveId || '', 'image') || "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      getDriveUrl(getAssetById('enterprise-2')?.driveId || '', 'image') || "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "tech"
  }
]; 