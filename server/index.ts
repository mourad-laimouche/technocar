// Frontend-only startup script for TechnoCars
import express from 'express';
import path from 'path';
import { spawn } from 'child_process';

const app = express();
const PORT = 5000;
const clientDir = path.join(process.cwd(), 'client');
const distDir = path.join(process.cwd(), 'dist');

console.log('Starting TechnoCars application...');

// First, build the frontend
console.log('Building frontend...');
const buildProcess = spawn('npm', ['run', 'build'], {
  cwd: clientDir,
  stdio: 'inherit'
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('Build completed successfully');
    
    // Serve static files without any host restrictions
    app.use(express.static(distDir));
    
    // Handle SPA routing - serve index.html for all routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
    
    // Start server with no host checking
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`TechnoCars app running on http://0.0.0.0:${PORT}`);
      console.log('No host restrictions - accessible from any domain');
    });
  } else {
    console.error('Build failed with code:', code);
    process.exit(1);
  }
});