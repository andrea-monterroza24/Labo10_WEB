import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log('🔍 main.jsx - Iniciando aplicación...')

// Agrega esto para capturar errores
window.addEventListener('error', (event) => {
  console.error('🎯 Error global capturado:', event.error);
});

const root = ReactDOM.createRoot(document.getElementById('root'));

try {
  console.log('🔍 Intentando renderizar App...');
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('✅ App renderizada correctamente');
} catch (error) {
  console.error('❌ Error al renderizar App:', error);
}