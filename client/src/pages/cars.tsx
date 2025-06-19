import CarCard from "@/components/car-card";
import { cars } from "@/data/cars";

export default function Cars() {
  return (
    <div className="min-h-screen pt-20">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre <span className="text-primary">Flotte</span> Complète
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez tous nos véhicules d'exception disponibles à la location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
