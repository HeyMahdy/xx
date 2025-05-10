import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  status?: 'online' | 'offline' | 'away' | 'busy' | 'none';
  border?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  className = '',
  status = 'none',
  border = false,
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const statusColors = {
    online: 'bg-success-500',
    offline: 'bg-light-300 dark:bg-dark-300',
    away: 'bg-warning-500',
    busy: 'bg-error-500',
    none: '',
  };

  const statusSizes = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4',
  };

  const borderClasses = border ? 'border-2 border-white dark:border-dark-200' : '';

  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`${sizeClasses[size]} ${borderClasses} rounded-full object-cover`}
      />
      
      {status !== 'none' && (
        <span 
          className={`absolute right-0 bottom-0 block rounded-full ${statusColors[status]} ${statusSizes[size]} ${borderClasses}`} 
          aria-hidden="true"
        ></span>
      )}
    </div>
  );
};

export default Avatar;