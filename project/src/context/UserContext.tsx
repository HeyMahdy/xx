import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';
import { currentUser } from '../data/mockData';

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // In a real app, we would check for a token and validate it
    // For this demo, we'll simulate being logged in
    return currentUser;
  });

  const isAuthenticated = !!user;

  const login = async (username: string, password: string): Promise<boolean> => {
    // This would be an API call in a real app
    // For this demo, we'll simulate a successful login if username/password aren't empty
    if (username && password) {
      setUser(currentUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};