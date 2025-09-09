import { ArrowLeft, Zap, Calendar, DollarSign, Gamepad2, MessageSquare, Shield, ShoppingBag, Leaf, Users, Receipt } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const optionsData = [
  {
    id: 1,
    title: "Personalized Tour Recommendations",
    description: "AI-based suggestions based on user interests (history, food, adventure, culture)",
    icon: Zap,
    color: "from-primary to-primary-glow"
  },
  {
    id: 2,
    title: "Local Event Updates",
    description: "Festivals, exhibitions, or cultural programs happening nearby",
    icon: Calendar,
    color: "from-secondary to-secondary/80"
  },
  {
    id: 3,
    title: "Currency & Expense Tracker",
    description: "Live currency conversion and budgeting tool for tourists",
    icon: DollarSign,
    color: "from-accent to-accent/80"
  },
  {
    id: 4,
    title: "Interactive Quizzes & Challenges",
    description: "Fun facts, trivia, or AR-based treasure hunts to gamify sightseeing",
    icon: Gamepad2,
    color: "from-primary-glow to-primary"
  },
  {
    id: 5,
    title: "Offline Language Translator",
    description: "Quick text/voice translations for conversations with locals",
    icon: MessageSquare,
    color: "from-muted-foreground to-foreground"
  },
  {
    id: 6,
    title: "Safety Alerts & Weather Updates",
    description: "Real-time weather warnings, crowd alerts, or travel advisories",
    icon: Shield,
    color: "from-destructive/80 to-destructive"
  },
  {
    id: 7,
    title: "Souvenir & Local Shopping Guide",
    description: "Curated info on authentic local products and shops",
    icon: ShoppingBag,
    color: "from-secondary to-accent"
  },
  {
    id: 8,
    title: "Eco-Friendly Travel Mode",
    description: "Highlight sustainable options (cycling routes, eco-hotels, green tours)",
    icon: Leaf,
    color: "from-primary/60 to-primary-glow"
  },
  {
    id: 9,
    title: "Group Travel & Social Features",
    description: "Connect with other tourists, share itineraries, or travel together",
    icon: Users,
    color: "from-accent to-secondary"
  },
  {
    id: 10,
    title: "Smart Expense Sharing",
    description: "Split bills and track shared costs if traveling with friends",
    icon: Receipt,
    color: "from-primary-glow to-accent"
  }
];

export default function Options() {
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
            <h1 className="text-xl font-bold">Tourism Options</h1>
            <p className="text-white/90 text-sm">Explore amazing features for your journey</p>
          </div>
        </div>
      </header>

      {/* Options Grid */}
      <div className="p-4 space-y-4">
        {optionsData.map((option) => (
          <Card 
            key={option.id} 
            className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start space-x-3">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${option.color} shadow-md`}>
                  <option.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base text-foreground group-hover:text-primary transition-colors">
                    {option.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-1 text-muted-foreground">
                    {option.description}
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
                Explore Feature →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}