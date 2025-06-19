import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car } from "@/data/cars";
import { Link } from "wouter";
import { formatAlgerianPrice } from "@/lib/utils";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <Card className="bg-card rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {formatAlgerianPrice(car.pricePerDay)} DA/jour
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
        <p className="text-muted-foreground mb-4">{car.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold text-lg">{car.pricePerDay.toLocaleString()} DA/jour</span>
          <Link href={`/voiture/${car.slug}`}>
            <Button className="gold-button">
              Détails
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
