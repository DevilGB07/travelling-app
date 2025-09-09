import { ArrowLeft, Languages, Download, Bell, Palette, Shield, DollarSign, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";

const settingsData = [
  {
    id: 1,
    title: "Language & Voice",
    description: "Change app language, voice type, narration speed",
    icon: Languages,
    color: "from-primary to-primary-glow",
    hasToggle: false
  },
  {
    id: 2,
    title: "Offline Downloads",
    description: "Manage downloaded guides/maps",
    icon: Download,
    color: "from-secondary to-secondary/80",
    hasToggle: false
  },
  {
    id: 3,
    title: "Notification Settings",
    description: "Control reminders (events nearby, itinerary alerts, weather warnings)",
    icon: Bell,
    color: "from-accent to-accent/80",
    hasToggle: true
  },
  {
    id: 4,
    title: "Theme & Accessibility",
    description: "Dark mode, text size, contrast, screen reader support",
    icon: Palette,
    color: "from-primary-glow to-primary",
    hasToggle: true
  },
  {
    id: 5,
    title: "Data & Privacy",
    description: "Manage permissions (location, camera, mic), clear cache, delete account",
    icon: Shield,
    color: "from-muted-foreground to-foreground",
    hasToggle: false
  },
  {
    id: 6,
    title: "Currency & Unit Preference",
    description: "Choose INR/USD/EUR, metric vs. imperial units",
    icon: DollarSign,
    color: "from-secondary to-accent",
    hasToggle: false
  },
  {
    id: 7,
    title: "Security",
    description: "PIN/biometric lock for profile and bookings",
    icon: Lock,
    color: "from-primary/60 to-primary-glow",
    hasToggle: true
  }
];

export default function Settings() {
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
            <h1 className="text-xl font-bold">🔧 Settings</h1>
            <p className="text-white/90 text-sm">Customize your app experience</p>
          </div>
        </div>
      </header>

      {/* Settings List */}
      <div className="p-4 space-y-4">
        {settingsData.map((setting) => (
          <Card 
            key={setting.id} 
            className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${setting.color} shadow-md`}>
                    <setting.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base text-foreground group-hover:text-primary transition-colors">
                      {setting.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-1 text-muted-foreground">
                      {setting.description}
                    </CardDescription>
                  </div>
                </div>
                {setting.hasToggle && (
                  <Switch className="mt-2" />
                )}
              </div>
            </CardHeader>
            {!setting.hasToggle && (
              <CardContent className="pt-0">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary hover:bg-primary/10 hover:text-primary font-medium"
                >
                  Configure →
                </Button>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}