// Local Assets Configuration
// This file manages all local assets stored in the public/assets directory
// 
// ASSET REQUIREMENTS AND SPECIFICATIONS:
// 
// PROFILE IMAGES:
// - Format: JPG/PNG
// - Dimensions: 400x400px (1:1 aspect ratio)
// - Size: < 500KB
// - Quality: High resolution for hero section display
// - Background: Preferably transparent or clean background
//
// PROJECT IMAGES:
// - Format: JPG/PNG/WebP
// - Dimensions: 800x600px (4:3 aspect ratio) for main images
// - Thumbnails: 400x300px (4:3 aspect ratio)
// - Size: < 1MB per image
// - Quality: High enough to show project details clearly
// - Content: Screenshots, UI mockups, architecture diagrams
//
// PROJECT VIDEOS:
// - Format: MP4 (H.264 codec recommended)
// - Dimensions: 1920x1080px (16:9 aspect ratio) or 1280x720px
// - Duration: 30 seconds to 2 minutes maximum
// - Size: < 10MB per video
// - Quality: 30fps, good compression
// - Content: Demo videos, project walkthroughs
//
// CERTIFICATE IMAGES:
// - Format: JPG/PNG
// - Dimensions: 1200x900px (4:3 aspect ratio)
// - Size: < 800KB
// - Quality: High resolution to show certificate details
// - Content: Official certificates, completion badges
//
// EXPERIENCE IMAGES:
// - Format: JPG/PNG
// - Dimensions: 800x600px (4:3 aspect ratio)
// - Size: < 1MB per image
// - Quality: Professional quality
// - Content: Workplace photos, project images, team photos

export interface LocalAsset {
  id: string;
  name: string;
  type: 'image' | 'video';
  path: string;
  category: 'profile' | 'project' | 'certificate' | 'experience';
  description?: string;
  dimensions?: string;
  size?: string;
  requirements?: string;
}

// Helper function to get asset URL
export const getAssetUrl = (path: string): string => {
  return path;
};

// Profile Assets
export const profileAssets: LocalAsset[] = [
  {
    id: 'manoj-profile-main',
    name: 'Manoj MS Profile Photo',
    type: 'image',
    path: '/assets/images/profile/manoj-profile.jpg',
    category: 'profile',
    description: 'Main profile photo for hero section',
    dimensions: '400x400px (1:1 aspect ratio)',
    size: '< 500KB',
    requirements: 'High resolution headshot with clean background, professional appearance'
  }
];

// Project Assets
export const projectAssets: LocalAsset[] = [
  {
    id: 'stickman-shootout-1',
    name: 'Stickman Shootout Gameplay',
    type: 'image',
    path: '/assets/images/projects/stickman-shootout-gameplay.jpg',
    category: 'project',
    description: 'Stickman Shootout gameplay screenshot showing main interface',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Clear screenshot of game interface with visible UI elements'
  },
  {
    id: 'stickman-shootout-2',
    name: 'Stickman Shootout AI Visualization',
    type: 'image',
    path: '/assets/images/projects/stickman-shootout-ai.jpg',
    category: 'project',
    description: 'AI decision-making visualization or algorithm flowchart',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Technical diagram showing AI/ML components or decision tree'
  },
  {
    id: 'stickman-demo-video',
    name: 'Stickman Shootout Demo',
    type: 'video',
    path: '/assets/videos/projects/stickman-demo.mp4',
    category: 'project',
    description: 'Live gameplay demonstration video',
    dimensions: '1280x720px (16:9 aspect ratio)',
    size: '< 10MB',
    requirements: '30-60 second gameplay footage showing AI behavior'
  },
  {
    id: 'emotion-recognition-1',
    name: 'Emotion Recognition Interface',
    type: 'image',
    path: '/assets/images/projects/emotion-recognition-ui.jpg',
    category: 'project',
    description: 'Main application interface showing emotion detection',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Screenshot of application UI with emotion analysis results'
  },
  {
    id: 'emotion-recognition-demo',
    name: 'Emotion Recognition Demo',
    type: 'video',
    path: '/assets/videos/projects/emotion-recognition-demo.mp4',
    category: 'project',
    description: 'Live demonstration of emotion detection system',
    dimensions: '1280x720px (16:9 aspect ratio)',
    size: '< 10MB',
    requirements: 'Demo showing real-time emotion detection from text/images'
  },
  {
    id: 'breast-cancer-1',
    name: 'Breast Cancer AI Model Architecture',
    type: 'image',
    path: '/assets/images/projects/breast-cancer-model.jpg',
    category: 'project',
    description: 'Neural network architecture diagram',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Technical diagram of CNN/deep learning model architecture'
  },
  {
    id: 'apollo-health-1',
    name: 'Apollo Health Website Homepage',
    type: 'image',
    path: '/assets/images/projects/apollo-health-homepage.jpg',
    category: 'project',
    description: 'Website homepage screenshot',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Full homepage screenshot showing design and layout'
  },
  {
    id: 'astro-santhvana-1',
    name: 'Astro Santhvana App Interface',
    type: 'image',
    path: '/assets/images/projects/astro-santhvana-app.jpg',
    category: 'project',
    description: 'Main application interface',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Screenshot of consultation interface or main dashboard'
  }
];

