import { Certificate } from '../types';
import { getAssetById, getFallbackImage } from './assets';

export const certificates: Certificate[] = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.',
    image: getAssetById('aws-certificate')?.path || getFallbackImage('certificate'),
    credentialId: 'AWS-CCP-2024-001',
    verificationUrl: 'https://aws.amazon.com/certification/verify',
    category: 'cloud',
    featured: true
  },
  {
    id: 'tensorflow-developer',
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: '2024',
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
    description: 'Demonstrates skills required to be a successful Kubernetes Administrator in industry today.',
    image: getAssetById('kubernetes-certificate')?.path || getFallbackImage('certificate'),
    credentialId: 'CKA-2023-005',
    verificationUrl: 'https://training.linuxfoundation.org/certification/verify',
    category: 'devops',
    featured: false
  },
  {
    id: 'react-advanced',
    title: 'Advanced React Development',
    issuer: 'Meta',
    date: '2023',
    description: 'Advanced concepts in React including hooks, context, performance optimization, and testing.',
    image: getAssetById('react-certificate')?.path || getFallbackImage('certificate'),
    credentialId: 'META-REACT-2023-006',
    verificationUrl: 'https://coursera.org/verify',
    category: 'web-dev',
    featured: false
  },
  {
    id: 'python-advanced',
    title: 'Python for Data Science and AI',
    issuer: 'IBM',
    date: '2022',
    description: 'Comprehensive understanding of Python programming for data science and artificial intelligence applications.',
    image: getAssetById('python-certificate')?.path || getFallbackImage('certificate'),
    credentialId: 'IBM-PY-2022-007',
    verificationUrl: 'https://ibm.com/training/verify',
    category: 'programming',
    featured: false
  },
  {
    id: 'gcp-associate',
    title: 'Google Cloud Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: '2022',
    description: 'Demonstrates ability to deploy applications, monitor operations, and maintain cloud projects on Google Cloud.',
    image: getAssetById('gcp-certificate')?.path || getFallbackImage('certificate'),
    credentialId: 'GCP-ACE-2022-008',
    verificationUrl: 'https://cloud.google.com/certification/verify',
    category: 'cloud',
    featured: false
  }
];