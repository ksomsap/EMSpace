'use client';

import { useEffect, useState } from 'react';

interface StatItemProps {
  number: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function StatItem({ number, label, suffix = '', duration = 2000 }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * number));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [number, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-300 text-lg">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { number: 5, label: 'Years Experience', suffix: '+' },
    { number: 10, label: 'Projects Completed', suffix: '+' },
    { number: 4, label: 'Live Platforms' },
    { number: 3, label: 'Udemy Courses' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              duration={2000 + index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}