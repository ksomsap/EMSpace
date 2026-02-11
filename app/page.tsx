import Navigation from '../components/Navigation';
import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge';
import AnimatedSection from '../components/AnimatedSection';
import StatsSection from '../components/StatsSection';

export default function Home() {
  const aiProjects = [
    {
      title: "Aowser.com",
      description: "AI-powered storytelling platform that takes text prompts, analyzes stories with AI, generates corresponding images, and combines them into short videos with voice narrations for immersive storytelling experiences.",
      status: "live" as const,
      technologies: ["AI/ML", "Story Analysis", "Image Generation", "Video Creation", "Voice Synthesis"],
      link: "https://aowser.com",
      category: "ai" as const,
      image: "/AI/aowser.jpg"
    },
    {
      title: "Pixrock.co",
      description: "AI-powered image generation platform with production-ready services supporting real-time generation and cloud-based content delivery.",
      status: "live" as const,
      technologies: ["AI Generation", "Cloud Delivery", "Scalable Architecture"],
      link: "https://pixrock.co",
      category: "ai" as const,
      image: "/AI/pixrock.jpg"
    }
  ];

  const web3Projects = [
   /* {
      title: "Claimsol.fun",
      description: "Reclaim SOL locked in empty token accounts. Fast, secure, and safe for all Solana wallets. Helping users recover their locked assets efficiently.",
      status: "live" as const,
      technologies: ["Solana", "DeFi", "Wallet Integration"],
      link: "https://claimsol.fun",
      category: "web3" as const,
      image: "/Web3/claimsol.jpg"
    },*/
    {
      title: "Emtopier",
      description: "Solana token creator platform. Simplifying the process of creating and deploying tokens on the Solana blockchain with user-friendly interface.",
      status: "ongoing" as const,
      technologies: ["Solana", "Token Creation", "Blockchain"],
      link: "https://sol-created.vercel.app/",
      category: "web3" as const,
      image: "/Web3/emtopier.jpg",
      disabled: true
    }
  ];

  const gameProjects = [
    {
      title: "Sword Dos",
      description: "Action-packed sword fighting game with engaging gameplay mechanics.",
      status: "completed" as const,
      technologies: ["Unity", "C#", "Game Design"],
      link: "https://pangpang.itch.io/sworddos",
      category: "game" as const,
      image: "/Games/SwordDos.png"
    },
    {
      title: "Detective Dos",
      description: "Mystery solving game with detective elements and puzzle mechanics.",
      status: "completed" as const,
      technologies: ["Unity", "Puzzle Design", "Storytelling"],
      link: "https://pangpang.itch.io/detectivedos",
      category: "game" as const,
      image: "/Games/DetectiveDos.png"
    },
    {
      title: "10 Day Earth",
      description: "Survival game with time-limited earth exploration mechanics.",
      status: "completed" as const,
      technologies: ["Unity", "Survival Mechanics", "Time Management"],
      link: "https://pangpang.itch.io/10day-earth",
      category: "game" as const,
      image: "/Games/10DayEarth.png"
    },
    {
      title: "Go Galaxy",
      description: "Space exploration game with galaxy traversal and adventure elements.",
      status: "completed" as const,
      technologies: ["Unity", "Space Simulation", "Adventure"],
      link: "https://pangpang.itch.io/gogaxy",
      category: "game" as const,
      image: "/Games/GoGaxy.png"
    }
  ];

  const courseProjects = [
    {
      title: "Mobile Unity and Ads",
      description: "Learn game development with Unity and monetization through Unity Ads 2018. Perfect for beginners wanting to create their own games and generate revenue.",
      status: "live" as const,
      technologies: ["Unity", "Mobile Development", "Monetization"],
      link: "https://www.udemy.com/course/mobile-unity-and-ads/",
      category: "course" as const,
      image: "/Course/mobile-unity.jpg"
    },
    {
      title: "TOP-DOWN Mobile Pixel Game",
      description: "Develop mobile pixel games and monetize with ads. Learn to create engaging top-down games and generate revenue through advertising integration.",
      status: "live" as const,
      technologies: ["Unity", "Pixel Art", "Mobile Games"],
      link: "https://www.udemy.com/course/pixel-25d-unity-2020/",
      category: "course" as const,
      image: "/Course/top-down.jpg"
    },
    {
      title: "AI Image Generator SaaS with Next.js",
      description: "Build & Deploy an AI Image Generator with Next.js 14 & TypeScript. Create a professional, full-stack AI application that transforms text into stunning images.",
      status: "live" as const,
      technologies: ["Next.js 14", "TypeScript", "AI Integration", "SaaS"],
      link: "https://www.udemy.com/course/build-your-own-ai-image-generator-saas-nextjs-replicate",
      category: "course" as const,
      image: "/Course/ai-image.jpg"
    }
  ];

  const skills = [
    { skill: "Python", level: "expert" as const, category: "language" as const },
    { skill: "JavaScript", level: "expert" as const, category: "language" as const },
    { skill: "TypeScript", level: "advanced" as const, category: "language" as const },
    { skill: "C#", level: "advanced" as const, category: "language" as const },
    { skill: "Next.js", level: "expert" as const, category: "framework" as const },
    { skill: "React", level: "advanced" as const, category: "framework" as const },
    { skill: "Unity", level: "expert" as const, category: "platform" as const },
    { skill: "Solana", level: "advanced" as const, category: "platform" as const },
    { skill: "AWS", level: "intermediate" as const, category: "platform" as const },
    { skill: "Git", level: "expert" as const, category: "tool" as const },
    { skill: "Docker", level: "intermediate" as const, category: "tool" as const }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <AnimatedSection>
              {/* Profile Image */}
              <div className="mb-8">
                <img 
                  src="/profile.png" 
                  alt="Keittisak Phasomsap" 
                  className="w-32 h-32 rounded-full mx-auto border-4 border-slate-600 shadow-xl object-cover"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-100">
                KEITTISAK PHASOMSAP
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
                AI Developer • Web3 Solana Expert • Game Developer • Udemy Instructor
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experienced Engineer with 5+ years in software development, specializing in AI platforms, 
                blockchain solutions, and educational content creation. Passionate about solving complex challenges 
                and delivering high-quality results.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#projects" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
                >
                  View Projects
                </a>
                <a 
                  href="https://github.com/ksomsap" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all"
                >
                  GitHub Profile
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-100">Featured Projects</h2>
          
          {/* AI Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-blue-400">🤖 AI Platforms</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {aiProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          {/* Web3 Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-purple-400">⛓️ Web3 & Solana</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {web3Projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          {/* Games Projects 
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-pink-400">🎮 Game Development</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gameProjects.map((project, index) => (
                <div key={index} className="bg-slate-800 rounded-xl border border-slate-700 hover:border-pink-400 transition-all project-card overflow-hidden shadow-sm">
                  <div className="w-full h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-2 text-slate-100">{project.title}</h4>
                    <p className="text-slate-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-pink-900/50 text-pink-300 px-2 py-1 rounded-full text-xs border border-pink-700 font-medium">{tech}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" className="text-pink-400 hover:text-pink-300 transition-colors text-sm font-semibold inline-flex items-center">
                      Play Game 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
*/}
          {/* Udemy Courses */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-green-400">📚 Udemy Courses</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-100">Professional Experience</h2>
          
          <div className="space-y-12">
            <div className="border-l-4 border-blue-500 pl-8 bg-white p-6 rounded-r-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-blue-600">AI & Online Education Developer</h3>
                <span className="text-gray-500 font-medium">Present</span>
              </div>
              <p className="text-lg text-purple-600 mb-4">Udemy Instructor</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Developed and published AI and software engineering courses on Udemy</li>
                <li>• Built hands-on ML/AI learning projects and practical automation tools</li>
                <li>• Designed learning platforms integrating web applications and AI-generated media</li>
                <li>• Supporting students and continuously improving course content</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-8 bg-white p-6 rounded-r-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-purple-600">AI Platforms & Proof of Concepts</h3>
                <span className="text-gray-500 font-medium">Present</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-700">Aowser.com – AI Image & Media Generation Platform</h4>
                  <ul className="text-gray-600 space-y-1 mt-2">
                    <li>• Designed and deployed full-stack AI platform with GPU-based inference</li>
                    <li>• Implemented Linux server automation, monitoring, and performance tuning</li>
                    <li>• Built API access and user management systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-700">Pixrock.co – AI Generation & Cloud Delivery Platform</h4>
                  <ul className="text-gray-600 space-y-1 mt-2">
                    <li>• Built production-ready AI services supporting real-time image generation</li>
                    <li>• Designed scalable frontend-backend architecture and deployment pipelines</li>
                    <li>• Implemented cloud-based content delivery systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-8 bg-white p-6 rounded-r-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-green-600">IT Engineer / Developer / System Analyst</h3>
                <span className="text-gray-500 font-medium">6 months</span>
              </div>
              <p className="text-lg text-green-700 mb-4">AGC Automotive (Thailand) Co., Ltd. / Newdawn Co., Ltd. - Chonburi</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Developed web applications to support internal users</li>
                <li>• Implemented and supported new ERP systems</li>
                <li>• Collaborated with cross-functional teams on system improvements</li>
              </ul>
            </div>

            <div className="border-l-4 border-yellow-500 pl-8 bg-white p-6 rounded-r-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-yellow-600">Test Engineer / Software Developer</h3>
                <span className="text-gray-500 font-medium">Mar 2017 - Sep 2019 (2.6 years)</span>
              </div>
              <p className="text-lg text-yellow-700 mb-4">Oracle Corporation (Thailand) Co., Ltd. - Chonburi</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Developed automated test software using scripting languages for product testing</li>
                <li>• Designed, created, and debugged software test cases and processes</li>
                <li>• Collaborated with Product Owner and team to build new features</li>
                <li>• Identified root causes of issues and implemented solutions</li>
                <li>• Migrated test structure source code to ALM Cloud (Oracle Cloud)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-12">
            Interested in collaborating on AI projects, Web3 solutions, or educational content? 
            Let's discuss how we can work together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Email</h3>
              <a href="mailto:keittisakcpm@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                keittisakcpm@gmail.com
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-purple-600">Phone</h3>
              <a href="tel:+66899385696" className="text-gray-600 hover:text-gray-900 transition-colors">
                (+66) 8-9938-5696
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-green-600">Location</h3>
              <p className="text-gray-600">Chonburi, Thailand</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/ksomsap" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-all border border-gray-300 hover:border-gray-400"
            >
              GitHub Profile
            </a>
            <a 
              href="mailto:keittisakcpm@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700 bg-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2026 Keittisak Phasomsap. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}