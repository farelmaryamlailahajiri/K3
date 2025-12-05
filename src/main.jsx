import { StrictMode } from 'react';
// 1. Mengimpor client API dari react-dom
import { createRoot } from 'react-dom/client'; 
import './index.css';
import App from './App.jsx';

const container = document.getElementById('root');
// 3. Membuat root
const root = createRoot(container); 
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);