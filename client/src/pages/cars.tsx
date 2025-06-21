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
        return 0; // aucun tri
    }
  });

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

            {/* ✅ Menu de tri */}
            <div className="mt-6">
              <label className="mr-2 font-medium">Trier par :</label>
              <select
                className="border rounded px-3 py-2 text-sm"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Aucun</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="category">Catégorie (A → Z)</option>
              </select>
            </div>
          </div>

          {/* ✅ Liste triée */}
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
