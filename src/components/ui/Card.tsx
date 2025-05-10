import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  bordered?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  bordered = false,
}) => {
  return (
    <div
      className={`
        bg-white dark:bg-dark-200 rounded-none overflow-hidden 
        border-3 border-dark-300 dark:border-light-300
        shadow-retro dark:shadow-none
        transition-all duration-200
        ${hover ? 'hover:translate-y-[-2px] hover:shadow-retro-lg dark:hover:shadow-none' : ''}
        ${bordered ? 'border-3 border-dark-300 dark:border-light-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`p-4 border-b-3 border-dark-300 dark:border-light-300 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`p-4 border-t-3 border-dark-300 dark:border-light-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;