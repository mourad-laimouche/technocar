import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { WHATSAPP_NUMBERS, createWhatsAppBookingLink } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";

interface WhatsAppSelectorProps {
  carName: string;
  className?: string;
}

export default function WhatsAppSelector({ carName, className }: WhatsAppSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNumberSelect = (phoneNumber: string) => {
    const whatsappUrl = createWhatsAppBookingLink(carName, phoneNumber);
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg" 
          className={`bg-green-600 hover:bg-green-700 text-white ${className}`}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Réserver Maintenant
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Choisissez votre contact TechnoCars
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3 pt-4">
          <p className="text-center text-muted-foreground mb-6">
            Sélectionnez un numéro pour réserver votre <strong>{carName}</strong>
           <br />
          </p>
          
          {WHATSAPP_NUMBERS.map((contact, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className={`w-full h-auto p-4 justify-start group transition-all ${
                contact.type === 'primary' 
                  ? 'border-green-500 bg-green-50 hover:bg-green-100' 
                  : 'hover:bg-green-50 hover:border-green-500'
              }`}
              onClick={() => handleNumberSelect(contact.number)}
            >
              <div className="flex items-center space-x-3 w-full">
                <div className={`p-2 rounded-full ${
                  contact.type === 'primary' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-green-100 text-green-600'
                }`}>
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left flex-1">
                  <div className={`font-semibold transition-colors ${
                    contact.type === 'primary' 
                      ? 'text-green-700 group-hover:text-green-800' 
                      : 'text-gray-500 group-hover:text-gray-900'
                  }`}>
                    {contact.label}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">+{contact.number}</div>
                </div>
                <MessageCircle className={`w-5 h-5 ${
                  contact.type === 'primary' ? 'text-green-600' : 'text-green-500'
                }`} />
              </div>
            </Button>
          ))}
          
          <div className="pt-4 border-t">
            <p className="text-xs text-center text-gray-500">
              Vous serez redirigé vers WhatsApp avec un message pré-rempli
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}