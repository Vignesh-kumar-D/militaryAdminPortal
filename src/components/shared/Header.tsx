// src/components/Header.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  User,
  HeartPulse,
  ClipboardList,
  HelpCircle,
  Calendar,
  CircleUser,
  // Adding a Menu icon for potential future use (e.g. mobile offcanvas)
} from 'lucide-react';

// Define your navigation items
const navItems = [
  { name: 'Personal Details', path: '/personal', icon: User },
  { name: 'Medical Record', path: '/medical', icon: HeartPulse },
  { name: 'Parade State', path: '/parade', icon: ClipboardList },
  { name: 'Query', path: '/query', icon: HelpCircle },
  { name: 'Schedule', path: '/schedule', icon: Calendar },
];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="hidden md:flex items-center justify-between w-full h-8rem bg-primary text-primary-foreground px-4rem shadow-lg border-b border-primary-foreground/20">
      {/* Home / App Title */}
      <Link to="/dashboard" className="flex items-center space-x-1.5rem group">
        <Home className="size-3.5rem group-hover:scale-110 transition-transform duration-200" />
      </Link>

      {/* Navigation Links */}
      <nav className="flex  justify-between ">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center group text-lg font-body transition-colors duration-200 py-1rem px-2rem rounded-md
              ${
                location.pathname === item.path
                  ? 'text-accent font-semibold bg-primary-foreground/10' // More prominent active state
                  : 'text-primary-foreground hover:text-accent-foreground hover:bg-primary-foreground/5'
              }
            `}
          >
            <item.icon className="size-2.5rem mb-0.5rem group-hover:scale-110 transition-transform duration-200" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Profile Icon */}
      <Link to="/profile" className="flex items-center space-x-1rem group">
        <CircleUser className="size-3.5rem group-hover:scale-110 transition-transform duration-200" />
        <span className="font-body text-xl hidden lg:inline group-hover:text-accent-foreground transition-colors duration-200">
          Profile
        </span>
      </Link>
    </header>
  );
};

export default Header;
