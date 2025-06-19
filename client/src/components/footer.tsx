import { Car, Facebook, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo.png" 
                alt="Logo de l'entreprise"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              Votre partenaire de confiance pour la location de véhicules premium.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwib1pGs2e-NAxWpBdsEHeWiHZkQFnoECFgQAQ&url=https%3A%2F%2Fwww.facebook.com%2Fgroups%2Fkeeycar%2Fposts%2F4154488298204743%2F&usg=AOvVaw0WZ6bU79dl2lrxhTqDsemN&opi=89978449"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/techno_cars1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@location_voiture_techno?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <SiTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/voitures" className="text-muted-foreground hover:text-primary transition-colors">
                  Notre flotte
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📞 +213 698997346</p>
              <p>✉️ technocars@gmail.com</p>
              <p>📍 Dély Ibrahim, Alger</p>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 TechnoCars. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
