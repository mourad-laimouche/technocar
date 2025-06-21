import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Phone, PhoneCall } from "lucide-react";

const PHONE_NUMBERS = [
  { number: "213698997346" },
  { number: "213773224651" },
  { number: "213540581231" },
  { number: "213540758856" },
];

interface PhoneContactSelectorProps {
  className?: string;
}

export default function PhoneContactSelector({ className }: PhoneContactSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNumberSelect = (phoneNumber: string) => {
    window.location.href = `tel:+${phoneNumber}`;
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className={`bg-primary text-white hover:text-black hover:bg-white transition font-semibold ${className}`}
        >
          <Phone className="w-5 h-5 mr-2" />
          Appeler maintenant
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Contactez TechnoCars
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 pt-4">
          <p className="text-center text-muted-foreground text-sm mb-6">
            Choisissez un numéro pour nous contacter
          </p>

          {PHONE_NUMBERS.map((contact, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className="w-full h-auto p-4 justify-start group hover:border-primary hover:bg-primary transition-all"
              onClick={() => handleNumberSelect(contact.number)}
            >
              <div className="flex items-center space-x-3 w-full">
                <div className="p-2 rounded-full bg-primary text-white group-hover:bg-white group-hover:text-primary transition">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-gray-500 group-hover:text-white transition">
                    +{contact.number}
                  </div>
                </div>
              </div>
            </Button>
          ))}

          <div className="pt-4 border-t">
            <p className="text-xs text-center text-gray-500">
              Vous serez redirigé vers l'application d'appel de votre appareil
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}