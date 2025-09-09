import { Home, Settings, HelpCircle, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { id: 'home', icon: Home, label: 'Home', path: '/' },
  { id: 'options', icon: MoreHorizontal, label: 'Options', path: '/options' },
  { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
  { id: 'help', icon: HelpCircle, label: 'Help', path: '/help' },
];

export function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200",
                "hover:bg-muted active:scale-95",
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}