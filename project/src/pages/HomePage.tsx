import React from 'react';
import CreatePostCard from '../components/feed/CreatePostCard';
import Post from '../components/feed/Post';
import ProjectCard from '../components/projects/ProjectCard';
import { posts, projects } from '../data/mockData';
import { Briefcase, TrendingUp, Calendar, Bookmark } from 'lucide-react';
import Card, { CardHeader, CardContent } from '../components/ui/Card';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <CreatePostCard />
      
      {/* Featured Section */}
      <Card className="mb-6">
        <CardHeader className="bg-primary-50 dark:bg-primary-900/20">
          <div className="flex items-center">
            <TrendingUp size={20} className="text-primary-600 dark:text-primary-500 mr-2" />
            <h2 className="font-semibold text-dark-300 dark:text-light-100">Featured This Week</h2>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-light-100 dark:bg-dark-300 rounded-lg">
              <div className="flex items-center mb-2">
                <Calendar size={16} className="text-accent-500 mr-2" />
                <h3 className="font-medium text-dark-300 dark:text-light-200">React Conf 2025</h3>
              </div>
              <p className="text-sm text-dark-300 dark:text-light-300 mb-2">The official React conference bringing together developers from around the world.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-light-400 dark:text-dark-400">May 15, 2025</span>
                <button className="text-xs px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300">
                  Attending
                </button>
              </div>
            </div>
            
            <div className="p-3 bg-light-100 dark:bg-dark-300 rounded-lg">
              <div className="flex items-center mb-2">
                <Briefcase size={16} className="text-primary-600 dark:text-primary-500 mr-2" />
                <h3 className="font-medium text-dark-300 dark:text-light-200">Senior React Developer</h3>
              </div>
              <p className="text-sm text-dark-300 dark:text-light-300 mb-2">TechFlow Inc. is hiring a senior React developer to join their growing team.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-light-400 dark:text-dark-400">San Francisco, CA</span>
                <button className="text-xs px-2 py-1 rounded-full bg-light-200 dark:bg-dark-400 text-dark-300 dark:text-light-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-800 dark:hover:text-primary-300">
                  Apply
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <a href="#" className="text-xs px-2 py-1 rounded-full bg-light-200 dark:bg-dark-300 text-dark-300 dark:text-light-300">
              #react
            </a>
            <a href="#" className="text-xs px-2 py-1 rounded-full bg-light-200 dark:bg-dark-300 text-dark-300 dark:text-light-300">
              #typescript
            </a>
            <a href="#" className="text-xs px-2 py-1 rounded-full bg-light-200 dark:bg-dark-300 text-dark-300 dark:text-light-300">
              #devops
            </a>
            <a href="#" className="text-xs px-2 py-1 rounded-full bg-light-200 dark:bg-dark-300 text-dark-300 dark:text-light-300">
              #python
            </a>
            <a href="#" className="text-xs px-2 py-1 rounded-full bg-light-200 dark:bg-dark-300 text-dark-300 dark:text-light-300">
              #nodejs
            </a>
          </div>
        </CardContent>
      </Card>
      
      {/* Projects Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-dark-300 dark:text-light-100">Trending Projects</h2>
          <a href="/projects" className="text-sm text-primary-600 dark:text-primary-500 hover:text-primary-800 dark:hover:text-primary-400">
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {projects.slice(0, 2).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      
      {/* Saved Items */}
      <div className="mb-6">
        <Card>
          <div className="p-4 flex items-center justify-between border-b border-light-200 dark:border-dark-300">
            <div className="flex items-center">
              <Bookmark size={18} className="text-accent-500 mr-2" />
              <h2 className="font-semibold text-dark-300 dark:text-light-100">Saved for Later</h2>
            </div>
            <a href="/saved" className="text-sm text-primary-600 dark:text-primary-500 hover:text-primary-800 dark:hover:text-primary-400">
              View all
            </a>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="p-3 bg-light-100 dark:bg-dark-300 rounded-lg flex items-center">
                <div className="mr-3 bg-primary-100 dark:bg-primary-900 p-2 rounded">
                  <Bookmark size={16} className="text-primary-800 dark:text-primary-300" />
                </div>
                <div>
                  <h3 className="font-medium text-dark-300 dark:text-light-200">Advanced TypeScript Patterns</h3>
                  <p className="text-xs text-light-400 dark:text-dark-400">Tutorial by Sarah Chen</p>
                </div>
              </div>
              
              <div className="p-3 bg-light-100 dark:bg-dark-300 rounded-lg flex items-center">
                <div className="mr-3 bg-accent-100 dark:bg-accent-900 p-2 rounded">
                  <Calendar size={16} className="text-accent-800 dark:text-accent-300" />
                </div>
                <div>
                  <h3 className="font-medium text-dark-300 dark:text-light-200">TypeScript Meetup</h3>
                  <p className="text-xs text-light-400 dark:text-dark-400">Feb 20, 2025 • Online</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Posts Feed */}
      <div>
        <h2 className="text-lg font-semibold text-dark-300 dark:text-light-100 mb-4">Latest Posts</h2>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;