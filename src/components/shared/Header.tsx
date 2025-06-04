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
    <header className="hidden md:flex items-center w-full h-20 bg-sidebar text-sidebar-foreground px-6 py-4 shadow-xl border-b border-sidebar-border relative z-20">
      {/* Home / App Title or Logo - Left aligned */}
      <Link
        to="/dashboard"
        className="flex items-center space-x-3 group mr-auto"
      >
        <Home className="size-8 group-hover:scale-110 group-hover:text-sidebar-accent transition-transform duration-200 " />
        <span className="font-heading text-2xl font-bold tracking-tight hidden lg:inline group-hover:scale-110 group-hover:text-sidebar-accent">
          Home
        </span>
      </Link>

      {/* Navigation Links - Centered and Spaced Out */}
      <nav className="flex-1 flex justify-center gap-x-8 lg:gap-x-12">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`
              flex flex-col items-center justify-center text-center
              group text-base font-body font-medium transition-colors duration-200
              py-2 px-3 rounded-md relative overflow-hidden
              
              ${
                // Active state: text is accent, background subtle, and full background fill for `before`
                location.pathname === item.path
                  ? 'text-sidebar-accent font-semibold' // Active text is vibrant goldenrod
                  : 'text-sidebar-foreground hover:text-sidebar-accent' // Default text is white, turns goldenrod on hover
              }

              // Subtle hover/active background overlay (white with low opacity)
              before:absolute before:inset-0 before:origin-top-left before:scale-x-0 before:bg-sidebar-primary/10 before:transition-transform before:duration-300 before:ease-out
              ${
                location.pathname === item.path
                  ? 'before:scale-x-100'
                  : 'group-hover:before:scale-x-100'
              }
            `}
          >
            {/* Active state indicator - vibrant goldenrod underline */}
            {location.pathname === item.path && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sidebar-accent animate-fade-in-up"></span>
            )}

            {/* Icons should inherit parent text color, or be explicitly set to primary-foreground then accent on hover/active */}
            <item.icon className="size-6 mb-1 group-hover:scale-105 transition-transform duration-200" />
            <span className="whitespace-nowrap">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Profile Icon - Right aligned */}
      <Link to="/profile" className="flex items-center space-x-2 group ml-auto">
        <CircleUser className="size-8  group-hover:scale-110 group-hover:text-sidebar-accent transition-transform duration-200" />
        <span className="font-body text-lg font-medium hidden lg:inline text-sidebar-foreground group-hover:scale-110 group-hover:text-sidebar-accent transition-colors duration-200">
          My Profile
        </span>
      </Link>
    </header>
  );
};

export default Header;
