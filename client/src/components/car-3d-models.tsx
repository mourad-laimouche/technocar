import { useEffect, useRef, useState } from 'react';
import { Car } from '@/data/cars';

interface Car3DModelsProps {
  car: Car;
}

// Modèles 3D gratuits pour les véhicules TechnoCars
const FREE_3D_MODELS: Record<string, string> = {
  'mercedes-amg-gts': 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/mercedes_amg_gt.glb',
  'chevrolet-camaro': 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/camaro.glb',
  'audi-a1': 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/audi_a1.glb',
  'audi-a6': 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/audi_a6.glb',
  'mercedes-a120': 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/mercedes_a_class.glb',
  'volkswagen-golf-8r': 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/golf_r.glb',
  'porsche-cayenne': 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/porsche_cayenne.glb',
  'honda-civic-type-r': 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/honda_civic.glb',
  'jeep-renegade': 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/jeep_wrangler.glb'
};

export default function Car3DModels({ car }: Car3DModelsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rotationSpeed, setRotationSpeed] = useState(0.01);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    let scene: any, camera: any, renderer: any, model: any, animationId: number;

    const initThreeJS = async () => {
      try {
        // Chargement dynamique de Three.js depuis CDN
        const THREE = await loadThreeJS();
        
        // Configuration de la scène
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0a);

        // Configuration de la caméra
        camera = new THREE.PerspectiveCamera(
          45,
          canvasRef.current!.clientWidth / canvasRef.current!.clientHeight,
          0.1,
          1000
        );
        camera.position.set(0, 2, 5);

        // Configuration du renderer
        renderer = new THREE.WebGLRenderer({ 
          canvas: canvasRef.current!,
          antialias: true,
          alpha: true 
        });
        renderer.setSize(canvasRef.current!.clientWidth, canvasRef.current!.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;

        // Éclairage professionnel
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        scene.add(directionalLight);

        // Éclairage orange TechnoCars
        const orangeLight = new THREE.PointLight(0xff8c00, 0.8, 10);
        orangeLight.position.set(-3, 2, 3);
        scene.add(orangeLight);

        const blueAccentLight = new THREE.PointLight(0x4169e1, 0.4, 8);
        blueAccentLight.position.set(3, 1, -2);
        scene.add(blueAccentLight);

        // Sol réfléchissant
        const planeGeometry = new THREE.PlaneGeometry(20, 20);
        const planeMaterial = new THREE.MeshLambertMaterial({ 
          color: 0x333333,
          transparent: true,
          opacity: 0.7
        });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -1;
        plane.receiveShadow = true;
        scene.add(plane);

        // Chargement du modèle 3D
        const modelUrl = FREE_3D_MODELS[car.slug];
        if (modelUrl) {
          const loader = new THREE.GLTFLoader();
          const gltf = await loader.loadAsync(modelUrl);
          model = gltf.scene;
          
          // Ajustement du modèle
          model.scale.setScalar(1);
          model.position.set(0, 0, 0);
          model.castShadow = true;
          model.receiveShadow = true;
          
          // Application des matériaux authentiques
          model.traverse((child: any) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              if (child.material) {
                child.material.metalness = 0.8;
                child.material.roughness = 0.2;
              }
            }
          });
          
          scene.add(model);
        } else {
          // Fallback: géométrie simple si pas de modèle
          const geometry = new THREE.BoxGeometry(2, 1, 4);
          const material = new THREE.MeshPhongMaterial({ 
            color: 0xff8c00,
            metalness: 0.8,
            roughness: 0.2
          });
          model = new THREE.Mesh(geometry, material);
          model.position.set(0, 0, 0);
          model.castShadow = true;
          scene.add(model);
        }

        setIsLoading(false);

        // Boucle d'animation
        const animate = () => {
          animationId = requestAnimationFrame(animate);
          
          if (model && autoRotate) {
            model.rotation.y += rotationSpeed;
          }
          
          renderer.render(scene, camera);
        };
        
        animate();

      } catch (err) {
        console.error('Erreur chargement 3D:', err);
        setError('Impossible de charger le modèle 3D');
        setIsLoading(false);
      }
    };

    initThreeJS();

    // Nettoyage
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [car.slug, rotationSpeed, autoRotate]);

  const loadThreeJS = async () => {
    // Chargement dynamique de Three.js depuis CDN
    if (!(window as any).THREE) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });

      // Chargement des loaders
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/three@0.155.0/examples/js/loaders/GLTFLoader.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
    return (window as any).THREE;
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
            <p className="text-white">Chargement du modèle 3D authentique...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
          <div className="text-center text-red-400">
            <p>{error}</p>
            <p className="text-sm mt-2">Utilisation de la galerie photos à la place</p>
          </div>
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: isLoading || error ? 'none' : 'block' }}
      />

      {/* Contrôles 3D */}
      {!isLoading && !error && (
        <div className="absolute top-4 right-4 space-y-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-3 py-1 rounded text-sm ${
              autoRotate 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-black/50 text-white hover:bg-black/70'
            }`}
          >
            {autoRotate ? 'Pause' : 'Rotation'}
          </button>
          
          <div className="flex flex-col space-y-1">
            <label className="text-xs text-white/70">Vitesse</label>
            <input
              type="range"
              min="0.001"
              max="0.05"
              step="0.001"
              value={rotationSpeed}
              onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
              className="w-20"
            />
          </div>
        </div>
      )}

      {/* Badge 3D Authentique */}
      <div className="absolute bottom-4 left-4">
        <div className="bg-primary/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-primary font-semibold">
          Modèle 3D Authentique
        </div>
      </div>
    </div>
  );
}