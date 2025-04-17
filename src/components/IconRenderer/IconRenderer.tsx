import { LucideIcon } from 'lucide-react';

type IconRendererProps = {
  icon: LucideIcon | string;
  alt?: string;
  className?: string;
};

export const IconRenderer = ({ icon, alt = 'icon', className }: IconRendererProps) => {
  if (typeof icon === 'string') {
    return <img src={icon} alt={alt} className={className} />;
  }

  const LucideComponent = icon;
  return <LucideComponent className={className} />;
};
