import { useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CarGallery from "@/components/car-gallery";
import Viewer360 from "@/components/360-viewer";
import RentalCalculator from "@/components/rental-calculator";
import { getCarBySlug } from "@/data/cars";
import { ArrowLeft, CheckCircle, Eye, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { formatAlgerianPrice } from "@/lib/utils";

export default function CarDetail() {
  const { slug } = useParams();
  const car = getCarBySlug(slug || "");
  const [viewMode, setViewMode] = useState<'gallery' | '360'>('gallery');

  if (!car) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Véhicule non trouvé</h1>
          <Link href="/voitures">
            <Button>Retour aux voitures</Button>
          </Link>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen pt-20">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/voitures" className="inline-flex items-center text-primary hover:text-accent transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux voitures
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery with 3D Toggle */}
            <div>
              {/* View Mode Toggle */}
              <div className="flex mb-6 bg-card rounded-lg p-1">
                <button
                  onClick={() => setViewMode('gallery')}
                  className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center ${
                    viewMode === 'gallery' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Galerie Photos
                </button>
             {/* View Mode Toggle *<button
                  onClick={() => setViewMode('360')}
                  className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center ${
                    viewMode === '360' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Vue 360°
                </button> */} 
              </div>

              {/* Dynamic Content */}
              {viewMode === 'gallery' ? (
                <CarGallery car={car} />
              ) : (
                <Viewer360 car={car} />
              )}
            </div>

            {/* Car Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{car.name}</h1>
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold text-primary mr-4">{formatAlgerianPrice(car.pricePerDay)} DA</span>
                  <span className="text-muted-foreground text-xl">à partir de</span>
                </div>
              </div>

              {/* Rental Calculator */}
              <RentalCalculator car={car} />

              {/* Description */}
              <Card className="bg-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{car.description}</p>
                </CardContent>
              </Card>

              {/* Technical Specifications */}
              <Card className="bg-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Caractéristiques techniques</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <span className="text-primary mr-3">⚙️</span>
                      <div>
                        <p className="font-semibold">Transmission</p>
                        <p className="text-muted-foreground">{car.specifications.transmission}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary mr-3">⛽</span>
                      <div>
                        <p className="font-semibold">Carburant</p>
                        <p className="text-muted-foreground">{car.specifications.fuel}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary mr-3">👥</span>
                      <div>
                        <p className="font-semibold">Places</p>
                        <p className="text-muted-foreground">{car.specifications.seats} places</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary mr-3">🧳</span>
                      <div>
                        <p className="font-semibold">Bagages</p>
                        <p className="text-muted-foreground">{car.specifications.luggage}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="bg-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Équipements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="text-primary mr-3 h-4 w-4" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
