// Google Drive Assets Configuration
// Replace the file IDs with your actual Google Drive file IDs
// To get the file ID: Share the file -> Copy link -> Extract the ID from the URL
// Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing

export interface DriveAsset {
  id: string;
  name: string;
  type: 'image' | 'video';
  driveId: string;
  category: 'profile' | 'project' | 'certificate' | 'experience';
  description?: string;
}

// Helper function to convert Google Drive link to direct access URL
export const getDriveUrl = (fileId: string, type: 'image' | 'video' = 'image'): string => {
  if (type === 'video') {
    // For videos, use the embed format
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  // For images, use the direct download format
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};

// Profile Assets
export const profileAssets: DriveAsset[] = [
  {
    id: 'manoj-profile-main',
    name: 'Manoj MS Profile Photo',
    type: 'image',
    driveId: 'YOUR_PROFILE_PHOTO_DRIVE_ID', // Replace with your actual Drive file ID
    category: 'profile',
    description: 'Main profile photo for hero section'
  }
];

// Project Assets
export const projectAssets: DriveAsset[] = [
  {
    id: 'stickman-shootout-1',
    name: 'Stickman Shootout Screenshot 1',
    type: 'image',
    driveId: 'YOUR_PROJECT_IMAGE_1_DRIVE_ID', // Replace with actual Drive file ID
    category: 'project',
    description: 'Stickman Shootout gameplay screenshot'
  },
  {
    id: 'stickman-shootout-2',
    name: 'Stickman Shootout Screenshot 2',
    type: 'image',
    driveId: 'YOUR_PROJECT_IMAGE_2_DRIVE_ID', // Replace with actual Drive file ID
    category: 'project',
    description: 'Stickman Shootout AI visualization'
  },
  {
    id: 'emotion-recognition-1',
    name: 'Emotion Recognition Demo',
    type: 'image',
    driveId: 'YOUR_EMOTION_PROJECT_1_DRIVE_ID', // Replace with actual Drive file ID
    category: 'project',
    description: 'Emotion recognition system interface'
  },
  {
    id: 'emotion-recognition-video',
    name: 'Emotion Recognition Demo Video',
    type: 'video',
    driveId: 'YOUR_EMOTION_VIDEO_DRIVE_ID', // Replace with actual Drive file ID
    category: 'project',
    description: 'Live demo of emotion recognition system'
  },
  {
    id: 'breast-cancer-1',
    name: 'Breast Cancer AI Model',
    type: 'image',
    driveId: 'YOUR_CANCER_PROJECT_1_DRIVE_ID', // Replace with actual Drive file ID
    category: 'project',
    description: 'AI model architecture visualization'
  },
  {
    id: 'apollo-health-1',
    name: 'Apollo Health Website',
    type: 'image',
    driveId: 'YOUR_APOLLO_PROJECT_1_DRIVE_ID', // Replace with actual Drive file ID
    category: 'project',
    description: 'Apollo Health website homepage'
  },
  {
    id: 'astro-santhvana-1',
    name: 'Astro Santhvana App',
    type: 'image',
    driveId: 'YOUR_ASTRO_PROJECT_1_DRIVE_ID', // Replace with actual Drive file ID
    category: 'project',
    description: 'Astro Santhvana consultation interface'
  }
];

// Certificate Assets
export const certificateAssets: DriveAsset[] = [
  {
    id: 'aws-certificate',
    name: 'AWS Cloud Practitioner Certificate',
    type: 'image',
    driveId: 'YOUR_AWS_CERT_DRIVE_ID', // Replace with actual Drive file ID
    category: 'certificate',
    description: 'AWS Certified Cloud Practitioner certificate'
  },
  {
    id: 'tensorflow-certificate',
    name: 'TensorFlow Developer Certificate',
    type: 'image',
    driveId: 'YOUR_TF_CERT_DRIVE_ID', // Replace with actual Drive file ID
    category: 'certificate',
    description: 'Google TensorFlow Developer certificate'
  },
  {
    id: 'azure-certificate',
    name: 'Azure Fundamentals Certificate',
    type: 'image',
    driveId: 'YOUR_AZURE_CERT_DRIVE_ID', // Replace with actual Drive file ID
    category: 'certificate',
    description: 'Microsoft Azure Fundamentals certificate'
  },
  {
    id: 'docker-certificate',
    name: 'Docker Certified Associate',
    type: 'image',
    driveId: 'YOUR_DOCKER_CERT_DRIVE_ID', // Replace with actual Drive file ID
    category: 'certificate',
    description: 'Docker Certified Associate certificate'
  },
  {
    id: 'kubernetes-certificate',
    name: 'Kubernetes Administrator Certificate',
    type: 'image',
    driveId: 'YOUR_K8S_CERT_DRIVE_ID', // Replace with actual Drive file ID
    category: 'certificate',
    description: 'Certified Kubernetes Administrator certificate'
  },
  {
    id: 'react-certificate',
    name: 'Advanced React Certificate',
    type: 'image',
    driveId: 'YOUR_REACT_CERT_DRIVE_ID', // Replace with actual Drive file ID
    category: 'certificate',
    description: 'Meta Advanced React Development certificate'
  },
  {
    id: 'python-certificate',
    name: 'Python for Data Science Certificate',
    type: 'image',
    driveId: 'YOUR_PYTHON_CERT_DRIVE_ID', // Replace with actual Drive file ID
    category: 'certificate',
    description: 'IBM Python for Data Science certificate'
  },
  {
    id: 'gcp-certificate',
    name: 'Google Cloud Associate Certificate',
    type: 'image',
    driveId: 'YOUR_GCP_CERT_DRIVE_ID', // Replace with actual Drive file ID
    category: 'certificate',
    description: 'Google Cloud Associate Cloud Engineer certificate'
  }
];

// Experience Assets
export const experienceAssets: DriveAsset[] = [
  {
    id: 'tech-solutions-1',
    name: 'Tech Solutions Internship',
    type: 'image',
    driveId: 'YOUR_TECH_EXP_1_DRIVE_ID', // Replace with actual Drive file ID
    category: 'experience',
    description: 'Working at Tech Solutions Inc.'
  },
  {
    id: 'tech-solutions-2',
    name: 'Tech Solutions Project',
    type: 'image',
    driveId: 'YOUR_TECH_EXP_2_DRIVE_ID', // Replace with actual Drive file ID
    category: 'experience',
    description: 'Project showcase at Tech Solutions'
  },
  {
    id: 'ai-lab-1',
    name: 'AI Research Lab',
    type: 'image',
    driveId: 'YOUR_AI_LAB_1_DRIVE_ID', // Replace with actual Drive file ID
    category: 'experience',
    description: 'Research work at AI Lab'
  },
  {
    id: 'ai-lab-2',
    name: 'AI Lab Research',
    type: 'image',
    driveId: 'YOUR_AI_LAB_2_DRIVE_ID', // Replace with actual Drive file ID
    category: 'experience',
    description: 'ML model development'
  },
  {
    id: 'startup-1',
    name: 'Startup Accelerator',
    type: 'image',
    driveId: 'YOUR_STARTUP_1_DRIVE_ID', // Replace with actual Drive file ID
    category: 'experience',
    description: 'Full stack development work'
  },
  {
    id: 'startup-2',
    name: 'Startup Project',
    type: 'image',
    driveId: 'YOUR_STARTUP_2_DRIVE_ID', // Replace with actual Drive file ID
    category: 'experience',
    description: 'Team collaboration at startup'
  },
  {
    id: 'enterprise-1',
    name: 'Enterprise Solutions',
    type: 'image',
    driveId: 'YOUR_ENTERPRISE_1_DRIVE_ID', // Replace with actual Drive file ID
    category: 'experience',
    description: 'Backend development work'
  },
  {
    id: 'enterprise-2',
    name: 'Enterprise Project',
    type: 'image',
    driveId: 'YOUR_ENTERPRISE_2_DRIVE_ID', // Replace with actual Drive file ID
    category: 'experience',
    description: 'Database optimization project'
  }
];

// Utility function to get asset by ID
export const getAssetById = (id: string): DriveAsset | undefined => {
  const allAssets = [...profileAssets, ...projectAssets, ...certificateAssets, ...experienceAssets];
  return allAssets.find(asset => asset.id === id);
};

// Utility function to get assets by category
export const getAssetsByCategory = (category: DriveAsset['category']): DriveAsset[] => {
  const allAssets = [...profileAssets, ...projectAssets, ...certificateAssets, ...experienceAssets];
  return allAssets.filter(asset => asset.category === category);
};

// Function to preload images for better performance
export const preloadImage = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = url;
  });
};

// Function to preload multiple images
export const preloadImages = async (urls: string[]): Promise<void> => {
  try {
    await Promise.all(urls.map(url => preloadImage(url)));
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};