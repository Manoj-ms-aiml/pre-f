import { Skill } from '../types';

export const skills: Skill[] = [
  // Programming Languages
  { 
    id: 'python', 
    name: 'Python', 
    category: 'programming', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
    color: '#3776ab' 
  },
  { 
    id: 'javascript', 
    name: 'JavaScript', 
    category: 'programming', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
    color: '#f7df1e' 
  },
  { 
    id: 'java', 
    name: 'Java', 
    category: 'programming', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', 
    color: '#007396' 
  },
  { 
    id: 'cpp', 
    name: 'C++', 
    category: 'programming', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', 
    color: '#00599c' 
  },
  { 
    id: 'sql', 
    name: 'SQL', 
    category: 'programming', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 
    color: '#336791' 
  },

  // AI/ML
  { 
    id: 'tensorflow', 
    name: 'TensorFlow', 
    category: 'ai-ml', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', 
    color: '#ff6f00' 
  },
  { 
    id: 'pytorch', 
    name: 'PyTorch', 
    category: 'ai-ml', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', 
    color: '#ee4c2c' 
  },
  { 
    id: 'sklearn', 
    name: 'Scikit-learn', 
    category: 'ai-ml', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', 
    color: '#f7931e' 
  },
  { 
    id: 'keras', 
    name: 'Keras', 
    category: 'ai-ml', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg', 
    color: '#d00000' 
  },
  { 
    id: 'opencv', 
    name: 'OpenCV', 
    category: 'ai-ml', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', 
    color: '#5c3ee8' 
  },

  // Web Technologies
  { 
    id: 'react', 
    name: 'React.js', 
    category: 'web', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
    color: '#61dafb' 
  },
  { 
    id: 'nodejs', 
    name: 'Node.js', 
    category: 'web', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 
    color: '#339933' 
  },
  { 
    id: 'express', 
    name: 'Express.js', 
    category: 'web', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 
    color: '#000000' 
  },
  { 
    id: 'flask', 
    name: 'Flask', 
    category: 'web', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', 
    color: '#000000' 
  },
  { 
    id: 'html5', 
    name: 'HTML5', 
    category: 'web', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 
    color: '#e34f26' 
  },
  { 
    id: 'css3', 
    name: 'CSS3', 
    category: 'web', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 
    color: '#1572b6' 
  },

  // Tools & Technologies
  { 
    id: 'git', 
    name: 'Git', 
    category: 'tools', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', 
    color: '#f05032' 
  },
  { 
    id: 'docker', 
    name: 'Docker', 
    category: 'tools', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', 
    color: '#2496ed' 
  },
  { 
    id: 'aws', 
    name: 'AWS', 
    category: 'tools', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', 
    color: '#ff9900' 
  },
  { 
    id: 'gcp', 
    name: 'Google Cloud', 
    category: 'tools', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', 
    color: '#4285f4' 
  },
  { 
    id: 'mysql', 
    name: 'MySQL', 
    category: 'tools', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 
    color: '#4479a1' 
  },
  { 
    id: 'postgresql', 
    name: 'PostgreSQL', 
    category: 'tools', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', 
    color: '#336791' 
  },

  // Soft Skills
  { 
    id: 'leadership', 
    name: 'Leadership', 
    category: 'soft-skills', 
    icon: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png', 
    color: '#ffd700' 
  },
  { 
    id: 'communication', 
    name: 'Communication', 
    category: 'soft-skills', 
    icon: 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png', 
    color: '#20b2aa' 
  },
  { 
    id: 'teamwork', 
    name: 'Team Collaboration', 
    category: 'soft-skills', 
    icon: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png', 
    color: '#32cd32' 
  },
  { 
    id: 'problem-solving', 
    name: 'Problem Solving', 
    category: 'soft-skills', 
    icon: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png', 
    color: '#9370db' 
  },
  { 
    id: 'adaptability', 
    name: 'Adaptability', 
    category: 'soft-skills', 
    icon: 'https://cdn-icons-png.flaticon.com/512/1077/1077046.png', 
    color: '#ff69b4' 
  }
];