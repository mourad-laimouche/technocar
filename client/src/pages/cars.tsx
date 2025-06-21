import CarCard from "@/components/car-card";
import { cars } from "@/data/cars";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc" | "category" | "power-desc" | "power-asc";
export default function Cars() {
  return (
    <div className="min-h-screen pt-20">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre <span className="text-primary">Flotte</span> Complète
            </h1>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Découvrez tous nos véhicules d'exception disponibles à la location
            </p>

            {/* Options de tri */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Trier par :
                </span>
                <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Choisir un tri" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Par défaut</SelectItem>
                    <SelectItem value="price-asc">Prix croissant</SelectItem>
                    <SelectItem value="price-desc">Prix décroissant</SelectItem>
                    <SelectItem value="power-desc">Plus puissant</SelectItem>
                    <SelectItem value="power-asc">Moins puissant</SelectItem>
                    <SelectItem value="name-asc">Nom A-Z</SelectItem>
                    <SelectItem value="category">Catégorie</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Compteur de résultats */}
            <div className="text-sm text-muted-foreground mb-8">
              {sortedCars.length} véhicule{sortedCars.length > 1 ? 's' : ''} disponible{sortedCars.length > 1 ? 's' : ''}
            </div>
          </div>

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
