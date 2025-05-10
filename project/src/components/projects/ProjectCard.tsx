import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import { Project } from '../../types';
import { formatNumber } from '../../utils/formatters';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [starred, setStarred] = useState(project.isStarred || false);
  const [starsCount, setStarsCount] = useState(project.stars);

  const handleStar = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (starred) {
      setStarsCount(prev => prev - 1);
    } else {
      setStarsCount(prev => prev + 1);
    }
    setStarred(!starred);
  };

  return (
    <Card hover bordered className="overflow-hidden transition-all duration-300">
      <Link to={`/projects/${project.id}`} className="block">
        {project.image && (
          <div className="h-40 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
            />
          </div>
        )}
        
        <div className="p-4">
          <div className="flex items-center justify-between">
            <Link to={`/profile/${project.owner.username}`} className="flex items-center">
              <Avatar 
                src={project.owner.avatar} 
                alt={project.owner.name} 
                size="sm" 
              />
              <span className="ml-2 text-sm font-medium text-dark-300 dark:text-light-200 hover:underline">
                {project.owner.name}
              </span>
            </Link>
            
            <div className="flex items-center space-x-3 text-sm text-light-400 dark:text-dark-400">
              <button 
                onClick={handleStar}
                className={`flex items-center space-x-1 transition-colors ${
                  starred 
                    ? 'text-accent-500 hover:text-accent-600' 
                    : 'hover:text-accent-500'
                }`}
              >
                <Star size={16} className={starred ? 'fill-current' : ''} />
                <span>{formatNumber(starsCount)}</span>
              </button>
              
              <div className="flex items-center space-x-1">
                <GitFork size={16} />
                <span>{formatNumber(project.forks)}</span>
              </div>
            </div>
          </div>
          
          <h3 className="mt-3 text-lg font-semibold text-dark-300 dark:text-light-100">
            {project.title}
          </h3>
          
          <p className="mt-2 text-sm text-dark-300 dark:text-light-300 line-clamp-2">
            {project.description}
          </p>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {project.demo && (
            <div className="mt-3 flex items-center">
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:text-primary-800 dark:hover:text-primary-400"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} className="mr-1" />
                Live Demo
              </a>
            </div>
          )}
        </div>
      </Link>
    </Card>
  );
};

export default ProjectCard;