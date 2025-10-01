import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe } from 'lucide-react';

const Personal = ({ personalInfo }) => {
  const { name, title, tagline, bio, location, email, phone, profileImage, social } = personalInfo;
  const test = "test 3";

  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: 'url("/images/background.jpg")'
        }}
      />
      
      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Profile Image Section */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Background pattern behind profile image */}
              <div 
                className="absolute inset-0 w-92 h-92 rounded-full opacity-30 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("/images/background.jpg")'
                }}
              />
              <div className="relative w-84 h-84 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img
                  src={profileImage}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=384`;
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-xl">👋</span>
              </div>
            </div>
            
          </div>

          {/* Personal Info */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Name and Title for desktop */}
            <div className="hidden lg:block mb-6">
              <h1 className="text-6xl lg:text-6xl font-bold mb-3 text-gray-300 drop-shadow-2xl">
                {test}
              </h1>
              
              <h2 className="text-3xl lg:text-3xl font-semibold text-gray-300">
                {title}
              </h2>
            </div>
            
            <p className="text-2xl mb-6 text-gray-300 font-medium">
              {tagline}
            </p>
            
            {/* Bio with solid background overlay */}
            <div className="relative">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-lg text-gray-100 leading-relaxed">
                  {bio}
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h3 className="text-base font-semibold text-blue-300 mb-3">Contact Information</h3>
              <div className="space-y-2">
                {email && (
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a 
                      href={`mailto:${email}`}
                      className="text-gray-100 hover:text-blue-400 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                )}
                
                {phone && (
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a 
                      href={`tel:${phone}`}
                      className="text-gray-100 hover:text-blue-400 transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                )}
                
                {location && (
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-100">{location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h3 className="text-base font-semibold text-blue-300 mb-3">Connect With Me</h3>
              <div className="flex justify-center lg:justify-start space-x-6">
                {social?.github && (
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/30"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                )}
                
                {social?.linkedin && (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/30"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                )}
                
                {social?.twitter && (
                  <a
                    href={social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/30"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                )}
                
                {social?.website && (
                  <a
                    href={social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/30"
                    aria-label="Website"
                  >
                    <Globe className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#education"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-xl border border-white/20"
              >
                View My Education
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;