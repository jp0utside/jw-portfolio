// Technology color mapping for consistent styling across the site
import { skills } from '../data/skills';

// Helper function to find which category a technology belongs to
const findTechnologyCategory = (tech) => {
  const techLower = tech.toLowerCase();
  
  // Check Tools section
  if (skills.tools) {
    for (const [category, skillList] of Object.entries(skills.tools)) {
      if (skillList.some(skill => skill.toLowerCase() === techLower)) {
        return category;
      }
    }
  }
  
  // Check Technical Skills section
  if (skills.technicalSkills) {
    for (const [category, skillList] of Object.entries(skills.technicalSkills)) {
      if (skillList.some(skill => skill.toLowerCase() === techLower)) {
        return category;
      }
    }
  }
  
  return null; // Technology not found in any category
};

// Color mapping for skill categories - used by Skills section
export const getCategoryColor = (category) => {
  const categoryColors = {
    // Tools section categories
    'Programming Languages': 'from-emerald-500 to-green-500',
    'Frontend': 'from-yellow-500 to-orange-500',
    'Backend': 'from-blue-500 to-cyan-500',
    'Machine Learning': 'from-indigo-500 to-purple-500',
    'Data Management': 'from-pink-500 to-rose-500',
    'Cloud & Dev Tools': 'from-orange-500 to-red-500',
    
    // Technical Skills section categories
    'Web': 'from-yellow-500 to-orange-500',
    'Data': 'from-pink-500 to-rose-500',
    'Machine Learning/AI': 'from-indigo-500 to-purple-500',
    'Theory': 'from-cyan-500 to-emerald-500',
    'Support & Documentation': 'from-red-500 to-orange-500'
  };
  
  return categoryColors[category] || 'from-gray-500 to-gray-600';
};

// Icon mapping for skill categories - used by Skills section
export const getCategoryIcon = (category) => {
  const categoryIcons = {
    // Tools section categories
    'Programming Languages': '📜',
    'Frontend': '🎨',
    'Backend': '⚙️',
    'Machine Learning': '🤖',
    'Data Management': '🗄️',
    'Cloud & Dev Tools': '☁️',
    
    // Technical Skills section categories
    'Web': '🌐',
    'Data': '📊',
    'Machine Learning/AI': '🤖',
    'Theory': '🧮',
    'Support & Documentation': '📚'
  };
  
  return categoryIcons[category] || '💻';
};

// Individual technology color mapping - used by Experience and Projects sections
export const getTechColor = (tech) => {
  // First, try to find the technology in the skills categories
  const category = findTechnologyCategory(tech);
  if (category) {
    return getCategoryColor(category);
  }
  
  // Fallback: Handle technologies that aren't in skills but appear in experience/projects
  const techLower = tech.toLowerCase();
  
  // Handle special cases that might not be in skills
  if (techLower.includes('matlab') || techLower.includes('signal processing') || 
      techLower.includes('wlan toolbox') || techLower.includes('rf blockset')) {
    return 'from-indigo-500 to-purple-500'; // ML/Research tools
  }
  
  if (techLower.includes('gradescope') || techLower.includes('scrum') || techLower.includes('jwt') ||
      techLower.includes('lucide react')) {
    return 'from-orange-500 to-red-500'; // Tools & Platforms
  }
  
  if (techLower.includes('teaching')) {
    return 'from-red-500 to-orange-500'; // Support & Documentation
  }
  
  // Default color for unmatched technologies
  return 'from-gray-500 to-gray-600';
};

