import { useState } from 'react';
import { Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';
import { getTechColor, getTechIcon } from '../../utils/techColors';

const Experience = ({ experience }) => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  if (!experience || experience.length === 0) {
    return (
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Professional Experience
          </h2>
          <p className="text-center text-gray-600">No experience data available.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16 text-gray-800">
          Professional Experience
        </h2>
        
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="sticky top-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-700">Roles</h3>
                <nav className="space-y-2">
                  {experience.map((exp, index) => (
                    <button
                      key={exp.id}
                      onClick={() => setSelectedExperience(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${
                        selectedExperience === index
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-base truncate">
                            {exp.position}
                          </h4>
                          <p className="text-sm mt-1 truncate opacity-75">
                            {exp.company}
                          </p>
                          <p className="text-sm mt-1 truncate opacity-60">
                            {exp.startDate} - {exp.endDate}
                          </p>
                        </div>
                        <ChevronRight 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            selectedExperience === index ? 'rotate-90' : 'group-hover:translate-x-1'
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
              <div className="bg-white rounded-xl shadow-lg p-8 min-h-[600px]">
                {experience[selectedExperience] && (
                  <div className="animate-fade-in">
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                          {experience[selectedExperience].position}
                        </h3>
                        <div className="flex items-center text-xl text-blue-600 font-semibold mb-4">
                          <Building2 className="w-5 h-5 mr-2" />
                          {experience[selectedExperience].company}
                        </div>
                      </div>
                      {experience[selectedExperience].logo && (
                        <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md">
                          <img
                            src={experience[selectedExperience].logo}
                            alt={`${experience[selectedExperience].company} logo`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Location and Duration */}
                    <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{experience[selectedExperience].location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>
                          {experience[selectedExperience].startDate} - {experience[selectedExperience].endDate}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Responsibilities</h4>
                      <ul className="space-y-3">
                        {experience[selectedExperience].description.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {experience[selectedExperience].tech && experience[selectedExperience].tech.length > 0 && (
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {experience[selectedExperience].tech.map((tech, index) => (
                            <div
                              key={index}
                              className="group relative"
                            >
                              <div className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getTechColor(tech)} text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-default flex items-center gap-2`}>
                                <span>{getTechIcon(tech)}</span>
                                <span>{tech}</span>
                              </div>
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                {tech}
                              </div>
                            </div>
                          ))}
                        </div>
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

export default Experience;
