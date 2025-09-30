// Technology color mapping for consistent styling across the site
export const getTechColor = (tech) => {
  const techLower = tech.toLowerCase();
  
  // Programming Languages (Emerald to Green)
  if (techLower.includes('python') || techLower.includes('javascript') || techLower.includes('java') || 
      techLower.includes('c++') || techLower.includes('php') || 
      techLower.includes('matlab') || techLower.includes('typescript') || techLower.includes('ruby') ||
      techLower.includes('swift') || techLower.includes('kotlin') || techLower.includes('rust') ||
      techLower.includes('go') || techLower.includes('html/css') || 
      techLower.includes('css')) {
    return 'from-emerald-500 to-green-500';
  }
  
  // Frontend Technologies (Yellow to Orange)
  if (techLower.includes('react') || techLower.includes('vue') || techLower.includes('angular') || 
      techLower.includes('svelte') || techLower.includes('next') || techLower.includes('nuxt') ||
      techLower.includes('html5') || techLower.includes('css3') || techLower.includes('tailwind') ||
      techLower.includes('bootstrap') || techLower.includes('sass') || techLower.includes('scss') ||
      techLower.includes('styled') || techLower.includes('emotion') || techLower.includes('chakra') ||
      techLower.includes('mui') || techLower.includes('antd') || techLower.includes('responsive design') ||
      techLower.includes('frontend development') || techLower.includes('ui/ux design') ||
      techLower.includes('react native')) {
    return 'from-yellow-500 to-orange-500';
  }
  
  // Backend Technologies (Blue to Cyan)
  if (techLower.includes('node') || techLower.includes('express') || techLower.includes('fastapi') || 
      techLower.includes('django') || techLower.includes('flask') || techLower.includes('spring') || 
      techLower.includes('laravel') || techLower.includes('rails') || techLower.includes('codeigniter') ||
      techLower.includes('restful') || techLower.includes('graphql') || techLower.includes('grpc')) {
    return 'from-blue-500 to-cyan-500';
  }
  
  // Machine Learning & AI (Indigo to Purple)
  if (techLower.includes('pytorch') || techLower.includes('tensorflow') || techLower.includes('scikit') || 
      techLower.includes('pandas') || techLower.includes('numpy') || techLower.includes('deep learning') ||
      techLower.includes('reinforcement learning') || techLower.includes('machine learning') ||
      techLower.includes('neural network') || techLower.includes('opencv') || techLower.includes('keras') ||
      techLower.includes('model selection') || techLower.includes('feature engineering') ||
      techLower.includes('model training') || techLower.includes('performance evaluation') ||
      techLower.includes('lstm')) {
    return 'from-indigo-500 to-purple-500';
  }
  
  // Theory & Algorithms (Cyan to Emerald) - Check this BEFORE Data Management to avoid conflicts
  if (techLower.includes('data structures') || techLower.includes('algorithmic analysis') ||
      techLower.includes('technical research') || techLower.includes('algorithms') ||
      techLower.includes('complexity analysis') || techLower.includes('computational theory') ||
      techLower.includes('network protocols') || techLower.includes('cryptographic algorithms')) {
    return 'from-cyan-500 to-emerald-500';
  }
  
  // Data Management (Pink to Rose)
  if (techLower.includes('postgresql') || techLower.includes('mysql') || techLower.includes('mongodb') || 
      techLower.includes('redis') || techLower.includes('sqlite') || techLower.includes('mariadb') ||
      techLower.includes('oracle') || techLower.includes('database design') || techLower.includes('data analysis') ||
      techLower.includes('prisma') || techLower.includes('sequelize') || techLower.includes('mongoose') ||
      techLower.includes('dynamodb') || techLower.includes('cassandra') || techLower.includes('neo4j') ||
      techLower.includes('database management') || techLower.includes('data visualization')) {
    return 'from-pink-500 to-rose-500';
  }
  
  // Cloud & Dev Tools (Orange to Red)
  if (techLower.includes('aws') || techLower.includes('azure') || techLower.includes('gcp') || 
      techLower.includes('docker') || techLower.includes('kubernetes') || techLower.includes('jenkins') ||
      techLower.includes('terraform') || techLower.includes('ansible') || techLower.includes('ci/cd') ||
      techLower.includes('heroku') || techLower.includes('vercel') || techLower.includes('netlify') ||
      techLower.includes('amazon s3') || techLower.includes('ec2') || techLower.includes('lambda') ||
      techLower.includes('github') || techLower.includes('git') || techLower.includes('postcss') || 
      techLower.includes('claude ai') || techLower.includes('cursor ai')) {
    return 'from-orange-500 to-red-500';
  }
  
  // Web Development (Yellow to Orange) - for general web technologies
  if (techLower.includes('webpack') || techLower.includes('vite') || techLower.includes('parcel') ||
      techLower.includes('babel') || techLower.includes('eslint') || techLower.includes('prettier') ||
      techLower.includes('rollup') || techLower.includes('gulp') || techLower.includes('grunt') ||
      techLower.includes('npm') || techLower.includes('yarn') || techLower.includes('pnpm') || 
      techLower.includes('microservices') || techLower.includes('backend development') ||
      techLower.includes('api development')) {
    return 'from-yellow-500 to-orange-500';
  }
  
  // Support & Documentation (Red to Orange)
  if (techLower.includes('desktop support') || techLower.includes('troubleshooting') ||
      techLower.includes('technical writing') || techLower.includes('end-user tutorials') ||
      techLower.includes('detailed error logging') || techLower.includes('support') ||
      techLower.includes('documentation') || techLower.includes('tutorials')) {
    return 'from-red-500 to-orange-500';
  }
  
  // Testing (Teal to Cyan)
  if (techLower.includes('jest') || techLower.includes('testing') || techLower.includes('cypress') || 
      techLower.includes('playwright') || techLower.includes('enzyme') || techLower.includes('mocha') ||
      techLower.includes('chai') || techLower.includes('karma') || techLower.includes('jasmine') ||
      techLower.includes('selenium') || techLower.includes('pytest') || techLower.includes('unittest')) {
    return 'from-teal-500 to-cyan-500';
  }
  
  // Design & Prototyping (Rose to Pink)
  if (techLower.includes('figma') || techLower.includes('sketch') || techLower.includes('adobe') ||
      techLower.includes('invision') || techLower.includes('zeplin') || techLower.includes('principle') ||
      techLower.includes('framer') || techLower.includes('protopie')) {
    return 'from-rose-500 to-pink-500';
  }
  
  // Mobile & Desktop (Yellow to Orange)
  if (techLower.includes('flutter') || techLower.includes('ionic') || techLower.includes('electron') || 
      techLower.includes('cordova') || techLower.includes('xamarin') || techLower.includes('android') ||
      techLower.includes('ios') || techLower.includes('xcode')) {
    return 'from-yellow-500 to-orange-500';
  }
  
  // Default color for unmatched technologies
  return 'from-gray-500 to-gray-600';
};

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
  
  return '💻'; // Default icon
};

// Color mapping for skill categories - matching exact names from skills.js
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

// Icon mapping for skill categories - matching exact names from skills.js
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