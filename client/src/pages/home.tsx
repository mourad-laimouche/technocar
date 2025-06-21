import { Button } from "@/components/ui/button";
import CarCard from "@/components/car-card";
import { getFeaturedCars } from "@/data/cars";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const featuredCars = getFeaturedCars();

  const scrollToCars = () => {
    const element = document.getElementById('featured-cars');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/bg.png')`
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Louez une voiture <span className="text-primary">de rêve</span> aujourd'hui
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            Découvrez notre collection exclusive de véhicules premium pour vos déplacements d'exception
          </p>
          <Button onClick={scrollToCars} className="gold-button text-lg px-8 py-4">
            <span>Voir nos modèles</span>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary text-2xl" />
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="featured-cars" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="text-primary">Modèles</span> Premium
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une sélection rigoureuse de véhicules d'exception pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/voitures">
              <Button variant="outline" className="gold-outline-button px-8 py-3 font-semibold">
                Voir tout notre parc
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir <span className="text-primary">TechnoCars</span> ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une expérience de location premium avec un service d'exception
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-card w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl text-primary group-hover:text-black">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Assurance Premium</h3>
              <p className="text-muted-foreground">
                Tous nos véhicules sont couverts par une assurance tous risques pour votre tranquillité d'esprit.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-card w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl text-primary group-hover:text-black">🕐</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Disponible 24/7</h3>
              <p className="text-muted-foreground">
                Notre service client est à votre disposition à tout moment pour répondre à vos besoins.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-card w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl text-primary group-hover:text-black">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Véhicules Premium</h3>
              <p className="text-muted-foreground">
                Une sélection rigoureuse de véhicules haut de gamme, régulièrement entretenus et révisés.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
