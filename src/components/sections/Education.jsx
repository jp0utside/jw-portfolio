import { useState } from 'react';
import { Calendar, MapPin, GraduationCap, Award, BookOpen, ChevronRight } from 'lucide-react';

const Education = ({ education }) => {
  const [selectedEducation, setSelectedEducation] = useState(0);

  if (!education || education.length === 0) {
    return (
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16 text-gray-800">
            Education
          </h2>
          <p className="text-center text-gray-600">No education data available.</p>
        </div>
      </section>
    );
  }

  const getDegreeIcon = (type) => {
    return type === 'graduate' ? '🎓' : '🎓';
  };

  const getDegreeColor = (type) => {
    return type === 'graduate' 
      ? 'from-purple-500 to-indigo-500' 
      : 'from-blue-500 to-cyan-500';
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16 text-gray-800">
          Education
        </h2>
        
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="sticky top-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-700">Degrees</h3>
                <nav className="space-y-2">
                  {education.map((edu, index) => (
                    <button
                      key={edu.id}
                      onClick={() => setSelectedEducation(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${
                        selectedEducation === index
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center mb-1">
                            <span className="text-lg mr-2">{getDegreeIcon(edu.type)}</span>
                            <h4 className="font-semibold text-base truncate">
                              {edu.degree}
                            </h4>
                          </div>
                          <p className="text-sm mt-1 truncate opacity-75">
                            {edu.school}
                          </p>
                          <p className="text-sm mt-1 truncate opacity-60 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {edu.startDate} - {edu.endDate}
                          </p>
                        </div>
                        <ChevronRight 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            selectedEducation === index ? 'rotate-90' : 'group-hover:translate-x-1'
                          }`} 
                        />
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 min-h-[600px]">
                {education[selectedEducation] && (
                  <div className="animate-fade-in">
                    {/* Degree Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <span className="text-4xl mr-3">{getDegreeIcon(education[selectedEducation].type)}</span>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">
                              {education[selectedEducation].degree}
                            </h3>
                            {education[selectedEducation].minor && (
                              <p className="text-lg text-purple-600 font-medium">
                                Minor: {education[selectedEducation].minor}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center text-xl text-purple-600 font-semibold mb-4">
                          <GraduationCap className="w-6 h-6 mr-2" />
                          {education[selectedEducation].school}
                        </div>
                      </div>
                    </div>

                    {/* Location and Duration */}
                    <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{education[selectedEducation].location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>
                          {education[selectedEducation].startDate} - {education[selectedEducation].endDate}
                        </span>
                      </div>
                      {education[selectedEducation].gpa && (
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          <span>GPA: {education[selectedEducation].gpa}</span>
                        </div>
                      )}
                    </div>

                    {/* Specialization */}
                    {education[selectedEducation].specialization && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Specialization</h4>
                        <div className="flex flex-wrap gap-2">
                          {education[selectedEducation].specialization.split(', ').map((spec, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Coursework */}
                    {education[selectedEducation].coursework && education[selectedEducation].coursework.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <BookOpen className="w-5 h-5 mr-2" />
                          Relevant Coursework
                        </h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {education[selectedEducation].coursework.map((course, index) => (
                            <div
                              key={index}
                              className="flex items-center p-3 bg-white rounded-lg border border-gray-200"
                            >
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {education[selectedEducation].achievements && education[selectedEducation].achievements.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <Award className="w-5 h-5 mr-2" />
                          Achievements & Honors
                        </h4>
                        <ul className="space-y-3">
                          {education[selectedEducation].achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
