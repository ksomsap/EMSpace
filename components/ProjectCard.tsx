interface ProjectCardProps {
  title: string;
  description: string;
  status: 'live' | 'ongoing' | 'completed';
  technologies: string[];
  link: string;
  category: 'ai' | 'web3' | 'game' | 'course';
  image?: string;
  imagePlaceholder?: string;
  disabled?: boolean;
}

export default function ProjectCard({ 
  title, 
  description, 
  status, 
  technologies, 
  link, 
  category,
  image,
  imagePlaceholder = "Project Image",
  disabled = false
}: ProjectCardProps) {
  const statusColors = {
    live: 'bg-green-900/50 text-green-300 border-green-700',
    ongoing: 'bg-yellow-900/50 text-yellow-300 border-yellow-700',
    completed: 'bg-blue-900/50 text-blue-300 border-blue-700'
  };

  const categoryColors = {
    ai: 'border-blue-500',
    web3: 'border-purple-500',
    game: 'border-pink-500',
    course: 'border-green-500'
  };

  const categoryHoverColors = {
    ai: 'hover:border-blue-400',
    web3: 'hover:border-purple-400',
    game: 'hover:border-pink-400',
    course: 'hover:border-green-400'
  };

  return (
    <div className={`project-card bg-slate-800 rounded-lg border border-slate-700 ${categoryHoverColors[category]} transition-all overflow-hidden`}>
      {/* Project Image */}
      <div className="w-full h-56 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-slate-700 flex items-center justify-center border-b border-slate-700">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-slate-400">{imagePlaceholder}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-semibold text-slate-100">{title}</h4>
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusColors[status]}`}>
            {status.toUpperCase()}
          </span>
        </div>
        
        <p className="text-slate-300 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {disabled ? (
          <span className="inline-flex items-center text-slate-500 font-medium cursor-not-allowed">
            {category === 'course' ? 'View Course' : category === 'game' ? 'Play Game' : 'Visit Platform'}
            {/*<span className="ml-2 text-xs">(Coming Soon)</span>*/}
          </span>
        ) : (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            {category === 'course' ? 'View Course' : category === 'game' ? 'Play Game' : 'Visit Platform'}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}