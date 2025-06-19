import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import WhatsAppContactSelector from "@/components/whatsapp-contact-selector";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to the server
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };


  return (
    <div className="min-h-screen pt-20">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-<span className="text-primary">nous</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-primary">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  <Button type="submit" className="w-full gold-button">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-primary">Informations de contact</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="text-primary text-xl mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Adresse</h4>
                        <p className="text-muted-foreground">
                          QX33+MP7, Dély Ibrahim<br />
                          Alger, Algérie
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-primary text-xl mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Téléphone</h4>
                        <div className="space-y-1">
                          <div>
                            <a
                              href="tel:+213698997346"
                              className="text-muted-foreground hover:text-primary transition-colors block"
                            >
                              +213 698997346
                            </a>
                          </div>
                          <div>
                            <a
                              href="tel:+213773224651"
                              className="text-muted-foreground hover:text-primary transition-colors block"
                            >
                              +213 773224651
                            </a>
                          </div>
                          <div>
                            <a
                              href="tel:+213540581231"
                              className="text-muted-foreground hover:text-primary transition-colors block"
                            >
                              +213 540581231
                            </a>
                          </div>
                          <div>
                            <a
                              href="tel:+213540758856"
                              className="text-muted-foreground hover:text-primary transition-colors block"
                            >
                              +213 540758856
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="text-primary text-xl mr-4" />
                      <div className="w-full">
                        <h4 className="font-semibold mb-3">WhatsApp</h4>
                        <WhatsAppContactSelector className="w-full" />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="text-primary text-xl mr-4" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a
                          href="mailto:technocars@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          technocars@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">Horaires d'ouverture</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="text-muted-foreground">8h00 - 19h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span className="text-muted-foreground">9h00 - 17h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="text-muted-foreground">10h00 - 16h00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <WhatsAppContactSelector className="w-full" />
                <a href="tel:+213698997346" className="block">
                  <Button className="w-full gold-button flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Appeler maintenant
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
