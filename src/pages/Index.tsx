import { ProfileHeader } from "@/components/ProfileHeader";
import { HeroSection } from "@/components/HeroSection";
import { DestinationCard } from "@/components/DestinationCard";
import { BottomNavigation } from "@/components/BottomNavigation";
import destination1 from "@/assets/destination-1.jpg";
import destination2 from "@/assets/destination-2.jpg";
import destination3 from "@/assets/destination-3.jpg";

const recommendedPlaces = [
  {
    id: 1,
    name: "Jaipur City Palace",
    location: "Rajasthan",
    rating: 4.8,
    image: destination1,
    distance: "2.5 km"
  },
  {
    id: 2,
    name: "Kerala Backwaters",
    location: "Alleppey",
    rating: 4.9,
    image: destination2,
    distance: "15 km"
  },
  {
    id: 3,
    name: "Goa Beaches",
    location: "North Goa",
    rating: 4.7,
    image: destination3,
    distance: "8 km"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <ProfileHeader />
      <HeroSection />
      
      <section className="px-4 mt-8">
        <h3 className="text-xl font-bold text-foreground mb-4">Recommended Places</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedPlaces.map((place) => (
            <DestinationCard
              key={place.id}
              name={place.name}
              location={place.location}
              rating={place.rating}
              image={place.image}
              distance={place.distance}
            />
          ))}
        </div>
      </section>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
