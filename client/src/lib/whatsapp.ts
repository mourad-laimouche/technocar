// Numéros WhatsApp TechnoCars
export const WHATSAPP_NUMBERS = [
  { number: "213698997346", label: "Principal - Réservations", type: "primary" },
  { number: "213773224651", label: "Numéro secondaire", type: "secondary" },
  { number: "213540581231", label: "Numéro secondaire", type: "secondary" },
  { number: "213540758856", label: "Numéro secondaire", type: "secondary" }
];

export const createWhatsAppBookingLink = (carName: string, phoneNumber: string): string => {
  const message = `Je souhaite réserver la voiture ${carName}`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const createWhatsAppContactLink = (message: string, phoneNumber: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
