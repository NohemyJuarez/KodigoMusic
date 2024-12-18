import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import PlayerPage from './pages/PlayerPage';
import UserProfilePage from './pages/UserProfilePage';
import Header from './components/Header';
import Footer from './components/Footer';
import "./assets/styles.css";
/**
 * App Component - Configura la estructura principal de la SPA "Kodigo Music".
 * Incluye encabezado, rutas de navegación y pie de página.
 */
const App = () => {
  return (
    <Router>
      <Header /> {/* Encabezado de navegación */}
      <main>
        {/* Configuración de rutas */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/player" element={<PlayerPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </main>
      <Footer /> {/* Pie de página */}
    </Router>
  );
};

export default App;
