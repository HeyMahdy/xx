import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageSquare, Share2, Bookmark, MoreHorizontal } from 'lucide-react';
import Avatar from '../ui/Avatar';
import { Post as PostType } from '../../types';
import { formatDateTime } from '../../utils/formatters';
import Card from '../ui/Card';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [liked, setLiked] = useState(post.hasLiked || false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [saved, setSaved] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Card className="mb-4 transition-all hover:border-light-300 dark:hover:border-dark-400">
      <div className="p-4">
        {/* Post Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <Link to={`/profile/${post.author.username}`}>
              <Avatar 
                src={post.author.avatar} 
                alt={post.author.name} 
                size="md" 
                status={post.author.id === 'user-2' ? 'online' : 'none'}
              />
            </Link>
            <div className="ml-3">
              <Link to={`/profile/${post.author.username}`} className="font-medium text-dark-300 dark:text-light-100 hover:underline">
                {post.author.name}
              </Link>
              <p className="text-xs text-light-400 dark:text-dark-400">
                {post.author.jobTitle} at {post.author.company} • {formatDateTime(post.createdAt)}
              </p>
            </div>
          </div>
          <div className="relative">
            <button 
              className="p-1 rounded-full hover:bg-light-100 dark:hover:bg-dark-300" 
              onClick={toggleMenu}
            >
              <MoreHorizontal size={18} className="text-light-400 dark:text-dark-400" />
            </button>
            
            {menuOpen && (
              <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-dark-200 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 animate-fade-in">
                <button className="block w-full text-left px-4 py-2 text-sm text-dark-300 dark:text-light-300 hover:bg-light-100 dark:hover:bg-dark-300">
                  Save post
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-dark-300 dark:text-light-300 hover:bg-light-100 dark:hover:bg-dark-300">
                  Copy link
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-dark-300 dark:text-light-300 hover:bg-light-100 dark:hover:bg-dark-300">
                  Hide post
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-error-600 dark:text-error-400 hover:bg-light-100 dark:hover:bg-dark-300">
                  Report post
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Post Content */}
        <div className="mt-3">
          <p className="text-dark-300 dark:text-light-200 whitespace-pre-line">{post.content}</p>
          
          {/* Code Block */}
          {post.code && (
            <div className="mt-3 rounded-md overflow-hidden font-mono text-sm">
              <div className="bg-dark-200 dark:bg-dark-100 text-light-200 p-2 text-xs flex justify-between">
                <span>{post.language}</span>
                <button className="text-primary-400 hover:text-primary-300">Copy</button>
              </div>
              <pre className="bg-dark-200 dark:bg-dark-100 p-4 overflow-x-auto text-light-100 text-sm">
                <code>{post.code}</code>
              </pre>
            </div>
          )}
          
          {/* Post Image */}
          {post.image && (
            <div className="mt-3">
              <img 
                src={post.image} 
                alt="Post attachment" 
                className="rounded-md w-full h-auto max-h-96 object-cover" 
              />
            </div>
          )}
        </div>
        
        {/* Post Actions */}
        <div className="mt-4 flex items-center justify-between pt-3 border-t border-light-200 dark:border-dark-300">
          <div className="flex items-center space-x-4">
            <button 
              className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                liked 
                  ? 'text-error-600 dark:text-error-500' 
                  : 'text-light-400 dark:text-dark-400 hover:text-error-600 dark:hover:text-error-500'
              }`}
              onClick={handleLike}
            >
              <Heart size={18} className={liked ? 'fill-current' : ''} />
              <span>{likesCount}</span>
            </button>
            
            <button className="flex items-center space-x-1 text-sm font-medium text-light-400 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-500">
              <MessageSquare size={18} />
              <span>{post.comments}</span>
            </button>
            
            <button className="flex items-center space-x-1 text-sm font-medium text-light-400 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-500">
              <Share2 size={18} />
              <span>{post.shares}</span>
            </button>
          </div>
          
          <button 
            className={`flex items-center space-x-1 text-sm font-medium ${
              saved 
                ? 'text-accent-600 dark:text-accent-500' 
                : 'text-light-400 dark:text-dark-400 hover:text-accent-600 dark:hover:text-accent-500'
            }`}
            onClick={() => setSaved(!saved)}
          >
            <Bookmark size={18} className={saved ? 'fill-current' : ''} />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Post;