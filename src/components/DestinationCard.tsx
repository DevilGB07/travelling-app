import { MapPin, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DestinationCardProps {
  name: string;
  location: string;
  rating: number;
  image: string;
  distance: string;
}

export function DestinationCard({ name, location, rating, image, distance }: DestinationCardProps) {
  return (
    <Card className="overflow-hidden bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 active:scale-95">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-32 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="h-3 w-3 text-yellow-400 fill-current" />
          <span className="text-xs font-medium text-white">{rating}</span>
        </div>
        <div className="absolute bottom-2 left-2 bg-primary/90 backdrop-blur-sm rounded-lg px-2 py-1">
          <span className="text-xs font-medium text-primary-foreground">{distance}</span>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-foreground mb-1">{name}</h3>
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span className="text-xs">{location}</span>
        </div>
      </div>
    </Card>
  );
}