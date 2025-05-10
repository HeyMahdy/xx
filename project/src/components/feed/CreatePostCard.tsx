import React, { useState } from 'react';
import { Image, Code, CalendarDays, Briefcase, Send } from 'lucide-react';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import { useUser } from '../../context/UserContext';

const CreatePostCard: React.FC = () => {
  const { user } = useUser();
  const [content, setContent] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'post' | 'code' | 'event' | 'job'>('post');

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    if (!expanded && e.target.value.length > 0) {
      setExpanded(true);
    }
  };

  const handleFocus = () => {
    setExpanded(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Post content:', content);
    console.log('Post type:', selectedTab);
    // Here you would normally send this to an API
    setContent('');
    setExpanded(false);
  };

  if (!user) return null;

  return (
    <Card className="mb-4">
      <div className="p-4">
        <div className="flex">
          <Avatar src={user.avatar} alt={user.name} size="md" status="online" />
          <div className="ml-3 flex-grow">
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full p-2 border border-light-200 dark:border-dark-300 rounded-lg resize-none bg-light-100 dark:bg-dark-300 text-dark-300 dark:text-light-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                placeholder={`What's on your mind, ${user.name.split(' ')[0]}?`}
                rows={expanded ? 4 : 1}
                value={content}
                onChange={handleContentChange}
                onFocus={handleFocus}
              />
              
              {expanded && (
                <>
                  <div className="flex mt-3 border-b border-light-200 dark:border-dark-300">
                    <button
                      type="button"
                      className={`flex items-center px-4 py-2 text-sm font-medium ${
                        selectedTab === 'post'
                          ? 'text-primary-600 dark:text-primary-500 border-b-2 border-primary-600 dark:border-primary-500'
                          : 'text-light-400 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-500'
                      }`}
                      onClick={() => setSelectedTab('post')}
                    >
                      <Send size={16} className="mr-2" />
                      Post
                    </button>
                    <button
                      type="button"
                      className={`flex items-center px-4 py-2 text-sm font-medium ${
                        selectedTab === 'code'
                          ? 'text-primary-600 dark:text-primary-500 border-b-2 border-primary-600 dark:border-primary-500'
                          : 'text-light-400 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-500'
                      }`}
                      onClick={() => setSelectedTab('code')}
                    >
                      <Code size={16} className="mr-2" />
                      Code
                    </button>
                    <button
                      type="button"
                      className={`flex items-center px-4 py-2 text-sm font-medium ${
                        selectedTab === 'event'
                          ? 'text-primary-600 dark:text-primary-500 border-b-2 border-primary-600 dark:border-primary-500'
                          : 'text-light-400 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-500'
                      }`}
                      onClick={() => setSelectedTab('event')}
                    >
                      <CalendarDays size={16} className="mr-2" />
                      Event
                    </button>
                    <button
                      type="button"
                      className={`flex items-center px-4 py-2 text-sm font-medium ${
                        selectedTab === 'job'
                          ? 'text-primary-600 dark:text-primary-500 border-b-2 border-primary-600 dark:border-primary-500'
                          : 'text-light-400 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-500'
                      }`}
                      onClick={() => setSelectedTab('job')}
                    >
                      <Briefcase size={16} className="mr-2" />
                      Job
                    </button>
                  </div>
                  
                  {selectedTab === 'code' && (
                    <div className="mt-3">
                      <textarea
                        className="w-full p-2 border border-light-200 dark:border-dark-300 rounded-lg resize-none font-mono text-sm bg-dark-200 dark:bg-dark-100 text-light-100 focus:outline-none focus:ring-2 focus:ring-primary-400"
                        placeholder="// Paste your code here"
                        rows={6}
                      />
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-light-400 dark:text-dark-400 mr-2">Language:</span>
                        <select className="p-1 text-sm border border-light-200 dark:border-dark-300 rounded bg-light-100 dark:bg-dark-300 text-dark-300 dark:text-light-200">
                          <option value="javascript">JavaScript</option>
                          <option value="typescript">TypeScript</option>
                          <option value="python">Python</option>
                          <option value="go">Go</option>
                          <option value="rust">Rust</option>
                          <option value="html">HTML</option>
                          <option value="css">CSS</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  {selectedTab === 'event' && (
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-light-400 dark:text-dark-400 mb-1">Event Title</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-light-200 dark:border-dark-300 rounded-lg bg-light-100 dark:bg-dark-300 text-dark-300 dark:text-light-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                          placeholder="Title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-light-400 dark:text-dark-400 mb-1">Date & Time</label>
                        <input 
                          type="datetime-local" 
                          className="w-full p-2 border border-light-200 dark:border-dark-300 rounded-lg bg-light-100 dark:bg-dark-300 text-dark-300 dark:text-light-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm text-light-400 dark:text-dark-400 mb-1">Location</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-light-200 dark:border-dark-300 rounded-lg bg-light-100 dark:bg-dark-300 text-dark-300 dark:text-light-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                          placeholder="Location (or online)"
                        />
                      </div>
                    </div>
                  )}
                  
                  {selectedTab === 'job' && (
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-light-400 dark:text-dark-400 mb-1">Job Title</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-light-200 dark:border-dark-300 rounded-lg bg-light-100 dark:bg-dark-300 text-dark-300 dark:text-light-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                          placeholder="E.g. Senior React Developer"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-light-400 dark:text-dark-400 mb-1">Company</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-light-200 dark:border-dark-300 rounded-lg bg-light-100 dark:bg-dark-300 text-dark-300 dark:text-light-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-light-400 dark:text-dark-400 mb-1">Location</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-light-200 dark:border-dark-300 rounded-lg bg-light-100 dark:bg-dark-300 text-dark-300 dark:text-light-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                          placeholder="E.g. Remote, San Francisco"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-light-400 dark:text-dark-400 mb-1">Job Type</label>
                        <select 
                          className="w-full p-2 border border-light-200 dark:border-dark-300 rounded-lg bg-light-100 dark:bg-dark-300 text-dark-300 dark:text-light-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                        >
                          <option value="fulltime">Full-time</option>
                          <option value="parttime">Part-time</option>
                          <option value="contract">Contract</option>
                          <option value="internship">Internship</option>
                          <option value="remote">Remote</option>
                        </select>
                      </div>
                    </div>
                  )}
                </>
              )}
              
              <div className="flex items-center justify-between mt-3">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="p-2 rounded-full text-light-400 dark:text-dark-400 hover:bg-light-100 dark:hover:bg-dark-300 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <Image size={20} />
                  </button>
                  <button
                    type="button"
                    className="p-2 rounded-full text-light-400 dark:text-dark-400 hover:bg-light-100 dark:hover:bg-dark-300 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <Code size={20} />
                  </button>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={!content.trim()} 
                  variant="primary"
                  size="sm"
                >
                  Post
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreatePostCard;