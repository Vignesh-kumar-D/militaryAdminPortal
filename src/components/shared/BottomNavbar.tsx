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
  { name: 'Details', path: '/personal-details', icon: User },
  { name: 'Medical', path: '/medical', icon: HeartPulse },
  { name: 'Parade', path: '/parade', icon: ClipboardList },
  { name: 'Query', path: '/query', icon: HelpCircle },
  { name: 'Schedule', path: '/schedule', icon: Calendar },
  { name: 'Profile', path: '/profile', icon: CircleUser },
];

const BottomNavbar: React.FC = () => {
  const location = useLocation();

  return (
    <footer className="fixed bottom-0 left-0 w-full md:hidden bg-primary text-primary-foreground border-t border-border shadow-2xl z-50 py-1.2rem">
      <nav className="flex justify-around items-center h-full px-0.5rem">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              // Added 'group' class for hover effects on children
              className={`flex flex-col items-center flex-1 text-center space-y-0.5rem p-0.8rem rounded-md relative overflow-hidden
              transition-colors duration-200 group
              
              ${
                // Active state: text is vibrant, background subtle fill
                isActive
                  ? 'text-sidebar-accent font-semibold' // Active text is vibrant goldenrod (using sidebar-accent as reference)
                  : 'text-muted-foreground hover:text-sidebar-accent' // Default text is muted, turns goldenrod on hover
              }

              // Subtle hover/active background overlay (white with low opacity)
              before:absolute before:inset-0 before:origin-top-left before:scale-x-0 before:bg-primary/10 before:transition-transform before:duration-300 before:ease-out
              ${
                isActive
                  ? 'before:scale-x-100' // Active state always has background fill
                  : 'group-hover:before:scale-x-100' // Hover state also has background fill
              }
            `}
            >
              {/* Active state indicator - vibrant goldenrod underline (optional, if you want this on mobile too) */}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sidebar-accent animate-fade-in-up"></span>
              )}

              {/* Icon */}
              <item.icon className="size-2.5rem transition-transform duration-200 group-hover:scale-105" />
              {/* Text */}
              <span className="text-xs font-body leading-tight mt-0.5rem whitespace-nowrap">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};

export default BottomNavbar;
