interface SkillBadgeProps {
  skill: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category?: 'language' | 'framework' | 'tool' | 'platform';
}

export default function SkillBadge({ skill, level = 'intermediate', category = 'language' }: SkillBadgeProps) {
  const levelColors = {
    beginner: 'bg-slate-800 border-slate-600 text-slate-300',
    intermediate: 'bg-blue-900/50 border-blue-700 text-blue-300',
    advanced: 'bg-purple-900/50 border-purple-700 text-purple-300',
    expert: 'bg-green-900/50 border-green-700 text-green-300'
  };

  const categoryIcons = {
    language: '💻',
    framework: '⚡',
    tool: '🔧',
    platform: '☁️'
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium border ${levelColors[level]}`}>
      <span>{categoryIcons[category]}</span>
      <span>{skill}</span>
      <div className={`w-2 h-2 rounded-full ${level === 'expert' ? 'bg-yellow-400' : level === 'advanced' ? 'bg-blue-400' : 'bg-gray-400'}`} />
    </div>
  );
}