// Certificate Assets
export const certificateAssets: LocalAsset[] = [
  {
    id: 'pes-certificate',
    name: 'PES University Certificate',
    type: 'image',
    path: '/assets/images/certificates/Pes.jpg',
    category: 'certificate',
    description: 'Hacksprint 5.0 a 24-hours National Level Hackathon conducted by P. E. S. College of Engineering, Mandya',
    dimensions: '1200x900px (4:3 aspect ratio)',
    size: '< 800KB',
    requirements: 'High resolution scan/screenshot of official certificate'
  },
  {
    id: 'tensorflow-certificate',
    name: 'TensorFlow Developer Certificate',
    type: 'image',
    path: '/assets/images/certificates/tensorflow-developer.jpg',
    category: 'certificate',
    description: 'Google TensorFlow Developer certificate',
    dimensions: '1200x900px (4:3 aspect ratio)',
    size: '< 800KB',
    requirements: 'Official Google TensorFlow certification document'
  },
  {
    id: 'azure-certificate',
    name: 'Azure Fundamentals Certificate',
    type: 'image',
    path: '/assets/images/certificates/azure-fundamentals.jpg',
    category: 'certificate',
    description: 'Microsoft Azure Fundamentals certificate',
    dimensions: '1200x900px (4:3 aspect ratio)',
    size: '< 800KB',
    requirements: 'Microsoft Azure AZ-900 certification document'
  },
  {
    id: 'docker-certificate',
    name: 'Docker Certified Associate',
    type: 'image',
    path: '/assets/images/certificates/docker-certified.jpg',
    category: 'certificate',
    description: 'Docker Certified Associate certificate',
    dimensions: '1200x900px (4:3 aspect ratio)',
    size: '< 800KB',
    requirements: 'Official Docker certification document'
  },
  {
    id: 'kubernetes-certificate',
    name: 'Kubernetes Administrator Certificate',
    type: 'image',
    path: '/assets/images/certificates/kubernetes-admin.jpg',
    category: 'certificate',
    description: 'Certified Kubernetes Administrator certificate',
    dimensions: '1200x900px (4:3 aspect ratio)',
    size: '< 800KB',
    requirements: 'CNCF CKA certification document'
  },
  {
    id: 'html-introduction',
    name: 'HTML Introduction Certificate',
    type: 'image',
    path: '/assets/images/certificates/iit.jpg',
    category: 'certificate',
    description: 'Introduction to HTML certificate',
    dimensions: '1200x900px (4:3 aspect ratio)',
    size: '< 800KB',
    requirements: 'IIT Bombay HTML certification document'
  },
  {
    id: 'python-certificate',
    name: 'Python for Data Science Certificate',
    type: 'image',
    path: '/assets/images/certificates/python-data-science.jpg',
    category: 'certificate',
    description: 'IBM Python for Data Science certificate',
    dimensions: '1200x900px (4:3 aspect ratio)',
    size: '< 800KB',
    requirements: 'IBM Python certification document'
  },
  {
    id: 'java-introduction',
    name: 'Java Course Mastering the Fundamentals',
    type: 'image',
    path: '/assets/images/certificates/Java-fundaentals.jpg',
    category: 'certificate',
    description: 'Java Course Mastering the Fundamentals',
    dimensions: '1200x900px (4:3 aspect ratio)',
    size: '< 800KB',
    requirements: 'Scaler certification document'
  },
  {
    id: 'gcp-certificate',
    name: 'Google Cloud Associate Certificate',
    type: 'image',
    path: '/assets/images/certificates/gcp-associate.jpg',
    category: 'certificate',
    description: 'Google Cloud Associate Cloud Engineer certificate',
    dimensions: '1200x900px (4:3 aspect ratio)',
    size: '< 800KB',
    requirements: 'Google Cloud certification document'
  }
];