// Individual technology icon mapping - used by all sections
export const getTechIcon = (tech) => {
  const techLower = tech.toLowerCase();
  
  // Programming Languages
  if (techLower.includes('python')) return '🐍';
  if (techLower.includes('javascript')) return '📜';
  if (techLower.includes('java')) return '☕';
  if (techLower.includes('c++')) return '⚡';
  if (techLower.includes('sql')) return '🗄️';
  if (techLower.includes('html')) return '🌐';
  if (techLower.includes('css')) return '🎨';
  if (techLower.includes('php')) return '🐘';
  if (techLower.includes('matlab')) return '📊';
  if (techLower.includes('go')) return '🐹';
  if (techLower.includes('typescript')) return '📘';
  if (techLower.includes('ruby')) return '💎';
  
  // Frontend
  if (techLower.includes('react')) return '⚛️';
  if (techLower.includes('vue')) return '💚';
  if (techLower.includes('angular')) return '🅰️';
  if (techLower.includes('html5')) return '🌐';
  if (techLower.includes('frontend development')) return '🎨';
  if (techLower.includes('ui/ux design')) return '✏️';
  if (techLower.includes('react native')) return '📱';
  
  // Backend
  if (techLower.includes('node')) return '🟢';
  if (techLower.includes('fastapi')) return '🚀';
  if (techLower.includes('restful') || techLower.includes('api') || techLower.includes('api development')) return '🔌';
  if (techLower.includes('microservices')) return '🏗️';
  if (techLower.includes('codeigniter')) return '🔥';
  if (techLower.includes('backend development')) return '⚙️';
  
  // Machine Learning
  if (techLower.includes('pytorch')) return '🔥';
  if (techLower.includes('scikit')) return '🤖';
  if (techLower.includes('pandas')) return '🐼';
  if (techLower.includes('numpy')) return '🔢';
  if (techLower.includes('deep learning')) return '🧠';
  if (techLower.includes('reinforcement learning')) return '🎯';
  if (techLower.includes('model selection')) return '🎯';
  if (techLower.includes('feature engineering')) return '⚙️';
  if (techLower.includes('model training')) return '🏋️';
  if (techLower.includes('performance evaluation')) return '📊';
  if (techLower.includes('lstm')) return '🧠';
  if (techLower.includes('claude ai') || techLower.includes('cursor ai')) return '🤖';
  
  // Data Management
  if (techLower.includes('postgresql')) return '🐘';
  if (techLower.includes('mysql')) return '🐬';
  if (techLower.includes('sqlite')) return '💾';
  if (techLower.includes('database design')) return '🏗️';
  if (techLower.includes('data analysis')) return '📈';
  if (techLower.includes('database management')) return '🗄️';
  if (techLower.includes('data visualization')) return '📊';
  
  // Cloud & Dev Tools
  if (techLower.includes('aws')) return '☁️';
  if (techLower.includes('amazon s3')) return '🪣';
  if (techLower.includes('heroku')) return '🟣';
  if (techLower.includes('docker')) return '🐳';
  if (techLower.includes('github')) return '📚';
  if (techLower.includes('git')) return '📚';
  if (techLower.includes('postcss')) return '🎨';
  
  // Web Development Tools
  if (techLower.includes('vite')) return '⚡';
  if (techLower.includes('webpack')) return '📦';
  if (techLower.includes('babel')) return '🔄';
  if (techLower.includes('eslint')) return '🔍';
  
  // Theory
  if (techLower.includes('data structures')) return '🏗️';
  if (techLower.includes('algorithmic analysis')) return '🧮';
  if (techLower.includes('technical research')) return '🔬';
  if (techLower.includes('network protocols')) return '🌐';
  if (techLower.includes('cryptographic algorithms')) return '🔐';
  
  // Support & Documentation
  if (techLower.includes('desktop support')) return '💻';
  if (techLower.includes('troubleshooting')) return '🔧';
  if (techLower.includes('technical writing')) return '📝';
  if (techLower.includes('end-user tutorials')) return '📚';
  if (techLower.includes('detailed error logging')) return '📋';
  
  // Testing
  if (techLower.includes('jest')) return '🧪';
  if (techLower.includes('cypress')) return '🌲';
  if (techLower.includes('playwright')) return '🎭';
  if (techLower.includes('testing')) return '✅';
  
  // Design
  if (techLower.includes('figma')) return '🎨';
  if (techLower.includes('sketch')) return '✏️';
  if (techLower.includes('adobe')) return '🎯';
  
  // Mobile
  if (techLower.includes('flutter')) return '🦋';
  if (techLower.includes('ios')) return '🍎';
  if (techLower.includes('android')) return '🤖';
  
  // Tools & Platforms
  if (techLower.includes('gradescope')) return '📊';
  if (techLower.includes('scrum')) return '🏃';
  if (techLower.includes('jwt')) return '🔑';
  if (techLower.includes('signal processing')) return '📡';
  if (techLower.includes('wlan toolbox')) return '📶';
  if (techLower.includes('rf blockset')) return '📻';
  if (techLower.includes('lucide react')) return '🎨';
  if (techLower.includes('teaching')) return '👨‍🏫';
  if (techLower.includes('computer science theory')) return '🧮';
  
  return '💻'; // Default icon
};