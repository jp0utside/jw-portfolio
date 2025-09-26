// Technology color mapping for consistent styling across the site
export const getTechColor = (tech) => {
  const techLower = tech.toLowerCase();
  
  // Frontend Technologies
  if (techLower.includes('react') || techLower.includes('vue') || techLower.includes('angular') || 
      techLower.includes('svelte') || techLower.includes('next') || techLower.includes('nuxt')) {
    return 'from-blue-500 to-cyan-500';
  }
  
  // Backend Technologies
  if (techLower.includes('node') || techLower.includes('express') || techLower.includes('python') || 
      techLower.includes('django') || techLower.includes('flask') || techLower.includes('fastapi') ||
      techLower.includes('spring') || techLower.includes('java') || techLower.includes('php') ||
      techLower.includes('laravel') || techLower.includes('ruby') || techLower.includes('rails')) {
    return 'from-green-500 to-emerald-500';
  }
  
  // Databases
  if (techLower.includes('postgresql') || techLower.includes('mysql') || techLower.includes('mongodb') || 
      techLower.includes('redis') || techLower.includes('sqlite') || techLower.includes('mariadb') ||
      techLower.includes('oracle') || techLower.includes('sql') || techLower.includes('prisma') ||
      techLower.includes('sequelize') || techLower.includes('mongoose')) {
    return 'from-purple-500 to-violet-500';
  }
  
  // Cloud & DevOps
  if (techLower.includes('aws') || techLower.includes('azure') || techLower.includes('gcp') || 
      techLower.includes('docker') || techLower.includes('kubernetes') || techLower.includes('jenkins') ||
      techLower.includes('terraform') || techLower.includes('ansible') || techLower.includes('git') ||
      techLower.includes('github') || techLower.includes('gitlab') || techLower.includes('ci/cd')) {
    return 'from-orange-500 to-red-500';
  }
  
  // Styling & UI
  if (techLower.includes('css') || techLower.includes('tailwind') || techLower.includes('bootstrap') || 
      techLower.includes('sass') || techLower.includes('scss') || techLower.includes('styled') ||
      techLower.includes('emotion') || techLower.includes('chakra') || techLower.includes('mui') ||
      techLower.includes('antd') || techLower.includes('figma') || techLower.includes('sketch')) {
    return 'from-pink-500 to-rose-500';
  }
  
  // JavaScript & TypeScript
  if (techLower.includes('javascript') || techLower.includes('typescript') || techLower.includes('js') || 
      techLower.includes('ts') || techLower.includes('es6') || techLower.includes('babel') ||
      techLower.includes('webpack') || techLower.includes('vite') || techLower.includes('parcel')) {
    return 'from-yellow-500 to-orange-500';
  }
  
  // Testing
  if (techLower.includes('jest') || techLower.includes('testing') || techLower.includes('cypress') || 
      techLower.includes('playwright') || techLower.includes('enzyme') || techLower.includes('mocha') ||
      techLower.includes('chai') || techLower.includes('karma') || techLower.includes('jasmine')) {
    return 'from-indigo-500 to-purple-500';
  }
  
  // Mobile & Desktop
  if (techLower.includes('react native') || techLower.includes('flutter') || techLower.includes('ionic') || 
      techLower.includes('electron') || techLower.includes('cordova') || techLower.includes('xamarin') ||
      techLower.includes('swift') || techLower.includes('kotlin') || techLower.includes('android')) {
    return 'from-teal-500 to-cyan-500';
  }
  
  // Payment & External Services
  if (techLower.includes('stripe') || techLower.includes('paypal') || techLower.includes('square') || 
      techLower.includes('twilio') || techLower.includes('sendgrid') || techLower.includes('firebase') ||
      techLower.includes('auth0') || techLower.includes('oauth') || techLower.includes('jwt')) {
    return 'from-emerald-500 to-green-500';
  }
  
  // Default color for unmatched technologies
  return 'from-gray-500 to-gray-600';
};

export const getTechIcon = (tech) => {
  const techLower = tech.toLowerCase();
  
  // You can expand this with more specific icons if needed
  if (techLower.includes('react')) return '⚛️';
  if (techLower.includes('vue')) return '💚';
  if (techLower.includes('angular')) return '🅰️';
  if (techLower.includes('node')) return '🟢';
  if (techLower.includes('python')) return '🐍';
  if (techLower.includes('javascript') || techLower.includes('typescript')) return '📜';
  if (techLower.includes('css') || techLower.includes('tailwind')) return '🎨';
  if (techLower.includes('aws')) return '☁️';
  if (techLower.includes('docker')) return '🐳';
  if (techLower.includes('git')) return '📚';
  
  return '💻'; // Default icon
};
