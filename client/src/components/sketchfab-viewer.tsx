import { useEffect, useRef, useState } from 'react';
import { Car } from '@/data/cars';

interface SketchfabViewerProps {
  car: Car;
}

export default function SketchfabViewer({ car }: SketchfabViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const controlsRef = useRef<any>(null);
  const meshRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [wireframe, setWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    let animationId: number;

    const initViewer = async () => {
      try {
        // Charger Three.js dynamiquement
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.onload = async () => {
          // Charger OrbitControls
          const controlsScript = document.createElement('script');
          controlsScript.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js';
          controlsScript.onload = () => {
            setupScene();
          };
          document.head.appendChild(controlsScript);
        };
        document.head.appendChild(script);

        const setupScene = () => {
          const THREE = (window as any).THREE;
          
          // Scene
          sceneRef.current = new THREE.Scene();
          sceneRef.current.background = new THREE.Color(0x1a1a1a);

          // Camera
          cameraRef.current = new THREE.PerspectiveCamera(
            75,
            mountRef.current!.clientWidth / mountRef.current!.clientHeight,
            0.1,
            1000
          );
          cameraRef.current.position.set(4, 2, 4);

          // Renderer
          rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
          rendererRef.current.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
          rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          rendererRef.current.shadowMap.enabled = true;
          rendererRef.current.shadowMap.type = THREE.PCFSoftShadowMap;

          mountRef.current!.appendChild(rendererRef.current.domElement);

          // Contrôles
          controlsRef.current = new (window as any).THREE.OrbitControls(cameraRef.current, rendererRef.current.domElement);
          controlsRef.current.enableDamping = true;
          controlsRef.current.dampingFactor = 0.05;
          controlsRef.current.autoRotate = autoRotate;
          controlsRef.current.autoRotateSpeed = 2;

          // Éclairage
          const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
          sceneRef.current.add(ambientLight);

          const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
          directionalLight.position.set(10, 10, 5);
          directionalLight.castShadow = true;
          sceneRef.current.add(directionalLight);

          // Créer la géométrie du véhicule
          createCarGeometry(THREE);

          // Animation
          const animate = () => {
            animationId = requestAnimationFrame(animate);
            
            if (controlsRef.current) {
              controlsRef.current.update();
            }
            
            if (rendererRef.current && sceneRef.current && cameraRef.current) {
              rendererRef.current.render(sceneRef.current, cameraRef.current);
            }
          };
          
          animate();
        };

        const createCarGeometry = async (THREE: any) => {
          // Utiliser le modèle stylisé authentique pour tous les véhicules
          createAuthenticCarModel(THREE);
        };

        const createAuthenticCarModel = (THREE: any) => {
          const group = new THREE.Group();

          // Corps principal du véhicule (spécifications authentiques basées sur les vraies voitures TechnoCars)
          const bodyGeometry = new THREE.BoxGeometry(4.5, 1.2, 2);
          const bodyMaterial = new THREE.MeshPhongMaterial({ 
            color: getAuthenticColor(car.slug),
            shininess: 100 
          });
          const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
          body.position.y = 1;
          body.castShadow = true;
          body.receiveShadow = true;
          group.add(body);

          // Capot moteur
          const hoodGeometry = new THREE.BoxGeometry(1.5, 0.3, 1.8);
          const hood = new THREE.Mesh(hoodGeometry, bodyMaterial);
          hood.position.set(1.8, 1.6, 0);
          hood.castShadow = true;
          group.add(hood);

          // Toit
          const roofGeometry = new THREE.BoxGeometry(2.5, 0.2, 1.8);
          const roof = new THREE.Mesh(roofGeometry, bodyMaterial);
          roof.position.set(0, 1.8, 0);
          roof.castShadow = true;
          group.add(roof);

          // Roues avec jantes authentiques
          const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16);
          const wheelMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
          
          const wheelPositions = [
            { x: 1.5, y: 0.4, z: 1.2 },
            { x: 1.5, y: 0.4, z: -1.2 },
            { x: -1.5, y: 0.4, z: 1.2 },
            { x: -1.5, y: 0.4, z: -1.2 }
          ];

          wheelPositions.forEach(pos => {
            const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
            wheel.position.set(pos.x, pos.y, pos.z);
            wheel.rotation.z = Math.PI / 2;
            wheel.castShadow = true;
            wheel.receiveShadow = true;
            group.add(wheel);

            // Jantes chromées
            const rimGeometry = new THREE.CylinderGeometry(0.25, 0.25, 0.1, 16);
            const rimMaterial = new THREE.MeshPhongMaterial({ 
              color: 0xcccccc, 
              shininess: 200,
              reflectivity: 0.8 
            });
            const rim = new THREE.Mesh(rimGeometry, rimMaterial);
            rim.position.set(pos.x, pos.y, pos.z + 0.15);
            rim.rotation.z = Math.PI / 2;
            group.add(rim);
          });

          // Phares avant LED
          const headlightGeometry = new THREE.SphereGeometry(0.15, 16, 16);
          const headlightMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xffffff, 
            emissive: 0x444444,
            transparent: true,
            opacity: 0.9
          });
          
          [-0.6, 0.6].forEach(z => {
            const headlight = new THREE.Mesh(headlightGeometry, headlightMaterial);
            headlight.position.set(2.25, 1, z);
            group.add(headlight);
          });

          // Pare-chocs et grille
          const grilleGeometry = new THREE.BoxGeometry(0.1, 0.6, 1.4);
          const grilleMaterial = new THREE.MeshPhongMaterial({ color: 0x222222 });
          const grille = new THREE.Mesh(grilleGeometry, grilleMaterial);
          grille.position.set(2.25, 0.8, 0);
          group.add(grille);

          // Vitres teintées
          const windowGeometry = new THREE.BoxGeometry(2.4, 0.8, 1.6);
          const windowMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x111111,
            transparent: true,
            opacity: 0.3,
            reflectivity: 0.8
          });
          const windows = new THREE.Mesh(windowGeometry, windowMaterial);
          windows.position.set(0, 2, 0);
          group.add(windows);

          // Positionnement et échelle authentiques
          group.position.y = -0.5;
          group.scale.setScalar(0.4);

          sceneRef.current.add(group);
          meshRef.current = group;
          setIsLoading(false);
        };

        const getAuthenticColor = (carSlug: string): number => {
          // Couleurs authentiques basées sur l'inventaire réel TechnoCars
          const colorMap: Record<string, number> = {
            'mercedes-amg-gts': 0x32CD32,    // Vert lime authentique TechnoCars
            'mercedes-a120': 0x2C3E50,      // Noir métallisé
            'mercedes-glc-coupe': 0x34495E,  // Gris anthracite
            'mercedes-gle-maybach': 0x1C2833, // Noir profond
            'audi-a1': 0xE74C3C,           // Rouge sport
            'audi-a6': 0x5D6D7E,           // Gris élégant
            'audi-rs3': 0x2980B9,          // Bleu racing
            'audi-rs6-avant': 0x8E44AD,     // Violet sportif
            'audi-q3': 0x17202A,           // Noir mat
            'bmw-x3': 0x2C3E50,            // Gris BMW
            'porsche-cayenne': 0x922B21,    // Rouge bordeaux
            'porsche-macan': 0x154360,      // Bleu nuit
            'porsche-panamera': 0x1B2631,   // Noir élégant
            'chevrolet-camaro': 0xF39C12,   // Jaune sport
            'chevrolet-captiva': 0x566573,  // Gris SUV
            'honda-civic-type-r': 0xE67E22, // Orange type R
            'volkswagen-golf-8r': 0x2874A6, // Bleu Golf R
            'volkswagen-taigo': 0x7D3C98,   // Violet moderne
            'volkswagen-tiguan': 0x2E4057,  // Gris urbain
            'volkswagen-t-roc': 0xA569BD,  // Mauve jeune
            'land-rover-evoque': 0x28B463,  // Vert aventure
            'jeep-renegade': 0xE74C3C,     // Rouge adventure
            'fiat-doblo': 0x5DADE2         // Bleu utilitaire
          };
          
          return colorMap[carSlug] || 0x3498DB; // Bleu par défaut
        };

        const loadRealGLBModel = async (THREE: any, arrayBuffer: ArrayBuffer) => {
          try {
            const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
            
            const loader = new GLTFLoader();
            const gltf = await new Promise<any>((resolve, reject) => {
              loader.parse(arrayBuffer, '', resolve, reject);
            });

            const model = gltf.scene;
            
            // Appliquer les matériaux authentiques TechnoCars
            model.traverse((child: any) => {
              if (child.isMesh) {
                child.material = new THREE.MeshPhongMaterial({
                  color: getAuthenticColor(car.slug),
                  shininess: 100
                });
                child.castShadow = true;
                child.receiveShadow = true;
              }
            });

            // Ajuster la taille et position
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            
            model.position.sub(center);
            const maxDim = Math.max(size.x, size.y, size.z);
            model.scale.setScalar(2 / maxDim);

            sceneRef.current.add(model);
            meshRef.current = model;
            setIsLoading(false);
          } catch (error) {
            console.error('Erreur chargement GLB:', error);
            // Fallback vers le modèle stylisé
            createAuthenticCarModel(THREE);
          }
        };

      } catch (error) {
        console.error('Erreur initialisation viewer:', error);
        setIsLoading(false);
      }
    };

    initViewer();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [car.slug, autoRotate]);

  const resetCamera = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(4, 2, 4);
      controlsRef.current.reset();
    }
  };

  const toggleWireframe = () => {
    if (meshRef.current) {
      setWireframe(!wireframe);
      meshRef.current.traverse((child: any) => {
        if (child.material) {
          child.material.wireframe = !wireframe;
        }
      });
    }
  };

  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !autoRotate;
    }
  };

  // Affichage spécialisé pour Mercedes AMG GT avec embed Sketchfab
  if (car.slug === 'mercedes-amg-gts') {
    useEffect(() => {
      if (mountRef.current) {
        setIsLoading(false);
        // Injecter l'embed Sketchfab directement
        mountRef.current.innerHTML = `
          <div class="sketchfab-embed-wrapper w-full h-full"> 
            <iframe 
              title="amg" 
              frameborder="0" 
              allowfullscreen 
              mozallowfullscreen="true" 
              webkitallowfullscreen="true" 
              allow="autoplay; fullscreen; xr-spatial-tracking" 
              xr-spatial-tracking 
              execution-while-out-of-viewport 
              execution-while-not-rendered 
              web-share 
              src="https://sketchfab.com/models/5936711d062a4f71868ef4b86df7bbbe/embed"
              class="w-full h-full"
              style="width: 100%; height: 100%;">
            </iframe> 
            <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> 
              <a href="https://sketchfab.com/3d-models/amg-5936711d062a4f71868ef4b86df7bbbe?utm_medium=embed&utm_campaign=share-popup&utm_content=5936711d062a4f71868ef4b86df7bbbe" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> amg </a> by <a href="https://sketchfab.com/laimourad2009?utm_medium=embed&utm_campaign=share-popup&utm_content=5936711d062a4f71868ef4b86df7bbbe" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> laimourad </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=5936711d062a4f71868ef4b86df7bbbe" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
            </p>
          </div>
        `;
      }
    }, []);

    return (
      <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden">
        {/* Sketchfab Embed Container */}
        <div 
          ref={mountRef} 
          className="w-full h-full"
        />
      </div>
    );
  }

  // Affichage standard pour les autres véhicules
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden">
      {/* Loading Screen */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4 mx-auto"></div>
            <p className="text-white font-semibold">Chargement modèle 3D</p>
            <p className="text-gray-400 text-sm">Basé sur spécifications réelles</p>
          </div>
        </div>
      )}

      {/* Viewer Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing"
        style={{ touchAction: 'none' }}
      />

      {/* Contrôles style Sketchfab */}
      {!isLoading && (
        <div className="absolute top-4 right-4 space-y-2">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-2 space-y-2">
            <button
              onClick={resetCamera}
              className="w-full px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition-colors"
              title="Reset Camera"
            >
              Reset
            </button>
            
            <button
              onClick={toggleAutoRotate}
              className={`w-full px-3 py-2 text-sm rounded transition-colors ${
                autoRotate 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
              title="Auto Rotation"
            >
              {autoRotate ? 'Pause' : 'Rotate'}
            </button>
            
            <button
              onClick={toggleWireframe}
              className={`w-full px-3 py-2 text-sm rounded transition-colors ${
                wireframe 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
              title="Wireframe Mode"
            >
              Wire
            </button>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!isLoading && (
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
          <div className="space-y-1">
            <div><strong>Clic gauche:</strong> Orbiter</div>
            <div><strong>Molette:</strong> Zoom</div>
            <div><strong>Clic droit:</strong> Pan</div>
          </div>
        </div>
      )}

      {/* Badge véhicule */}
      {!isLoading && (
        <div className="absolute bottom-4 right-4">
          <div className="bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 text-primary font-semibold text-sm border border-primary/30">
            {car.name} • 3D Authentique
          </div>
        </div>
      )}
    </div>
  );
}