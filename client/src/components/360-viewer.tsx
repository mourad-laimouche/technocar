/*import { useState } from 'react';
import { Car } from '@/data/cars';
import { RotateCcw, Eye, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Viewer360Props {
  car: Car;
}

export default function Viewer360({ car }: Viewer360Props) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
      {/* Header *//*}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
          <RotateCcw className="h-4 w-4 text-primary animate-spin" />
          <span className="text-white font-medium">Vue 360°</span>
        </div>
      </div>

      {/* Status Badge *//*}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-lg px-3 py-2">
          <span className="text-orange-300 text-sm font-medium">En développement</span>
        </div>
      </div>

      {/* Main Content Area *//*}
      <div className="flex items-center justify-center h-full">
        <Card className="bg-black/30 backdrop-blur-sm border-primary/20 max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="relative inline-block">
                <Eye className="h-16 w-16 text-primary mx-auto mb-4" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">360°</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">
              Vue 360° Interactive
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Explorez le <span className="text-primary font-semibold">{car.name}</span> sous tous les angles avec notre viewer 360° immersif. 
              Fonctionnalité en cours de développement.
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <RotateCcw className="h-4 w-4" />
                <span>Rotation complète 360°</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <Settings className="h-4 w-4" />
                <span>Contrôles interactifs</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <Eye className="h-4 w-4" />
                <span>Qualité haute définition</span>
              </div>
            </div>

            <div className="mt-6">
              <Button 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary hover:text-white"
                disabled
              >
                Bientôt disponible
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Background Pattern *//*}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 119, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 119, 0, 0.1) 0%, transparent 50%)
          `
        }} />
      </div>

      {/* Loading Animation *//*}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}*/