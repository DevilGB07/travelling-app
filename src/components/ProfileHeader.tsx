import { User, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function ProfileHeader() {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between p-4 bg-gradient-hero text-primary-foreground shadow-elegant">
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-primary-foreground hover:bg-white/20"
          onClick={() => navigate("/profile")}
        >
          <Avatar className="h-10 w-10 border-2 border-white/30">
            <AvatarImage src="" />
            <AvatarFallback className="bg-white/20 text-primary-foreground font-semibold">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-bold text-lg">Welcome to India</h1>
          <div className="flex items-center gap-1 text-primary-foreground/90">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Mumbai, Maharashtra</span>
          </div>
        </div>
      </div>
    </header>
  );
}