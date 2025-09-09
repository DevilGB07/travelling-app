import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-destination.jpg";

export function HeroSection() {
  return (
    <section className="relative h-64 overflow-hidden rounded-2xl mx-4 mt-4 shadow-glow">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Discover India</h2>
        <p className="text-white/90 text-sm mb-4">Explore incredible destinations near you</p>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search destinations..." 
              className="pl-10 bg-white/90 backdrop-blur-sm border-white/20"
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90 shadow-lg">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}