import { User, Post, Project, Topic, Notification, Conversation, Message, Job, Event } from '../types';
import { format, subDays, subHours, subMinutes } from 'date-fns';

// Mock Users
export const currentUser: User = {
  id: 'user-1',
  name: 'Alex Johnson',
  username: 'alexj',
  avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
  bio: 'Full-stack developer with a passion for React and TypeScript',
  jobTitle: 'Senior Frontend Developer',
  company: 'TechFlow Inc.',
  location: 'San Francisco, CA',
  website: 'https://alexj.dev',
  github: 'alexj',
  linkedin: 'alexjohnson',
  twitter: 'alexj_dev',
  skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS'],
  followers: 458,
  following: 273
};

export const users: User[] = [
  currentUser,
  {
    id: 'user-2',
    name: 'Sarah Chen',
    username: 'schen',
    avatar: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Backend developer specializing in Golang and distributed systems',
    jobTitle: 'Senior Backend Engineer',
    company: 'DataScale',
    location: 'Seattle, WA',
    website: 'https://sarahchen.io',
    github: 'schen',
    linkedin: 'sarahchen',
    twitter: 'schen_dev',
    skills: ['Go', 'Kubernetes', 'Docker', 'AWS', 'PostgreSQL'],
    followers: 723,
    following: 185,
    isFollowing: true
  },
  {
    id: 'user-3',
    name: 'Marcus Williams',
    username: 'marcusw',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Mobile developer and UI/UX enthusiast',
    jobTitle: 'Lead Mobile Developer',
    company: 'AppWorks',
    location: 'New York, NY',
    website: 'https://marcus.design',
    github: 'marcusw',
    linkedin: 'marcuswilliams',
    twitter: 'marcusw_ui',
    skills: ['React Native', 'Swift', 'Kotlin', 'Figma', 'Firebase'],
    followers: 892,
    following: 410,
    isFollowing: false
  },
  {
    id: 'user-4',
    name: 'Olivia Rodriguez',
    username: 'oliviar',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Data scientist and machine learning researcher',
    jobTitle: 'ML Engineer',
    company: 'AITech Labs',
    location: 'Boston, MA',
    website: 'https://oliviarodriguez.net',
    github: 'oliviar',
    linkedin: 'oliviarodriguez',
    twitter: 'oliviar_ml',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'R', 'Data Visualization'],
    followers: 1243,
    following: 267,
    isFollowing: true
  },
  {
    id: 'user-5',
    name: 'Raj Patel',
    username: 'rajp',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'DevOps engineer focused on infrastructure automation',
    jobTitle: 'DevOps Lead',
    company: 'CloudScale',
    location: 'Austin, TX',
    website: 'https://rajpatel.tech',
    github: 'rajp',
    linkedin: 'rajpatel',
    twitter: 'rajp_devops',
    skills: ['Terraform', 'Ansible', 'Jenkins', 'AWS', 'Kubernetes'],
    followers: 678,
    following: 321,
    isFollowing: false
  }
];

// Mock Posts
export const posts: Post[] = [
  {
    id: 'post-1',
    author: users[2],
    content: 'Just launched a new React Native library for animated charts. Check it out on GitHub!',
    code: `
import { AnimatedChart } from 'react-native-animated-charts';

export default function App() {
  return (
    <AnimatedChart 
      data={data}
      color="#6366f1"
      animationDuration={800}
    />
  );
}`,
    language: 'jsx',
    likes: 142,
    comments: 32,
    shares: 17,
    createdAt: format(subHours(new Date(), 2), 'yyyy-MM-dd HH:mm:ss'),
    hasLiked: true
  },
  {
    id: 'post-2',
    author: users[1],
    content: 'Solved a tricky issue with Golang concurrency today. Here\'s the pattern that worked:',
    code: `
func worker(jobs <-chan Job, results chan<- Result) {
  for job := range jobs {
    results <- process(job)
  }
}

func main() {
  jobs := make(chan Job, 100)
  results := make(chan Result, 100)
  
  // Start workers
  for w := 1; w <= 3; w++ {
    go worker(jobs, results)
  }
  
  // Send jobs and collect results
  // ...
}`,
    language: 'go',
    likes: 89,
    comments: 21,
    shares: 7,
    createdAt: format(subHours(new Date(), 5), 'yyyy-MM-dd HH:mm:ss'),
    hasLiked: false
  },
  {
    id: 'post-3',
    author: users[4],
    content: 'My team just migrated our entire infrastructure to Kubernetes. The automation has saved us countless hours already.',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=700',
    likes: 211,
    comments: 42,
    shares: 31,
    createdAt: format(subHours(new Date(), 8), 'yyyy-MM-dd HH:mm:ss'),
    hasLiked: true
  },
  {
    id: 'post-4',
    author: users[3],
    content: 'Just published a paper on our latest research in neural networks for natural language processing. Here\'s the link to the arxiv paper.',
    likes: 178,
    comments: 29,
    shares: 45,
    createdAt: format(subDays(new Date(), 1), 'yyyy-MM-dd HH:mm:ss'),
    hasLiked: false
  },
  {
    id: 'post-5',
    author: users[0],
    content: 'Tailwind CSS + TypeScript + React = The perfect frontend stack?',
    likes: 315,
    comments: 87,
    shares: 23,
    createdAt: format(subDays(new Date(), 1), 'yyyy-MM-dd HH:mm:ss'),
    hasLiked: false
  }
];

