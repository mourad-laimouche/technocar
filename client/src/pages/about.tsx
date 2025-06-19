import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de <span className="text-primary">TechnoCars</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Votre partenaire de confiance pour la location de véhicules de prestige à Alger
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Notre équipe professionnelle"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Notre Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Chez TechnoCars, nous nous engageons à offrir une expérience de location exceptionnelle
                avec une flotte de véhicules haut de gamme parfaitement entretenus. Basés à Dély Ibrahim, Alger,
                notre équipe passionnée met tout en œuvre pour répondre à vos besoins et dépasser vos attentes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="text-primary text-xl mr-3">🏆</span>
                  <span>Plus de 10 ans d'expérience</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary text-xl mr-3">🚗</span>
                  <span>Flotte premium entretenue</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary text-xl mr-3">🎧</span>
                  <span>Service client 24/7</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary text-xl mr-3">🛡️</span>
                  <span>Assurance complète incluse</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h4 className="text-xl font-semibold mb-3">Excellence</h4>
                <p className="text-muted-foreground">
                  Nous sélectionnons uniquement les meilleurs véhicules pour garantir
                  une expérience de conduite exceptionnelle.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h4 className="text-xl font-semibold mb-3">Confiance</h4>
                <p className="text-muted-foreground">
                  Nos clients nous font confiance pour leurs moments les plus importants,
                  et nous honorons cette confiance chaque jour.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold mb-3">Innovation</h4>
                <p className="text-muted-foreground">
                  Nous adoptons les dernières technologies pour simplifier
                  et améliorer votre expérience de location.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <Card className="bg-card">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Mission</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Transformer chaque trajet en une expérience exceptionnelle grâce à notre flotte
                de véhicules d'exception et notre service client irréprochable. Nous croyons que
                la mobilité de luxe doit être accessible et que chaque client mérite le meilleur.
              </p>
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Véhicules disponibles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
