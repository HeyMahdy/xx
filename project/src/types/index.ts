export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  jobTitle: string;
  company: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  twitter: string;
  skills: string[];
  followers: number;
  following: number;
  isFollowing?: boolean;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  code?: string;
  language?: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
  hasLiked?: boolean;
}

export interface Project {
  id: string;
  owner: User;
  title: string;
  description: string;
  image: string;
  tags: string[];
  stars: number;
  forks: number;
  url: string;
  demo?: string;
  isStarred?: boolean;
}

export interface Topic {
  id: string;
  name: string;
  icon: string;
  followers: number;
  description: string;
  posts: number;
  isFollowing?: boolean;
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention' | 'share';
  actor: User;
  content: string;
  createdAt: string;
  read: boolean;
  link: string;
}

export interface Message {
  id: string;
  sender: User;
  content: string;
  createdAt: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
}

export interface Job {
  id: string;
  company: string;
  logo: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';
  salary: string;
  tags: string[];
  description: string;
  postedAt: string;
  url: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  organizer: User;
  attendees: number;
  url: string;
  isAttending?: boolean;
}