// Experience Assets
export const experienceAssets: LocalAsset[] = [
  {
    id: 'tech-solutions-1',
    name: 'Tech Solutions Workplace',
    type: 'image',
    path: '/assets/images/experience/tech-solutions-office.jpg',
    category: 'experience',
    description: 'Working environment at Tech Solutions Inc.',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Professional workplace photo or team photo'
  },
  {
    id: 'tech-solutions-2',
    name: 'Tech Solutions Project',
    type: 'image',
    path: '/assets/images/experience/tech-solutions-project.jpg',
    category: 'experience',
    description: 'Project work or development setup',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Photo of development work, code on screen, or project presentation'
  },
  {
    id: 'ai-lab-1',
    name: 'AI Research Lab Environment',
    type: 'image',
    path: '/assets/images/experience/ai-lab-research.jpg',
    category: 'experience',
    description: 'Research work at AI Lab',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Lab environment, research setup, or academic presentation'
  },
  {
    id: 'ai-lab-2',
    name: 'AI Lab Project Work',
    type: 'image',
    path: '/assets/images/experience/ai-lab-project.jpg',
    category: 'experience',
    description: 'ML model development work',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Technical work, model training, or research documentation'
  },

  {
    id: 'startup-1',
    name: 'Startup Accelerator Team',
    type: 'image',
    path: '/assets/images/experience/startup-team.jpg',
    category: 'experience',
    description: 'Team collaboration at startup',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Team photo, collaborative work, or startup environment'
  },
  {
    id: 'startup-2',
    name: 'Startup Development Work',
    type: 'image',
    path: '/assets/images/experience/startup-development.jpg',
    category: 'experience',
    description: 'Full stack development work',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Development setup, coding session, or project demo'
  },
  {
    id: 'enterprise-1',
    name: 'Enterprise Solutions Office',
    type: 'image',
    path: '/assets/images/experience/enterprise-office.jpg',
    category: 'experience',
    description: 'Professional work environment',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Corporate environment, professional setting'
  },
  {
    id: 'enterprise-2',
    name: 'Enterprise Project Work',
    type: 'image',
    path: '/assets/images/experience/enterprise-project.jpg',
    category: 'experience',
    description: 'Backend development and database work',
    dimensions: '800x600px (4:3 aspect ratio)',
    size: '< 1MB',
    requirements: 'Technical work, database design, or system architecture'
  }
];

// Utility function to get asset by ID
export const getAssetById = (id: string): LocalAsset | undefined => {
  const allAssets = [...profileAssets, ...projectAssets, ...certificateAssets, ...experienceAssets];
  return allAssets.find(asset => asset.id === id);
};

// Utility function to get assets by category
export const getAssetsByCategory = (category: LocalAsset['category']): LocalAsset[] => {
  const allAssets = [...profileAssets, ...projectAssets, ...certificateAssets, ...experienceAssets];
  return allAssets.filter(asset => asset.category === category);
};

// Function to preload images for better performance
export const preloadImage = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      console.log(`✅ Image loaded: ${url}`);
      resolve();
    };
    img.onerror = (error) => {
      console.warn(`❌ Image failed to load: ${url}`, error);
      reject(error);
    };
    img.src = url;
  });
};

