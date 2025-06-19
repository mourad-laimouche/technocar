const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function buildForNetlify() {
  try {
    console.log('🔧 Préparation du build Netlify pour TechnoCars...');
    
    // Étape 1: Nettoyer le dossier de build existant
    const distPath = path.join(__dirname, 'client', 'dist');
    if (fs.existsSync(distPath)) {
      fs.rmSync(distPath, { recursive: true, force: true });
      console.log('✅ Dossier dist nettoyé');
    }
    
    // Étape 2: Installer les dépendances si nécessaire
    console.log('📦 Installation des dépendances...');
    execSync('npm install', { 
      cwd: path.join(__dirname, 'client'),
      stdio: 'inherit' 
    });
    
    // Étape 3: Build de production
    console.log('🏗️ Build de production...');
    execSync('npm run build', { 
      cwd: path.join(__dirname, 'client'),
      stdio: 'inherit' 
    });
    
    // Étape 4: Copier les fichiers de configuration Netlify
    const netlifyCfg = `
[build]
  publish = "client/dist"
  command = "cd client && npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[dev]
  command = "npm run dev"
  port = 5000
  publish = "client/dist"
`;
    
    fs.writeFileSync('netlify.toml', netlifyCfg);
    console.log('✅ Configuration Netlify créée');
    
    // Étape 5: Copier _redirects dans dist
    const redirects = `/* /index.html 200`;
    fs.writeFileSync(path.join(distPath, '_redirects'), redirects);
    console.log('✅ Redirections SPA configurées');
    
    console.log('🎉 Build Netlify terminé !');
    console.log('📁 Dossier à déployer: client/dist/');
    console.log('🌐 Prêt pour netlify.com');
    
  } catch (error) {
    console.error('❌ Erreur lors du build:', error.message);
    process.exit(1);
  }
}

buildForNetlify();