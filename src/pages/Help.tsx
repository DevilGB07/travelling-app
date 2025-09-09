import { ArrowLeft, BookOpen, MessageCircle, Phone, AlertTriangle, MessageSquare, FileText, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const helpMenuData = [
  {
    id: 1,
    title: "How to Use App",
    description: "Step-by-step guide / walkthrough",
    icon: BookOpen,
    color: "from-primary to-primary-glow"
  },
  {
    id: 2,
    title: "FAQs",
    description: "Common questions about offline mode, AR, bookings, etc.",
    icon: MessageCircle,
    color: "from-secondary to-secondary/80"
  },
  {
    id: 3,
    title: "Contact Support",
    description: "Chatbot + email/phone support",
    icon: Phone,
    color: "from-accent to-accent/80"
  },
  {
    id: 4,
    title: "Report an Issue",
    description: "Bug reporting or incorrect info flagging",
    icon: AlertTriangle,
    color: "from-primary-glow to-primary"
  },
  {
    id: 5,
    title: "Emergency Contacts",
    description: "Quick-dial for police, ambulance, tourist helplines",
    icon: Phone,
    color: "from-destructive/80 to-destructive",
    isEmergency: true
  },
  {
    id: 6,
    title: "Feedback & Suggestions",
    description: "Users can suggest new features/places",
    icon: MessageSquare,
    color: "from-secondary to-accent"
  },
  {
    id: 7,
    title: "Legal Info",
    description: "Terms of service, privacy policy, licenses",
    icon: Scale,
    color: "from-muted-foreground to-foreground"
  }
];

export default function Help() {
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
            <h1 className="text-xl font-bold">❓ Help & Support</h1>
            <p className="text-white/90 text-sm">Get assistance and support</p>
          </div>
        </div>
      </header>

      {/* Emergency Alert */}
      <div className="p-4">
        <Card className="bg-gradient-to-r from-destructive/10 to-destructive/5 border-destructive/30">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <CardTitle className="text-base text-destructive">Emergency Information</CardTitle>
            </div>
            <CardDescription className="text-sm">
              For immediate assistance, use emergency contacts or call local emergency services
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Help Menu */}
      <div className="px-4 space-y-4">
        {helpMenuData.map((item) => (
          <Card 
            key={item.id} 
            className={`group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20 ${
              item.isEmergency ? 'ring-1 ring-destructive/20' : ''
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start space-x-3">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-md`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className={`text-base group-hover:text-primary transition-colors ${
                    item.isEmergency ? 'text-destructive' : 'text-foreground'
                  }`}>
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
                variant={item.isEmergency ? "destructive" : "ghost"}
                size="sm" 
                className={item.isEmergency 
                  ? "bg-destructive/90 hover:bg-destructive text-white font-medium" 
                  : "text-primary hover:bg-primary/10 hover:text-primary font-medium"
                }
              >
                {item.isEmergency ? 'Emergency →' : 'Learn More →'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}