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
    'Support & Documentation': 'from-red-500 to-orange-500',
    
    // Soft Skills section categories
    'Interpersonal': 'from-purple-500 to-violet-500',
    'Analytical': 'from-orange-500 to-yellow-500'
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
    'Support & Documentation': '📚',
    
    // Soft Skills section categories
    'Interpersonal': '🤝',
    'Analytical': '🧠'
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

// Individual technology icon mapping - uses category icons
export const getTechIcon = (tech) => {
  // First, try to find the technology in the skills categories
  const category = findTechnologyCategory(tech);
  if (category) {
    return getCategoryIcon(category);
  }
  
  // Fallback: Handle technologies that aren't in skills but appear in experience/projects
  const techLower = tech.toLowerCase();
  
  // Programming Languages category
  if (techLower.includes('python') || techLower.includes('javascript') || techLower.includes('java') || 
      techLower.includes('c++') || techLower.includes('typescript') || techLower.includes('ruby') ||
      techLower.includes('go') || techLower.includes('php')) {
    return '📜';
  }
  
  // Frontend category
  if (techLower.includes('react') || techLower.includes('vue') || techLower.includes('angular') || 
      techLower.includes('html') || techLower.includes('css') || techLower.includes('frontend') ||
      techLower.includes('ui/ux') || techLower.includes('figma') || techLower.includes('sketch') ||
      techLower.includes('adobe') || techLower.includes('lucide react') || techLower.includes('postcss')) {
    return '🎨';
  }
  
  // Backend category
  if (techLower.includes('node') || techLower.includes('fastapi') || techLower.includes('api') || 
      techLower.includes('microservices') || techLower.includes('codeigniter') || 
      techLower.includes('backend') || techLower.includes('restful') || techLower.includes('jwt')) {
    return '⚙️';
  }
  
  // Machine Learning category
  if (techLower.includes('pytorch') || techLower.includes('scikit') || techLower.includes('pandas') || 
      techLower.includes('numpy') || techLower.includes('learning') || techLower.includes('lstm') ||
      techLower.includes('claude ai') || techLower.includes('cursor ai') || techLower.includes('model') ||
      techLower.includes('matlab') || techLower.includes('signal processing') || 
      techLower.includes('wlan toolbox') || techLower.includes('rf blockset')) {
    return '🤖';
  }
  
  // Data Management category
  if (techLower.includes('sql') || techLower.includes('postgresql') || techLower.includes('mysql') || 
      techLower.includes('sqlite') || techLower.includes('database') || 
      techLower.includes('data analysis') || techLower.includes('data visualization')) {
    return '🗄️';
  }
  
  // Cloud & Dev Tools category
  if (techLower.includes('aws') || techLower.includes('amazon s3') || techLower.includes('heroku') || 
      techLower.includes('docker') || techLower.includes('git') || techLower.includes('vite') ||
      techLower.includes('webpack') || techLower.includes('babel') || techLower.includes('eslint') ||
      techLower.includes('scrum')) {
    return '☁️';
  }
  
  // Support & Documentation category
  if (techLower.includes('support') || techLower.includes('troubleshooting') || 
      techLower.includes('technical writing') || techLower.includes('tutorials') || 
      techLower.includes('logging') || techLower.includes('teaching') || 
      techLower.includes('gradescope')) {
    return '📚';
  }
  
  // Theory category
  if (techLower.includes('data structures') || techLower.includes('algorithmic') || 
      techLower.includes('technical research') || techLower.includes('network protocols') || 
      techLower.includes('cryptographic') || techLower.includes('computer science theory')) {
    return '🧮';
  }
  
  // Testing category
  if (techLower.includes('jest') || techLower.includes('cypress') || 
      techLower.includes('playwright') || techLower.includes('testing')) {
    return '✅';
  }
  
  // Mobile category
  if (techLower.includes('flutter') || techLower.includes('ios') || 
      techLower.includes('android') || techLower.includes('react native')) {
    return '📱';
  }
  
  return '💻'; // Default icon
};