// src/components/BottomNavbar.tsx
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

// Define your navigation items (same as Header for consistency)
const navItems = [
  { name: 'Home', path: '/dashboard', icon: Home }, // Home moved here for mobile nav
  { name: 'Details', path: '/personal', icon: User },
  { name: 'Medical', path: '/medical', icon: HeartPulse },
  { name: 'Parade', path: '/parade', icon: ClipboardList },
  { name: 'Query', path: '/query', icon: HelpCircle },
  { name: 'Schedule', path: '/schedule', icon: Calendar },
  { name: 'Profile', path: '/profile', icon: CircleUser },
];

const BottomNavbar: React.FC = () => {
  const location = useLocation();

  return (
    <footer className="fixed bottom-0 left-0 w-full md:hidden bg-card border-t border-border shadow-2xl z-50 py-1.2rem">
      <nav className="flex justify-around items-center h-full px-0.5rem">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center flex-1 text-center space-y-0.5rem p-0.8rem rounded-md transition-colors duration-200
              ${
                location.pathname === item.path
                  ? 'text-primary font-semibold bg-primary/10' // Stronger active state for mobile
                  : 'text-muted-foreground hover:text-foreground hover:bg-card-foreground/5'
              }
            `}
          >
            <item.icon className="size-2.5rem" />
            <span className="text-xs font-body leading-tight mt-0.5rem">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default BottomNavbar;
