import React, { useState, useEffect } from "react";


const User = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Briefcase = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2V8" />
  </svg>
);

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Award = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const Settings = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Edit = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const Profile: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Eswar",
    title: "Full Stack Developer",
    email: "eswar@gmail.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Passionate developer with 5+ years of experience creating amazing digital experiences. I love turning complex problems into simple, beautiful solutions.",
    joinDate: "March 2019",
    projects: 47,
    followers: 1234,
    following: 567
  });

  console.log(setProfileData);

  const skills = [
    { name: "React", level: 90, color: "from-blue-400 to-cyan-400" },
    { name: "TypeScript", level: 85, color: "from-purple-400 to-pink-400" },
    { name: "Node.js", level: 80, color: "from-green-400 to-emerald-400" },
    { name: "Python", level: 75, color: "from-yellow-400 to-orange-400" },
    { name: "Design", level: 70, color: "from-pink-400 to-rose-400" }
  ];

  const achievements = [
    { title: "Code Master", description: "Completed 100+ projects", icon: <Award className="w-6 h-6" /> },
    { title: "Team Player", description: "Collaborated on 50+ team projects", icon: <User className="w-6 h-6" /> },
    { title: "Innovation Award", description: "Best innovative solution 2024", icon: <Star className="w-6 h-6" /> }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full opacity-30"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 px-4 py-8">
        
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> {/* Profile Header */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl mb-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Profile Image */}
              <div className="relative group">
                <div className="w-40 h-40 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full p-1 animate-pulse">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold group-hover:animate-spin transition-all duration-300">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-4 border-white animate-bounce">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-2">
                      {profileData.name}
                    </h1>
                    <p className="text-xl text-purple-200 font-semibold mb-4">{profileData.title}</p>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 transform flex items-center gap-2"
                  >
                    <Edit className="w-5 h-5" />
                    {isEditing ? 'Save' : 'Edit Profile'}
                  </button>
                </div>

                <p className="text-gray-200 text-lg mb-6 max-w-2xl">{profileData.bio}</p>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-200">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>{profileData.email}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-200">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>{profileData.phone}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-200">
                    <MapPin className="w-5 h-5 text-pink-400" />
                    <span>{profileData.location}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center group">
                    <div className="text-3xl font-black text-cyan-400 group-hover:animate-bounce">{profileData.projects}</div>
                    <div className="text-gray-300">Projects</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-black text-purple-400 group-hover:animate-bounce">{profileData.followers}</div>
                    <div className="text-gray-300">Followers</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-black text-pink-400 group-hover:animate-bounce">{profileData.following}</div>
                    <div className="text-gray-300">Following</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={`max-w-6xl mx-auto mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-2 border border-white border-opacity-20">
            <div className="flex flex-wrap gap-2">
              {['about', 'skills', 'achievements'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-bold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg'
                      : 'text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* About Section */}
          {activeTab === 'about' && (
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <User className="w-8 h-8 text-cyan-400" />
                    About Me
                  </h2>
                  <p className="text-gray-200 text-lg leading-relaxed mb-6">
                    I'm a passionate full-stack developer who loves creating innovative solutions and beautiful user experiences. 
                    With a strong background in modern web technologies, I enjoy tackling complex challenges and turning ideas into reality.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-200">Joined {profileData.joinDate}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-pink-400" />
                      <span className="text-gray-200">5+ Years Experience</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Interests</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Web Development', 'UI/UX Design', 'Machine Learning', 'Open Source', 'Photography', 'Travel'].map((interest, index) => (
                      <span
                        key={interest}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeTab === 'skills' && (
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Settings className="w-8 h-8 text-cyan-400" />
                Skills & Expertise
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                      <span className="text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Section */}
          {activeTab === 'achievements' && (
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-cyan-400" />
                Achievements
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className="group bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="text-yellow-400 mb-4 group-hover:animate-bounce">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-200">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className={`max-w-6xl mx-auto mt-8 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 transform flex items-center gap-2">
              <Heart className="w-5 h-5 group-hover:animate-pulse" />
              Follow
            </button>
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 transform flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Message
            </button>
            <button className="group bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform flex items-center gap-2">
              <Star className="w-5 h-5 group-hover:animate-spin" />
              Collaborate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;