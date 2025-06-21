import CarCard from "@/components/car-card";
import { cars as originalCars } from "@/data/cars";
import { useState } from "react";

export default function Cars() {
  const [sortOption, setSortOption] = useState("default");

  const sortedCars = [...originalCars].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.pricePerDay - b.pricePerDay;
      case "price-desc":
        return b.pricePerDay - a.pricePerDay;
      case "category":
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen pt-20 bg-black text-white">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre <span className="text-primary">Flotte</span> Complète
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez tous nos véhicules d'exception disponibles à la location
            </p>

            {/* 🎨 Sélecteur de tri stylisé */}
            <div className="mt-8 flex justify-center">
              <label className="mr-3 font-semibold text-white text-lg">
                Trier par :
              </label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-primary text-black font-medium px-4 py-2 rounded-lg shadow-md border-none focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                style={{
                  backgroundColor: "hsl(30, 100%, 50%)", // couleur primary
                }}
              >
                <option value="default">Aucun</option>
                <option value="price-asc">Prix Croissant</option>
                <option value="price-desc">Prix Décroissant</option>
                <option value="category">Type de véhicule</option>
              </select>
            </div>
          </div>

          {/* Liste triée */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