// Mock Projects
export const projects: Project[] = [
  {
    id: 'project-1',
    owner: users[0],
    title: 'React Component Library',
    description: 'A modern component library built with React, TypeScript, and Tailwind CSS.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=650',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    stars: 487,
    forks: 89,
    url: 'https://github.com/alexj/react-component-library',
    demo: 'https://react-components.alexj.dev',
    isStarred: false
  },
  {
    id: 'project-2',
    owner: users[1],
    title: 'Go Microservices Framework',
    description: 'A lightweight framework for building microservices in Go with integrated service discovery and circuit breaking.',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=650',
    tags: ['Go', 'Microservices', 'gRPC', 'Docker'],
    stars: 932,
    forks: 142,
    url: 'https://github.com/schen/go-micro',
    isStarred: true
  },
  {
    id: 'project-3',
    owner: users[2],
    title: 'React Native Animation Library',
    description: 'High-performance animations for React Native applications with a simple API.',
    image: 'https://images.pexels.com/photos/36753/twilight-snow-winter-landscape.jpg?auto=compress&cs=tinysrgb&w=650',
    tags: ['React Native', 'Animation', 'JavaScript', 'Mobile'],
    stars: 1243,
    forks: 231,
    url: 'https://github.com/marcusw/rn-animations',
    demo: 'https://rn-animations.marcusw.dev',
    isStarred: true
  },
  {
    id: 'project-4',
    owner: users[3],
    title: 'ML Model Deployment Kit',
    description: 'Tools for deploying machine learning models to production with monitoring and A/B testing capabilities.',
    image: 'https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=650',
    tags: ['Python', 'Machine Learning', 'Docker', 'Kubernetes'],
    stars: 872,
    forks: 167,
    url: 'https://github.com/oliviar/ml-deploy',
    isStarred: false
  }
];

// Mock Topics
export const topics: Topic[] = [
  {
    id: 'topic-1',
    name: 'React',
    icon: 'react',
    followers: 32482,
    description: 'A JavaScript library for building user interfaces',
    posts: 12750,
    isFollowing: true
  },
  {
    id: 'topic-2',
    name: 'TypeScript',
    icon: 'code',
    followers: 28793,
    description: 'A strongly typed programming language that builds on JavaScript',
    posts: 9843,
    isFollowing: true
  },
  {
    id: 'topic-3',
    name: 'Node.js',
    icon: 'server',
    followers: 41267,
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    posts: 15621,
    isFollowing: false
  },
  {
    id: 'topic-4',
    name: 'Python',
    icon: 'codepen',
    followers: 56723,
    description: 'A programming language that lets you work quickly and integrate systems effectively',
    posts: 21495,
    isFollowing: false
  },
  {
    id: 'topic-5',
    name: 'DevOps',
    icon: 'git-branch',
    followers: 19854,
    description: 'Practices that combine software development and IT operations',
    posts: 8754,
    isFollowing: true
  }
];

// Mock Notifications
export const notifications: Notification[] = [
  {
    id: 'notification-1',
    type: 'like',
    actor: users[1],
    content: 'liked your post about TypeScript tips',
    createdAt: format(subMinutes(new Date(), 5), 'yyyy-MM-dd HH:mm:ss'),
    read: false,
    link: '/post/post-5'
  },
  {
    id: 'notification-2',
    type: 'comment',
    actor: users[2],
    content: 'commented on your React Native project',
    createdAt: format(subHours(new Date(), 1), 'yyyy-MM-dd HH:mm:ss'),
    read: false,
    link: '/projects/project-1'
  },
  {
    id: 'notification-3',
    type: 'follow',
    actor: users[3],
    content: 'started following you',
    createdAt: format(subHours(new Date(), 3), 'yyyy-MM-dd HH:mm:ss'),
    read: true,
    link: '/profile/oliviar'
  },
  {
    id: 'notification-4',
    type: 'mention',
    actor: users[4],
    content: 'mentioned you in a discussion about DevOps',
    createdAt: format(subDays(new Date(), 1), 'yyyy-MM-dd HH:mm:ss'),
    read: true,
    link: '/topics/devops'
  }
];

