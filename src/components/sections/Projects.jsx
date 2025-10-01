import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Github, Star, ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { getTechColor, getTechIcon } from '../../utils/techColors';

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (galleryItem, index) => {
    setLightboxImage(galleryItem);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
  };

  const nextImage = () => {
    const gallery = projects[selectedProject].gallery;
    const nextIndex = (lightboxIndex + 1) % gallery.length;
    setLightboxImage(gallery[nextIndex]);
    setLightboxIndex(nextIndex);
  };

  const prevImage = () => {
    const gallery = projects[selectedProject].gallery;
    const prevIndex = lightboxIndex === 0 ? gallery.length - 1 : lightboxIndex - 1;
    setLightboxImage(gallery[prevIndex]);
    setLightboxIndex(prevIndex);
  };

  const handleKeyDown = (e) => {
    if (!lightboxOpen) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  };

  // Add event listener for keyboard navigation
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxIndex, selectedProject]);

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400">No projects available.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Projects
        </h2>
        
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="sticky top-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Projects</h3>
                <nav className="space-y-2">
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${
                        selectedProject === index
                          ? 'bg-green-600 text-white shadow-lg'
                          : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400 border border-gray-200 dark:border-gray-700'
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
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden min-h-[500px]">
                {projects[selectedProject] && (
                  <div className="animate-fade-in">
                    <div className="p-6">
                      {/* Project Header */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {projects[selectedProject].title}
                          </h3>
                          {projects[selectedProject].featured && (
                            <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                              <Star className="w-4 h-4 mr-1 fill-current" />
                              Featured
                            </div>
                          )}
                        </div>
                        <div className="flex items-center text-green-600 dark:text-green-400 font-semibold mb-3">
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                            {projects[selectedProject].category}
                          </span>
                          <span className="ml-4 text-gray-600 dark:text-gray-400 flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {projects[selectedProject].year}
                          </span>
                        </div>
                      </div>

                      {/* Project Description */}
                      <div className="mb-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                          {projects[selectedProject].description}
                        </p>
                        {projects[selectedProject].longDescription && (
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                            {projects[selectedProject].longDescription}
                          </p>
                        )}
                      </div>

                      {/* Technologies */}
                      {projects[selectedProject].tech && projects[selectedProject].tech.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Technologies Used</h4>
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
                          <h4 className="text-xl font-semibold text-gray-800 mb-6">Project Gallery</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects[selectedProject].gallery.map((galleryItem, index) => {
                              // Handle both old format (string) and new format (object with image and caption)
                              const imageSrc = typeof galleryItem === 'string' ? galleryItem : galleryItem.image;
                              const caption = typeof galleryItem === 'string' ? `Screenshot ${index + 1}` : galleryItem.caption;
                              
                              return (
                                <div
                                  key={index}
                                  className="group cursor-pointer"
                                  onClick={() => openLightbox(galleryItem, index)}
                                >
                                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3 relative">
                                    <img
                                      src={imageSrc}
                                      alt={`${projects[selectedProject].title} screenshot ${index + 1}`}
                                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                      onError={(e) => {
                                        e.target.style.display = 'none';
                                      }}
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-600 text-center italic">
                                    {caption}
                                  </p>
                                </div>
                              );
                            })}
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

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full h-full flex flex-col">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {projects[selectedProject].gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all duration-300"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="flex-1 flex items-center justify-center p-4">
              <img
                src={typeof lightboxImage === 'string' ? lightboxImage : lightboxImage.image}
                alt={`${projects[selectedProject].title} - Image ${lightboxIndex + 1}`}
                className="max-w-[95vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Caption */}
            <div className="bg-black bg-opacity-60 text-white p-8 rounded-b-lg">
              <p className="text-2xl lg:text-3xl text-center font-medium leading-relaxed">
                {typeof lightboxImage === 'string' ? `Screenshot ${lightboxIndex + 1}` : lightboxImage.caption}
              </p>
              {projects[selectedProject].gallery.length > 1 && (
                <p className="text-lg text-gray-300 text-center mt-4">
                  {lightboxIndex + 1} of {projects[selectedProject].gallery.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;