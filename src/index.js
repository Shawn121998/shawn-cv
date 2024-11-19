import React from 'react';
import ReactDOM from 'react-dom/client';  // Untuk React 18 dan lebih baru
import './index.css';  // Jika menggunakan CSS tambahan atau Tailwind CSS
import App from './App';

// Menyiapkan root untuk aplikasi React (untuk React 18+)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render aplikasi React ke dalam elemen dengan id="root"
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