// Mock Messages & Conversations
export const messages: Message[] = [
  {
    id: 'message-1',
    sender: users[1],
    content: 'Hey, I saw your React component library. Really impressive work!',
    createdAt: format(subHours(new Date(), 1), 'yyyy-MM-dd HH:mm:ss'),
    read: true
  },
  {
    id: 'message-2',
    sender: currentUser,
    content: 'Thanks Sarah! I appreciate that. I\'ve been working on it for a few months now.',
    createdAt: format(subHours(new Date(), 1), 'yyyy-MM-dd HH:mm:ss'),
    read: true
  },
  {
    id: 'message-3',
    sender: users[1],
    content: 'Would you be interested in collaborating on a project? I\'m working on something that could use your frontend expertise.',
    createdAt: format(subMinutes(new Date(), 30), 'yyyy-MM-dd HH:mm:ss'),
    read: false
  }
];

export const conversations: Conversation[] = [
  {
    id: 'conversation-1',
    participants: [currentUser, users[1]],
    lastMessage: messages[2],
    unreadCount: 1
  },
  {
    id: 'conversation-2',
    participants: [currentUser, users[2]],
    lastMessage: {
      id: 'message-4',
      sender: users[2],
      content: 'Can you share more details about the animation library you mentioned?',
      createdAt: format(subHours(new Date(), 5), 'yyyy-MM-dd HH:mm:ss'),
      read: true
    },
    unreadCount: 0
  },
  {
    id: 'conversation-3',
    participants: [currentUser, users[3]],
    lastMessage: {
      id: 'message-5',
      sender: users[3],
      content: 'I loved your article on TypeScript generics!',
      createdAt: format(subDays(new Date(), 1), 'yyyy-MM-dd HH:mm:ss'),
      read: true
    },
    unreadCount: 0
  }
];

// Mock Jobs
export const jobs: Job[] = [
  {
    id: 'job-1',
    company: 'TechFlow Inc.',
    logo: 'https://images.pexels.com/photos/15615179/pexels-photo-15615179.jpeg?auto=compress&cs=tinysrgb&w=100',
    title: 'Senior React Developer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$140K - $180K',
    tags: ['React', 'TypeScript', 'GraphQL', 'Redux'],
    description: 'We\'re looking for a senior React developer to join our growing team...',
    postedAt: format(subDays(new Date(), 2), 'yyyy-MM-dd'),
    url: '/jobs/senior-react-developer'
  },
  {
    id: 'job-2',
    company: 'DataScale',
    logo: 'https://images.pexels.com/photos/15650138/pexels-photo-15650138.jpeg?auto=compress&cs=tinysrgb&w=100',
    title: 'Backend Engineer (Go)',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130K - $170K',
    tags: ['Go', 'Microservices', 'Kubernetes', 'PostgreSQL'],
    description: 'Join our backend team to build scalable services...',
    postedAt: format(subDays(new Date(), 3), 'yyyy-MM-dd'),
    url: '/jobs/backend-engineer-go'
  },
  {
    id: 'job-3',
    company: 'AITech Labs',
    logo: 'https://images.pexels.com/photos/19264513/pexels-photo-19264513.jpeg?auto=compress&cs=tinysrgb&w=100',
    title: 'Machine Learning Engineer',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$150K - $190K',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'ML Ops'],
    description: 'Help us develop cutting-edge machine learning models...',
    postedAt: format(subDays(new Date(), 1), 'yyyy-MM-dd'),
    url: '/jobs/ml-engineer'
  }
];

// Mock Events
export const events: Event[] = [
  {
    id: 'event-1',
    title: 'React Conf 2025',
    description: 'The official React conference bringing together developers from around the world.',
    date: '2025-05-15',
    time: '09:00 AM - 06:00 PM',
    location: 'San Francisco, CA',
    image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=650',
    organizer: users[0],
    attendees: 1250,
    url: '/events/react-conf-2025',
    isAttending: true
  },
  {
    id: 'event-2',
    title: 'TypeScript Meetup',
    description: 'Monthly meetup for TypeScript enthusiasts to share tips, tricks, and best practices.',
    date: '2025-02-20',
    time: '06:30 PM - 09:00 PM',
    location: 'Online',
    image: 'https://images.pexels.com/photos/7087858/pexels-photo-7087858.jpeg?auto=compress&cs=tinysrgb&w=650',
    organizer: users[1],
    attendees: 327,
    url: '/events/typescript-meetup',
    isAttending: false
  },
  {
    id: 'event-3',
    title: 'DevOps Days',
    description: 'A community conference covering topics of software development, IT infrastructure operations, and the intersection between them.',
    date: '2025-03-10',
    time: '09:00 AM - 05:00 PM',
    location: 'Seattle, WA',
    image: 'https://images.pexels.com/photos/7648055/pexels-photo-7648055.jpeg?auto=compress&cs=tinysrgb&w=650',
    organizer: users[4],
    attendees: 842,
    url: '/events/devops-days',
    isAttending: true
  }
];