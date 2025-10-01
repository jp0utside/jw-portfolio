import { useState } from 'react';
import { Wrench, Code, Users, Award, Heart } from 'lucide-react';
import { getTechColor, getTechIcon, getCategoryColor, getCategoryIcon } from '../../utils/techColors';

const Skills = ({ skills }) => {
  // Generate tabs dynamically first to determine default active tab
  const generateTabs = () => {
    const tabs = [];
    
    // Check Tools section
    if (skills.tools && Object.entries(skills.tools).some(([category, skillList]) => skillList && skillList.length > 0)) {
      tabs.push({ id: 'tools', label: 'Tools', icon: Wrench });
    }
    
    // Check Technical Skills section
    if (skills.technicalSkills && Object.entries(skills.technicalSkills).some(([category, skillList]) => skillList && skillList.length > 0)) {
      tabs.push({ id: 'technicalSkills', label: 'Technical Skills', icon: Code });
    }
    
    // Check Soft Skills section
    if (skills.softSkills && Object.entries(skills.softSkills).some(([category, skillList]) => skillList && skillList.length > 0)) {
      tabs.push({ id: 'softSkills', label: 'Soft Skills', icon: Users });
    }
    
    // Check Certifications section
    if (skills.certifications && skills.certifications.length > 0) {
      tabs.push({ id: 'certifications', label: 'Certifications', icon: Award });
    }
    
    // Check Interests & Hobbies section
    if (skills.interestsAndHobbies && skills.interestsAndHobbies.length > 0) {
      tabs.push({ id: 'interestsAndHobbies', label: 'Interests & Hobbies', icon: Heart });
    }
    
    return tabs;
  };
  
  const categoryTabs = generateTabs();
  const [activeCategory, setActiveCategory] = useState(categoryTabs.length > 0 ? categoryTabs[0].id : '');

  if (!skills || categoryTabs.length === 0) {
    return (
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400">No skills data available.</p>
        </div>
      </section>
    );
  }

  const getTabColor = (categoryId) => {
    const colors = {
      tools: 'bg-blue-600',
      technicalSkills: 'bg-green-600',
      softSkills: 'bg-purple-600',
      certifications: 'bg-yellow-600',
      interestsAndHobbies: 'bg-pink-600'
    };
    return colors[categoryId] || 'bg-gray-600';
  };

  const getTabHoverColor = (categoryId) => {
    const colors = {
      tools: 'hover:bg-blue-50 hover:text-blue-600',
      technicalSkills: 'hover:bg-green-50 hover:text-green-600',
      softSkills: 'hover:bg-purple-50 hover:text-purple-600',
      certifications: 'hover:bg-yellow-50 hover:text-yellow-600',
      interestsAndHobbies: 'hover:bg-pink-50 hover:text-pink-600'
    };
    return colors[categoryId] || 'hover:bg-gray-50 hover:text-gray-600';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Skills & Expertise
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {categoryTabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center ${
                    activeCategory === tab.id
                      ? `${getTabColor(tab.id)} text-white shadow-lg`
                      : `bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 ${getTabHoverColor(tab.id)}`
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tools */}
          {activeCategory === 'tools' && (
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills.tools || {})
                .filter(([category, skillList]) => skillList && skillList.length > 0)
                .map(([category, skillList]) => (
                <div key={category} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(category)} flex items-center justify-center text-white mr-4`}>
                      <span className="text-xl">{getCategoryIcon(category)}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, index) => (
                      <div
                        key={index}
                        className="group relative"
                      >
                        <div className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-default flex items-center gap-2`}>
                          <span>{getTechIcon(skill)}</span>
                          <span>{skill}</span>
                        </div>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technical Skills */}
          {activeCategory === 'technicalSkills' && (
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills.technicalSkills || {})
                .filter(([category, skillList]) => skillList && skillList.length > 0)
                .map(([category, skillList]) => (
                <div key={category} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(category)} flex items-center justify-center text-white mr-4`}>
                      <span className="text-xl">{getCategoryIcon(category)}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, index) => (
                      <div
                        key={index}
                        className="group relative"
                      >
                        <div className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-default flex items-center gap-2`}>
                          <span>{getTechIcon(skill)}</span>
                          <span>{skill}</span>
                        </div>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Soft Skills */}
          {activeCategory === 'softSkills' && (
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills.softSkills || {})
                .filter(([category, skillList]) => skillList && skillList.length > 0)
                .map(([category, skillList]) => (
                <div key={category} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(category)} flex items-center justify-center text-white mr-4`}>
                      <span className="text-xl">{getCategoryIcon(category)}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, index) => (
                      <div
                        key={index}
                        className="group relative"
                      >
                        <div className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-default`}>
                          {skill}
                        </div>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {activeCategory === 'certifications' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white mr-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Certifications</h3>
                </div>
                
                <div className="space-y-6">
                  {skills.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-6 rounded-lg bg-gradient-to-r from-yellow-50 dark:from-yellow-900/20 to-orange-50 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-700 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white mr-4">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white">{cert.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                          {cert.credential && (
                            <p className="text-xs text-gray-500 dark:text-gray-500">Credential ID: {cert.credential}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">{cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Interests & Hobbies */}
          {activeCategory === 'interestsAndHobbies' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white mr-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Interests & Hobbies</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.interestsAndHobbies.map((interest, index) => (
                    <div
                      key={index}
                      className="group relative"
                    >
                      <div className="px-6 py-4 rounded-lg text-gray-700 dark:text-gray-300 font-medium bg-gradient-to-r from-pink-100 dark:from-pink-900/30 to-rose-100 dark:to-rose-900/30 hover:from-pink-200 dark:hover:from-pink-800/40 hover:to-rose-200 dark:hover:to-rose-800/40 transition-all duration-300 hover:scale-105 cursor-default border border-pink-200 dark:border-pink-700">
                        {interest}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;