"use client";

import { useState } from "react";
import CarCard from "@/components/car-card";
import { cars as allCars } from "@/data/cars";

export default function Cars() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "Toutes les catégories",
    ...Array.from(new Set(allCars.map((car) => car.category))),
  ];

  const filteredCars =
    selectedCategory && selectedCategory !== "Toutes les catégories"
      ? allCars.filter((car) => car.category === selectedCategory)
      : allCars;

  return (
    <div className="min-h-screen pt-20">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre <span className="text-primary">Flotte</span> Complète
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Découvrez tous nos véhicules d'exception disponibles à la location
            </p>

            {/* Menu déroulant personnalisé */}
            <div className="relative inline-block text-left">
              <button
                onClick={() =>
                  setSelectedCategory((prev) =>
                    prev === null ? "Toutes les catégories" : null
                  )
                }
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow transition hover:opacity-90 focus:outline-none"
              >
                {selectedCategory || "Filtrer par catégorie"}
                <span className="ml-2">▼</span>
              </button>

              {/* Menu dropdown */}
              {selectedCategory !== null && (
                <div className="absolute mt-2 w-60 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(
                            category === "Toutes les catégories" ? null : category
                          );
                        }}
                        className="block w-full text-left px-4 py-2 text-sm transition hover:bg-black hover:text-[hsl(var(--primary))]"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
