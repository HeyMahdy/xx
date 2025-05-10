import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Folder, 
  MessageSquare, 
  Bell, 
  Search, 
  Code, 
  Sun, 
  Moon,
  Menu,
  X,
  LogOut
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useUser } from '../../context/UserContext';
import Avatar from '../ui/Avatar';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
    // Close mobile menu if open
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-dark-200 border-b border-light-200 dark:border-dark-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Main Nav */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <Code size={28} className="text-primary-600 dark:text-primary-500" />
                <span className="ml-2 text-xl font-bold text-dark-300 dark:text-light-100">DevConnect</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                to="/" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-primary-600 dark:border-primary-500 text-sm font-medium text-dark-300 dark:text-light-100"
              >
                <Home size={18} className="mr-1" />
                <span>Home</span>
              </Link>
              <Link 
                to="/network" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-dark-300 dark:text-light-300 hover:text-dark-100 dark:hover:text-light-100 hover:border-primary-400"
              >
                <Users size={18} className="mr-1" />
                <span>Network</span>
              </Link>
              <Link 
                to="/projects" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-dark-300 dark:text-light-300 hover:text-dark-100 dark:hover:text-light-100 hover:border-primary-400"
              >
                <Folder size={18} className="mr-1" />
                <span>Projects</span>
              </Link>
              <Link 
                to="/messages" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-dark-300 dark:text-light-300 hover:text-dark-100 dark:hover:text-light-100 hover:border-primary-400"
              >
                <MessageSquare size={18} className="mr-1" />
                <span>Messages</span>
              </Link>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-light-400 dark:text-dark-400" />
                </div>
                <input
                  id="search"
                  name="search"
                  className={`
                    block w-full pl-10 pr-3 py-2 border rounded-md
                    leading-5 bg-light-100 dark:bg-dark-300 placeholder-light-400 dark:placeholder-dark-400
                    focus:outline-none focus:ring-2 focus:bg-white dark:focus:bg-dark-300 sm:text-sm
                    border-light-200 dark:border-dark-300 
                    ${searchFocused ? 'focus:ring-primary-500 focus:border-primary-500' : ''}
                    transition-all duration-200
                  `}
                  placeholder="Search developers, projects, topics..."
                  type="search"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
            </div>
          </div>
          
          {/* Right side icons */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            {/* Theme toggle */}
            <button 
              onClick={toggleTheme}
              className="p-1 rounded-full text-dark-300 dark:text-light-300 hover:bg-light-200 dark:hover:bg-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-accent-500" />
              ) : (
                <Moon size={20} />
              )}
            </button>
            
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={toggleNotifications}
                className="p-1 rounded-full text-dark-300 dark:text-light-300 hover:bg-light-200 dark:hover:bg-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <span className="sr-only">View notifications</span>
                <Bell size={20} />
                {/* Notification badge */}
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-error-500 ring-2 ring-white dark:ring-dark-200"></span>
              </button>
              
              {/* Notification panel */}
              {notificationsOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white dark:bg-dark-200 ring-1 ring-black ring-opacity-5 focus:outline-none animate-fade-in">
                  <div className="px-4 py-2 border-b border-light-200 dark:border-dark-300">
                    <h3 className="text-sm font-medium text-dark-300 dark:text-light-200">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    <a href="#" className="block px-4 py-3 hover:bg-light-100 dark:hover:bg-dark-300 transition-colors">
                      <div className="flex">
                        <Avatar src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Sarah Chen" size="sm" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-dark-300 dark:text-light-200">Sarah Chen liked your post about TypeScript tips</p>
                          <p className="text-xs text-light-400 dark:text-dark-400">5 minutes ago</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 hover:bg-light-100 dark:hover:bg-dark-300 transition-colors">
                      <div className="flex">
                        <Avatar src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Marcus Williams" size="sm" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-dark-300 dark:text-light-200">Marcus Williams commented on your React Native project</p>
                          <p className="text-xs text-light-400 dark:text-dark-400">1 hour ago</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 hover:bg-light-100 dark:hover:bg-dark-300 transition-colors">
                      <div className="flex">
                        <Avatar src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Olivia Rodriguez" size="sm" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-dark-300 dark:text-light-200">Olivia Rodriguez started following you</p>
                          <p className="text-xs text-light-400 dark:text-dark-400">3 hours ago</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="px-4 py-2 border-t border-light-200 dark:border-dark-300 text-center">
                    <a href="#" className="text-xs font-medium text-primary-600 dark:text-primary-500 hover:text-primary-800 dark:hover:text-primary-400">View all notifications</a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Profile dropdown */}
            {user && (
              <div className="relative">
                <div className="flex items-center cursor-pointer hover:opacity-90">
                  <Avatar 
                    src={user.avatar} 
                    alt={user.name} 
                    size="sm" 
                    status="online"
                    border
                  />
                  <span className="ml-2 text-sm font-medium text-dark-300 dark:text-light-200">{user.name}</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-300 dark:text-light-300 hover:bg-light-200 dark:hover:bg-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden animate-slide-down">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="bg-primary-50 dark:bg-primary-900 border-l-4 border-primary-600 dark:border-primary-500 block pl-3 pr-4 py-2 text-base font-medium text-primary-800 dark:text-primary-300"
            >
              Home
            </Link>
            <Link
              to="/network"
              className="border-l-4 border-transparent hover:bg-light-100 dark:hover:bg-dark-300 block pl-3 pr-4 py-2 text-base font-medium text-dark-300 dark:text-light-300 hover:text-dark-100 dark:hover:text-light-100 hover:border-primary-400"
            >
              Network
            </Link>
            <Link
              to="/projects"
              className="border-l-4 border-transparent hover:bg-light-100 dark:hover:bg-dark-300 block pl-3 pr-4 py-2 text-base font-medium text-dark-300 dark:text-light-300 hover:text-dark-100 dark:hover:text-light-100 hover:border-primary-400"
            >
              Projects
            </Link>
            <Link
              to="/messages"
              className="border-l-4 border-transparent hover:bg-light-100 dark:hover:bg-dark-300 block pl-3 pr-4 py-2 text-base font-medium text-dark-300 dark:text-light-300 hover:text-dark-100 dark:hover:text-light-100 hover:border-primary-400"
            >
              Messages
            </Link>
          </div>
          
          {/* Mobile user menu */}
          {user && (
            <div className="pt-4 pb-3 border-t border-light-200 dark:border-dark-300">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <Avatar 
                    src={user.avatar} 
                    alt={user.name} 
                    size="md" 
                    status="online"
                    border
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-dark-300 dark:text-light-200">{user.name}</div>
                  <div className="text-sm font-medium text-light-400 dark:text-dark-400">@{user.username}</div>
                </div>
                <button
                  onClick={toggleTheme}
                  className="ml-auto flex-shrink-0 p-1 rounded-full text-dark-300 dark:text-light-300 hover:bg-light-200 dark:hover:bg-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {theme === 'dark' ? <Sun size={20} className="text-accent-500" /> : <Moon size={20} />}
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-base font-medium text-dark-300 dark:text-light-300 hover:bg-light-100 dark:hover:bg-dark-300"
                >
                  Your Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-base font-medium text-dark-300 dark:text-light-300 hover:bg-light-100 dark:hover:bg-dark-300"
                >
                  Settings
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center w-full text-left px-4 py-2 text-base font-medium text-dark-300 dark:text-light-300 hover:bg-light-100 dark:hover:bg-dark-300"
                >
                  <LogOut size={18} className="mr-2 text-error-500" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;