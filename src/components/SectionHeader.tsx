import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  badgeTone?: 'forest' | 'blood';
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeIcon: BadgeIcon,
  badgeText,
  badgeTone = 'forest',
  title,
  description,
  className = 'mb-16',
}) => {
  const isBlood = badgeTone === 'blood';

  return (
    <div className={`text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 ${className}`}>
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
          isBlood
            ? 'bg-resilio-blood-950/80 border border-resilio-blood-700/80 text-resilio-blood-300'
            : 'bg-resilio-forest-900/80 border border-resilio-forest-700/60 text-resilio-forest-300'
        }`}
      >
        <BadgeIcon className={`w-3.5 h-3.5 ${isBlood ? 'text-resilio-blood-400' : 'text-resilio-forest-400'}`} />
        <span>{badgeText}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
        {title}
      </h2>

      <p className="text-base text-resilio-charcoal-300 leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
};
