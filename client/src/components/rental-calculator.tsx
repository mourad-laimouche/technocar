import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Calendar, DollarSign } from "lucide-react";
import { Car } from "@/data/cars";
import WhatsAppSelector from "./whatsapp-selector";
import { formatAlgerianPrice } from "@/lib/utils";

interface RentalCalculatorProps {
  car: Car;
}

export default function RentalCalculator({ car }: RentalCalculatorProps) {
  const [days, setDays] = useState(1);

  // Fonction pour calculer le prix total selon la durée et le véhicule
  const calculateTotalPrice = (numberOfDays: number, carName: string) => {
    const carKey = carName.toLowerCase();
    
    // Tarifs pour 7 jours (en DA selon convention algérienne)
    const weeklyPrices: { [key: string]: number } = {
      'audi a1': 129500,                    // 18500 × 7 = 129500
'seat león': 149800,                 // 21400 × 7 = 149800
'Golf style': 129500, 
'volkswagen golf 8 gtd': 194600,     // 27800 × 7 = 194600
'volkswagen t-roc cabriolet': 194600,

'volkswagen golf 8.5': 229600,       // 32800 × 7 = 229600
'mercedes classe a 23/24': 229600,
'volkswagen passat': 229600,
'porsche cayenne': 229600,
'jeep renegade': 229600,

'volkswagen tiguan nouveau': 290500, // 41500 × 7 = 290500
'audi q3': 290500,
'audi a6': 290500,

'mercedes classe c nouvelle': 335300, // 47900 × 7 = 335300
'mercedes glc': 335300,

'porsche panamera': 370300,          // 52900 × 7 = 370300
'mercedes cls maybach': 370300,

'mercedes gle': 532000,              // 76000 × 7 = 532000
  'mercedes amg gts v8': 800000 // VIP inchangé
    };

    // Tarifs pour 15 jours (en DA selon convention algérienne)
    const fifteenDayPrices: { [key: string]: number } = {
      'audi a1': 255000,    
      'Golf style':  255000,                  // 17000 × 15
'volkswagen golf 8.5': 439500,           // 29300 × 15
'seat león': 279000,                     // 18600 × 15
'volkswagen golf 8 gtd': 375000,         // 25000 × 15
'volkswagen passat': 439500,             // 29300 × 15
'mercedes classe a 23/24': 439500,
'mercedes classe a limousine': 439500,
'porsche cayenne': 439500,
'volkswagen t-roc cabriolet': 375000,    // 25000 × 15
'volkswagen tiguan nouveau': 580500,     // 38700 × 15
'audi q3': 580500,
'audi a6': 580500,
'mercedes classe c nouvelle': 660000,    // 44000 × 15
'mercedes glc': 660000,
'porsche panamera': 741000,              // 49400 × 15
'mercedes cls maybach': 741000,

'mercedes gle': 990000,                  // 66000 × 15
'mercedes amg gts v8': 1500000           // inchangé car VIP
    };

    // Tarifs pour 1 mois (30 jours) - en DA selon convention algérienne
    const monthlyPrices: { [key: string]: number } = {
     'audi a1': 510000,
       'Golf style':  510000,                       // 17000 × 30
'volkswagen golf 8.5': 879000,           // 29300 × 30
'seat león': 558000,                     // 18600 × 30
'volkswagen golf 8 gtd': 750000,         // 25000 × 30
'volkswagen passat': 879000,             // 29300 × 30
'mercedes classe a 23/24': 879000,
'mercedes classe a limousine': 879000,
'porsche cayenne': 879000,
'volkswagen t-roc cabriolet': 750000,    // 25000 × 30
'volkswagen tiguan nouveau': 1161000,    // 38700 × 30
'audi q3': 1161000,
'audi a6': 1161000,
'mercedes classe c nouvelle': 1179000,   // 44000 × 30
'mercedes glc': 1179000,
'porsche panamera': 1482000,             // 49400 × 30
'mercedes cls maybach': 1482000,

'mercedes gle': 1980000,                 // 66000 × 30
'mercedes amg gts v8': 3000000           // inchangé (VIP)

    };

    // Calcul selon la durée
    if (numberOfDays >= 30) {
      // 1 mois ou plus
      const monthlyPrice = monthlyPrices[carKey] || car.pricePerDay * 30;
      const extraDays = numberOfDays - 30;
      const dailyRateForExtra = monthlyPrice / 30;
      return monthlyPrice + (extraDays * dailyRateForExtra);
    } else if (numberOfDays >= 15) {
      // 15-29 jours
      const fifteenDayPrice = fifteenDayPrices[carKey] || car.pricePerDay * 15;
      const extraDays = numberOfDays - 15;
      const dailyRateForExtra = fifteenDayPrice / 15;
      return fifteenDayPrice + (extraDays * dailyRateForExtra);
    } else if (numberOfDays >= 7) {
      // 7-14 jours
      const weeklyPrice = weeklyPrices[carKey] || car.pricePerDay * 7;
      const extraDays = numberOfDays - 7;
      const dailyRateForExtra = weeklyPrice / 7;
      return weeklyPrice + (extraDays * dailyRateForExtra);
    } else {
      // 1-6 jours : prix journalier normal
      return car.pricePerDay * numberOfDays;
    }
  };

  const rawTotalPrice = calculateTotalPrice(days, car.name);
  const totalPrice = Math.round(rawTotalPrice / 10) * 10; // Arrondi au multiple de 1 000 DA le plus proche
  const currentPricePerDay = Math.round((totalPrice / days) / 10) * 10; // Arrondi au multiple de 1 000 DA

  // Fonction pour obtenir le badge de réduction
  const getDiscountBadge = (numberOfDays: number) => {
    if (numberOfDays >= 30) {
      return { text: "TARIF MENSUEL", color: "bg-red-500" };
    } else if (numberOfDays >= 15) {
      return { text: "TARIF 15 JOURS", color: "bg-orange-500" };
    } else if (numberOfDays >= 7) {
      return { text: "TARIF SEMAINE", color: "bg-primary" };
    }
    return null;
  };

  const discountBadge = getDiscountBadge(days);

  const incrementDays = () => {
    setDays(prev => Math.min(prev + 1, 90)); // Maximum 90 jours
  };

  const decrementDays = () => {
    setDays(prev => Math.max(prev - 1, 1)); // Minimum 1 jour
  };

  return (
    <Card className="bg-gradient-to-br from-card to-card/80 border-primary/20 relative overflow-hidden">
      {discountBadge && (
        <div className={`absolute top-0 right-0 ${discountBadge.color} text-white text-xs font-bold px-3 py-1 rounded-bl-lg`}>
          {discountBadge.text}
        </div>
      )}
      
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Titre */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center">
              <Calendar className="mr-2 h-6 w-6" />
              Calculateur de Location
            </h3>
            <p className="text-muted-foreground">Sélectionnez la durée et obtenez le meilleur tarif</p>
          </div>

          {/* Sélecteur de jours */}
          <div className="bg-muted/30 rounded-lg p-6">
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementDays}
                disabled={days <= 1}
                className="h-12 w-12 rounded-full border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Minus className="h-6 w-6" />
              </Button>
              
              <div className="text-center min-w-[120px]">
                <div className="text-4xl font-bold text-primary">{days}</div>
                <div className="text-sm text-muted-foreground">
                  {days === 1 ? 'jour' : 'jours'}
                </div>
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={incrementDays}
                disabled={days >= 90}
                className="h-12 w-12 rounded-full border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Plus className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Détails des prix */}
          <div className="space-y-4">
            {/* Prix par jour */}
            <div className="flex justify-between items-center p-4 bg-muted/20 rounded-lg">
              <span className="text-lg font-medium">Prix par jour</span>
              <div className="text-right">
                {currentPricePerDay !== car.pricePerDay && (
                  <div className="text-sm text-muted-foreground line-through">
                    {formatAlgerianPrice(car.pricePerDay)} DA
                  </div>
                )}
                <div className="text-xl font-bold text-primary">
                  {formatAlgerianPrice(currentPricePerDay)} DA
                </div>
              </div>
            </div>

            {/* Prix total */}
            <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border border-primary/20">
              <span className="text-lg font-semibold flex items-center">
        
                Total <br />({days} {days === 1 ? 'jour' : 'jours'})
              </span>
              <div className="text-3xl font-bold text-primary">
                {formatAlgerianPrice(totalPrice)} DA
              </div>
            </div>

          </div>

          {/* Paliers de prix */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="text-center font-medium mb-3">Tarifs par période :</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className={`p-2 rounded ${days < 7 ? 'bg-primary/20 text-primary font-medium' : ''}`}>
                1-6 jours : Prix journalier
              </div>
              <div className={`p-2 rounded ${days >= 7 && days < 15 ? 'bg-primary/20 text-primary font-medium' : ''}`}>
                7-14 jours : Tarif semaine
              </div>
              <div className={`p-2 rounded ${days >= 15 && days < 30 ? 'bg-primary/20 text-primary font-medium' : ''}`}>
                15-29 jours : Tarif 15 jours
              </div>
              <div className={`p-2 rounded ${days >= 30 ? 'bg-primary/20 text-primary font-medium' : ''}`}>
                30+ jours : Tarif mensuel
              </div>
            </div>
          </div>

          {/* Bouton de réservation */}
          <WhatsAppSelector 
            carName={`${car.name} - ${days} ${days === 1 ? 'jour' : 'jours'} (${totalPrice.toLocaleString()} DA)`}
            className="w-full text-lg py-4 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
          />
        </div>
      </CardContent>
    </Card>
  );
}