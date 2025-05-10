import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Briefcase, 
  Calendar, 
  BookOpen,
  Hash, 
  Star, 
  Bookmark,
  Plus
} from 'lucide-react';
import { topics, users } from '../../data/mockData';
import Avatar from '../ui/Avatar';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block w-60 h-screen sticky top-16 overflow-y-auto bg-white dark:bg-dark-200 border-r border-light-200 dark:border-dark-300 pt-4">
      <div className="px-3 py-2">
        <h2 className="px-4 text-xs font-semibold text-light-400 dark:text-dark-400 uppercase tracking-wider">
          Main
        </h2>
        <div className="mt-2 space-y-1">
          <Link 
            to="/network" 
            className="group flex items-center px-4 py-2 text-sm font-medium rounded-md text-dark-300 dark:text-light-300 hover:bg-light-100 dark:hover:bg-dark-300"
          >
            <Users size={18} className="mr-3 text-light-400 dark:text-dark-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
            My Network
          </Link>
          <Link 
            to="/jobs" 
            className="group flex items-center px-4 py-2 text-sm font-medium rounded-md text-dark-300 dark:text-light-300 hover:bg-light-100 dark:hover:bg-dark-300"
          >
            <Briefcase size={18} className="mr-3 text-light-400 dark:text-dark-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
            Jobs
          </Link>
          <Link 
            to="/events" 
            className="group flex items-center px-4 py-2 text-sm font-medium rounded-md text-dark-300 dark:text-light-300 hover:bg-light-100 dark:hover:bg-dark-300"
          >
            <Calendar size={18} className="mr-3 text-light-400 dark:text-dark-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
            Events
          </Link>
          <Link 
            to="/resources" 
            className="group flex items-center px-4 py-2 text-sm font-medium rounded-md text-dark-300 dark:text-light-300 hover:bg-light-100 dark:hover:bg-dark-300"
          >
            <BookOpen size={18} className="mr-3 text-light-400 dark:text-dark-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
            Resources
          </Link>
        </div>
      </div>
      
      <div className="mt-5 px-3 py-2">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-xs font-semibold text-light-400 dark:text-dark-400 uppercase tracking-wider">
            Topics
          </h2>
          <button className="text-primary-600 dark:text-primary-500 hover:text-primary-800 dark:hover:text-primary-400 rounded-full p-1 hover:bg-light-100 dark:hover:bg-dark-300">
            <Plus size={16} />
          </button>
        </div>
        <div className="mt-2 space-y-1">
          {topics.slice(0, 5).map(topic => (
            <Link 
              key={topic.id}
              to={`/topics/${topic.name.toLowerCase()}`}
              className="group flex items-center px-4 py-2 text-sm font-medium rounded-md text-dark-300 dark:text-light-300 hover:bg-light-100 dark:hover:bg-dark-300"
            >
              <Hash size={18} className="mr-3 text-light-400 dark:text-dark-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
              {topic.name}
              {topic.isFollowing && (
                <Star size={14} className="ml-auto text-accent-500" />
              )}
            </Link>
          ))}
          <Link 
            to="/topics" 
            className="flex items-center px-4 py-2 text-xs font-medium text-primary-600 dark:text-primary-500 hover:text-primary-800 dark:hover:text-primary-400"
          >
            View all topics
          </Link>
        </div>
      </div>
      
      <div className="mt-5 px-3 py-2">
        <h2 className="px-4 text-xs font-semibold text-light-400 dark:text-dark-400 uppercase tracking-wider">
          Saved
        </h2>
        <div className="mt-2 space-y-1">
          <Link 
            to="/saved/posts" 
            className="group flex items-center px-4 py-2 text-sm font-medium rounded-md text-dark-300 dark:text-light-300 hover:bg-light-100 dark:hover:bg-dark-300"
          >
            <Bookmark size={18} className="mr-3 text-light-400 dark:text-dark-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
            Saved Posts
          </Link>
        </div>
      </div>
      
      <div className="mt-5 px-3 py-2 border-t border-light-200 dark:border-dark-300">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-xs font-semibold text-light-400 dark:text-dark-400 uppercase tracking-wider">
            Connections
          </h2>
          <Link to="/network" className="text-xs font-medium text-primary-600 dark:text-primary-500 hover:text-primary-800 dark:hover:text-primary-400">
            See all
          </Link>
        </div>
        <div className="mt-2 space-y-2 px-4">
          {[1, 2, 3].map((_, index) => (
            <Link 
              key={index} 
              to={`/profile/${users[index + 1].username}`}
              className="flex items-center py-2"
            >
              <Avatar 
                src={users[index + 1].avatar} 
                alt={users[index + 1].name} 
                size="sm" 
                status={index === 0 ? 'online' : index === 1 ? 'away' : 'offline'} 
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-dark-300 dark:text-light-200">{users[index + 1].name}</p>
                <p className="text-xs text-light-400 dark:text-dark-400">{users[index + 1].jobTitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;