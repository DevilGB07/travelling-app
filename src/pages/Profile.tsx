import { ArrowLeft, User, Heart, Calendar, Bookmark, Trophy, History, Link } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const profileMenuData = [
  {
    id: 1,
    title: "User Info",
    description: "Name, email, nationality, profile picture",
    icon: User,
    color: "from-primary to-primary-glow"
  },
  {
    id: 2,
    title: "Travel Preferences",
    description: "Favorite categories (heritage, food, adventure, shopping)",
    icon: Heart,
    color: "from-secondary to-secondary/80"
  },
  {
    id: 3,
    title: "Saved Itineraries",
    description: "View and edit trip plans",
    icon: Calendar,
    color: "from-accent to-accent/80"
  },
  {
    id: 4,
    title: "Bookmarks & Favorites",
    description: "Saved tourist spots, hotels, restaurants",
    icon: Bookmark,
    color: "from-primary-glow to-primary"
  },
  {
    id: 5,
    title: "Badges & Achievements",
    description: "Gamification rewards (e.g., 'Visited 5 monuments')",
    icon: Trophy,
    color: "from-muted-foreground to-foreground"
  },
  {
    id: 6,
    title: "Travel History",
    description: "Past trips, reviews posted, tickets booked",
    icon: History,
    color: "from-secondary to-accent"
  },
  {
    id: 7,
    title: "Linked Accounts",
    description: "Google, Facebook, Apple, or email login",
    icon: Link,
    color: "from-primary/60 to-primary-glow"
  }
];

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-primary p-4 text-white">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">👤 Profile</h1>
            <p className="text-white/90 text-sm">Manage your travel profile</p>
          </div>
        </div>
      </header>

      {/* Profile Summary */}
      <div className="p-4">
        <Card className="mb-4 border-border/50 bg-gradient-to-br from-card to-card/80">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16 border-2 border-primary/20">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground">John Doe</h2>
                <p className="text-muted-foreground">Travel Enthusiast</p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">Explorer</Badge>
                  <Badge variant="outline" className="text-xs">Heritage Lover</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Profile Menu */}
      <div className="px-4 space-y-4">
        {profileMenuData.map((item) => (
          <Card 
            key={item.id} 
            className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start space-x-3">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-md`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-1 text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary hover:bg-primary/10 hover:text-primary font-medium"
              >
                Manage →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}