import { useState } from 'react';
import { Calendar, ExternalLink, Github, Star, ChevronRight } from 'lucide-react';
import { getTechColor, getTechIcon } from '../../utils/techColors';

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(0);

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600">No projects available.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16 text-gray-800">
          Featured Projects
        </h2>
        
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="sticky top-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-700">Projects</h3>
                <nav className="space-y-2">
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${
                        selectedProject === index
                          ? 'bg-green-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-base truncate flex items-center">
                            {project.title}
                            {project.featured && (
                              <Star className="w-4 h-4 ml-1 fill-current text-yellow-400" />
                            )}
                          </h4>
                          <p className="text-sm mt-1 truncate opacity-75">
                            {project.category}
                          </p>
                          <p className="text-sm mt-1 truncate opacity-60 flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.year}
                          </p>
                        </div>
                        <ChevronRight 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            selectedProject === index ? 'rotate-90' : 'group-hover:translate-x-1'
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
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden min-h-[600px]">
                {projects[selectedProject] && (
                  <div className="animate-fade-in">
                    {/* Project Image */}
                    <div className="h-64 bg-gradient-to-r from-green-400 to-blue-500 relative overflow-hidden">
                      {projects[selectedProject].image ? (
                        <img
                          src={projects[selectedProject].image}
                          alt={projects[selectedProject].title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-white text-6xl opacity-50">
                            {projects[selectedProject].title.charAt(0)}
                          </div>
                        </div>
                      )}
                      {projects[selectedProject].featured && (
                        <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          Featured
                        </div>
                      )}
                    </div>

                    <div className="p-8">
                      {/* Project Header */}
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                          {projects[selectedProject].title}
                        </h3>
                        <div className="flex items-center text-green-600 font-semibold mb-4">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            {projects[selectedProject].category}
                          </span>
                          <span className="ml-4 text-gray-600 flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {projects[selectedProject].year}
                          </span>
                        </div>
                      </div>

                      {/* Project Description */}
                      <div className="mb-6">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {projects[selectedProject].description}
                        </p>
                        {projects[selectedProject].longDescription && (
                          <p className="text-gray-600 leading-relaxed mt-4">
                            {projects[selectedProject].longDescription}
                          </p>
                        )}
                      </div>

                      {/* Technologies */}
                      {projects[selectedProject].tech && projects[selectedProject].tech.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">Technologies Used</h4>
                          <div className="flex flex-wrap gap-3">
                            {projects[selectedProject].tech.map((tech, index) => (
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

                      {/* Project Links */}
                      <div className="flex flex-wrap gap-4">
                        {projects[selectedProject].github && (
                          <a
                            href={projects[selectedProject].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-300"
                          >
                            <Github className="w-5 h-5 mr-2" />
                            View Code
                          </a>
                        )}
                        
                        {projects[selectedProject].live && (
                          <a
                            href={projects[selectedProject].live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                          >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Live Demo
                          </a>
                        )}
                      </div>

                      {/* Project Gallery */}
                      {projects[selectedProject].gallery && projects[selectedProject].gallery.length > 0 && (
                        <div className="mt-8">
                          <h4 className="text-lg font-semibold text-gray-800 mb-4">Project Gallery</h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {projects[selectedProject].gallery.map((image, index) => (
                              <div
                                key={index}
                                className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
                              >
                                <img
                                  src={image}
                                  alt={`${projects[selectedProject].title} screenshot ${index + 1}`}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
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

export default Projects;
