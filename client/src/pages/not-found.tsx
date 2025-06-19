import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page non trouvée</h2>
        <p className="text-muted-foreground mb-8">
          La page que vous cherchez n'existe pas.
        </p>
        <Link href="/">
          <Button className="gold-button">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
}