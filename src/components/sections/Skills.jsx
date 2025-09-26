import { useState } from 'react';
import { Code, Database, Wrench, Globe, Award, Heart } from 'lucide-react';
import { getTechColor, getTechIcon } from '../../utils/techColors';

const Skills = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('technical');

  if (!skills) {
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Skills & Expertise
          </h2>
          <p className="text-center text-gray-600">No skills data available.</p>
        </div>
      </section>
    );
  }

  const categoryIcons = {
    Frontend: <Code className="w-5 h-5" />,
    Backend: <Database className="w-5 h-5" />,
    Tools: <Wrench className="w-5 h-5" />,
    Languages: <Globe className="w-5 h-5" />,
  };

  const getCategoryColor = (category) => {
    const colors = {
      Frontend: 'from-blue-500 to-cyan-500',
      Backend: 'from-green-500 to-emerald-500',
      Tools: 'from-purple-500 to-violet-500',
      Languages: 'from-orange-500 to-red-500',
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16 text-gray-800">
          Skills & Expertise
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            <button
              onClick={() => setActiveCategory('technical')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'technical'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              <Code className="w-5 h-5 inline mr-2" />
              Technical Skills
            </button>
            
            {skills.interests && skills.interests.length > 0 && (
              <button
                onClick={() => setActiveCategory('interests')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === 'interests'
                    ? 'bg-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600 border border-gray-200'
                }`}
              >
                <Heart className="w-5 h-5 inline mr-2" />
                Interests
              </button>
            )}
            
            {skills.certifications && skills.certifications.length > 0 && (
              <button
                onClick={() => setActiveCategory('certifications')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === 'certifications'
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 border border-gray-200'
                }`}
              >
                <Award className="w-5 h-5 inline mr-2" />
                Certifications
              </button>
            )}
          </div>

          {/* Technical Skills */}
          {activeCategory === 'technical' && (
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills.technical || {}).map(([category, skillList]) => (
                <div key={category} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(category)} flex items-center justify-center text-white mr-4`}>
                      {categoryIcons[category]}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, index) => (
                      <div
                        key={index}
                        className="group relative"
                      >
                        <div className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getTechColor(skill)} text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-default flex items-center gap-2`}>
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

          {/* Interests */}
          {activeCategory === 'interests' && skills.interests && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white mr-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Personal Interests</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.interests.map((interest, index) => (
                    <div
                      key={index}
                      className="group relative"
                    >
                      <div className="px-6 py-4 rounded-lg text-gray-700 font-medium bg-gradient-to-r from-pink-100 to-rose-100 hover:from-pink-200 hover:to-rose-200 transition-all duration-300 hover:scale-105 cursor-default border border-pink-200">
                        {interest}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Certifications */}
          {activeCategory === 'certifications' && skills.certifications && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white mr-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Certifications</h3>
                </div>
                
                <div className="space-y-6">
                  {skills.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-6 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white mr-4">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                          <p className="text-sm text-gray-600">{cert.issuer}</p>
                          {cert.credential && (
                            <p className="text-xs text-gray-500">Credential ID: {cert.credential}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-yellow-600">{cert.date}</p>
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
