import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import { jobs, events, topics } from '../../data/mockData';
import { formatDate } from '../../utils/formatters';

const RightSidebar: React.FC = () => {
  return (
    <aside className="hidden md:block w-80 h-screen sticky top-16 overflow-y-auto p-4">
      {/* Popular Topics */}
      <Card className="mb-4">
        <div className="p-4 border-b border-light-200 dark:border-dark-300">
          <h3 className="font-medium text-dark-300 dark:text-light-100">Popular Topics</h3>
        </div>
        <div className="p-2">
          {topics.slice(0, 3).map((topic) => (
            <Link 
              key={topic.id}
              to={`/topics/${topic.name.toLowerCase()}`}
              className="block p-2 hover:bg-light-100 dark:hover:bg-dark-300 rounded-md"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-dark-300 dark:text-light-200">#{topic.name}</p>
                  <p className="text-xs text-light-400 dark:text-dark-400">{topic.posts.toLocaleString()} posts</p>
                </div>
                <button className={`text-xs px-2 py-1 rounded-full ${
                  topic.isFollowing 
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300' 
                    : 'bg-light-200 dark:bg-dark-300 text-dark-300 dark:text-light-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-800 dark:hover:text-primary-300'
                }`}>
                  {topic.isFollowing ? 'Following' : 'Follow'}
                </button>
              </div>
            </Link>
          ))}
          <Link 
            to="/topics" 
            className="block p-2 text-sm text-primary-600 dark:text-primary-500 hover:text-primary-800 dark:hover:text-primary-400 text-center"
          >
            View all topics
          </Link>
        </div>
      </Card>
      
      {/* Upcoming Events */}
      <Card className="mb-4">
        <div className="p-4 border-b border-light-200 dark:border-dark-300">
          <h3 className="font-medium text-dark-300 dark:text-light-100">Upcoming Events</h3>
        </div>
        <div className="p-2">
          {events.slice(0, 2).map((event) => (
            <Link 
              key={event.id}
              to={event.url}
              className="block p-2 hover:bg-light-100 dark:hover:bg-dark-300 rounded-md"
            >
              <div className="flex items-start">
                <div className="bg-light-200 dark:bg-dark-300 rounded p-2 mr-3">
                  <Calendar size={18} className="text-primary-600 dark:text-primary-500" />
                </div>
                <div>
                  <p className="font-medium text-dark-300 dark:text-light-200">{event.title}</p>
                  <p className="text-xs text-light-400 dark:text-dark-400 mt-1">{formatDate(event.date)} • {event.location}</p>
                  <p className="text-xs text-light-400 dark:text-dark-400 mt-1">{event.attendees.toLocaleString()} attending</p>
                </div>
              </div>
            </Link>
          ))}
          <Link 
            to="/events" 
            className="flex items-center justify-center p-2 text-sm text-primary-600 dark:text-primary-500 hover:text-primary-800 dark:hover:text-primary-400"
          >
            View all events
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </Card>
      
      {/* Recent Jobs */}
      <Card className="mb-4">
        <div className="p-4 border-b border-light-200 dark:border-dark-300">
          <h3 className="font-medium text-dark-300 dark:text-light-100">Recent Jobs</h3>
        </div>
        <div className="p-2">
          {jobs.slice(0, 3).map((job) => (
            <Link 
              key={job.id}
              to={job.url}
              className="block p-2 hover:bg-light-100 dark:hover:bg-dark-300 rounded-md"
            >
              <div className="flex items-start">
                <div className="bg-light-200 dark:bg-dark-300 rounded p-2 mr-3">
                  <Briefcase size={18} className="text-primary-600 dark:text-primary-500" />
                </div>
                <div>
                  <p className="font-medium text-dark-300 dark:text-light-200">{job.title}</p>
                  <p className="text-xs text-light-400 dark:text-dark-400 mt-1">{job.company} • {job.location}</p>
                  <p className="text-xs text-light-400 dark:text-dark-400 mt-1">Posted: {formatDate(job.postedAt)}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {job.tags.slice(0, 2).map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-light-200 dark:bg-dark-300 text-dark-300 dark:text-light-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {job.tags.length > 2 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-light-200 dark:bg-dark-300 text-dark-300 dark:text-light-300">
                        +{job.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <Link 
            to="/jobs" 
            className="flex items-center justify-center p-2 text-sm text-primary-600 dark:text-primary-500 hover:text-primary-800 dark:hover:text-primary-400"
          >
            View all jobs
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </Card>
      
      {/* Footer Links */}
      <div className="text-xs text-light-400 dark:text-dark-400 p-2">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
        <p className="mt-3">© 2025 DevConnect. All rights reserved.</p>
      </div>
    </aside>
  );
};

export default RightSidebar;