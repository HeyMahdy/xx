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
        bg-white dark:bg-dark-200 rounded-lg overflow-hidden 
        shadow-sm transition-all duration-200
        ${hover ? 'hover:shadow-md hover:translate-y-[-2px]' : ''}
        ${bordered ? 'border border-light-200 dark:border-dark-300' : ''}
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
    <div className={`p-4 border-b border-light-200 dark:border-dark-300 ${className}`}>
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
    <div className={`p-4 border-t border-light-200 dark:border-dark-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;