// Function to preload multiple images
export const preloadImages = async (urls: string[]): Promise<void> => {
  console.log(`🔄 Preloading ${urls.length} images...`);
  try {
    const results = await Promise.allSettled(urls.map(url => preloadImage(url)));
    const successful = results.filter(result => result.status === 'fulfilled').length;
    const failed = results.filter(result => result.status === 'rejected').length;
    console.log(`✅ Preloaded ${successful}/${urls.length} images successfully`);
    if (failed > 0) {
      console.warn(`⚠️ ${failed} images failed to preload`);
    }
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

// Function to check if image exists
export const checkImageExists = async (url: string): Promise<boolean> => {
  try {
    await preloadImage(url);
    return true;
  } catch {
    return false;
  }
};

// Function to get optimized image URL
export const getOptimizedImageUrl = (url: string, width?: number, height?: number, quality: number = 80): string => {
  // If it's a Pexels URL, add optimization parameters
  if (url.includes('pexels.com')) {
    const urlObj = new URL(url);
    if (width) urlObj.searchParams.set('w', width.toString());
    if (height) urlObj.searchParams.set('h', height.toString());
    urlObj.searchParams.set('q', quality.toString());
    urlObj.searchParams.set('auto', 'compress');
    urlObj.searchParams.set('cs', 'tinysrgb');
    urlObj.searchParams.set('fit', 'crop');
    return urlObj.toString();
  }
  return url;
};

// Function to get fallback image for missing assets
export const getFallbackImage = (category: LocalAsset['category']): string => {
  const fallbacks = {
    profile: getOptimizedImageUrl('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg', 400, 400, 85),
    project: getOptimizedImageUrl('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg', 800, 600, 80),
    certificate: getOptimizedImageUrl('https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg', 800, 600, 80),
    experience: getOptimizedImageUrl('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg', 800, 600, 80)
  };
  return fallbacks[category];
};

// Generate responsive image sizes
export const generateResponsiveSizes = (baseWidth: number): string => {
  return `(max-width: 640px) ${Math.round(baseWidth * 0.5)}px, (max-width: 1024px) ${Math.round(baseWidth * 0.75)}px, ${baseWidth}px`;
};

// Create WebP fallback URLs
export const getWebPUrl = (url: string): string => {
  if (url.includes('pexels.com')) {
    const urlObj = new URL(url);
    urlObj.searchParams.set('fm', 'webp');
    return urlObj.toString();
  }
  return url;
};

// Preload critical images with priority
export const preloadCriticalImages = async (): Promise<void> => {
  const criticalImages = [
    '/img/manoj.jpg',
    '/assets/images/profile/manoj-profile.jpg',
    getFallbackImage('profile'),
    getFallbackImage('project')
  ];

  const preloadPromises = criticalImages.map(url => {
    return new Promise<void>((resolve) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      link.onload = () => resolve();
      link.onerror = () => resolve(); // Don't fail on error
      document.head.appendChild(link);
    });
  });

  await Promise.allSettled(preloadPromises);
  console.log('✅ Critical images preloaded');
};
// Auto-detect and load local assets
export const autoLoadAssets = async (): Promise<void> => {
  console.log('🔍 Auto-detecting local assets...');
  
  const allAssets = [...profileAssets, ...projectAssets, ...certificateAssets, ...experienceAssets];
  const assetUrls = allAssets.map(asset => asset.path);
  
  // Check which assets exist
  const existingAssets = await Promise.allSettled(
    assetUrls.map(async (url) => {
      const exists = await checkImageExists(url);
      return { url, exists };
    })
  );
  
  const availableAssets = existingAssets
    .filter(result => result.status === 'fulfilled' && result.value.exists)
    .map(result => result.status === 'fulfilled' ? result.value.url : '');
  
  console.log(`📁 Found ${availableAssets.length}/${assetUrls.length} local assets`);
  
  // Preload available assets
  if (availableAssets.length > 0) {
    await preloadImages(availableAssets);
  }
  
  // Preload fallback images
  const fallbackUrls = Object.values({
    profile: getFallbackImage('profile'),
    project: getFallbackImage('project'),
    certificate: getFallbackImage('certificate'),
    experience: getFallbackImage('experience')
  });
  
  console.log('🔄 Preloading fallback images...');
  await preloadImages(fallbackUrls);
};