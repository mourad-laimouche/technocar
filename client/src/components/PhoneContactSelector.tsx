import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PHONE_NUMBERS } from "@/lib/phone";
import { Phone } from "lucide-react";

interface PhoneContactSelectorProps {
  className?: string;
}

export default function PhoneContactSelector({ className }: PhoneContactSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCall = (number: string) => {
    window.location.href = `tel:+${number}`;
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={`bg-black text-white hover:bg-primary ${className}`}>
          <Phone className="mr-2 h-5 w-5" />
          Appeler maintenant
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">Choisissez un numéro</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 pt-4">
          {PHONE_NUMBERS.map((contact, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              onClick={() => handleCall(contact.number)}
              className={`w-full justify-start p-4 group ${
                contact.type === "primary"
                  ? "border-orange-500 bg-orange-50 hover:bg-black hover:text-orange-500"
                  : "hover:bg-black hover:text-orange-500"
              }`}
            >
              <div className="text-left w-full">
                <div className="font-semibold">{contact.label}</div>
                <div className="text-sm text-muted-foreground group-hover:text-orange-400">
                  +{contact.number}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
