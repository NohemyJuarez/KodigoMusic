import React, { useState } from 'react';
import MusicPlayer from '../components/MusicPlayer';
import Ghibli from '../assets/images/Ghibli.jpeg';
import LofiHipHop from '../assets/images/Lofi.jpg';


const PlayerPage = () => {
    // Define la lista de reproducción aquí
const playlist = [
    {
      title: 'Ghibli Music',
      artist: 'Relaxing Ghibli',
      url: '',
      cover: Ghibli, 
    },
    {
      title: 'Lofi Hip Hop',
      artist: 'EchoSai',
      url: '',
      cover:LofiHipHop, 
    },
   
  ];
  

  return (
    <div className="player-page">
      {/* Encabezado */}
      <header className="player-header">
        <h1>🎶 Reproductor de Música</h1>
        <p>Disfruta de nuestra música</p>
      </header>

      {/* Contenido Principal */}
      <main className="player-content">
        {/* Renderizamos el MusicPlayer y enviamos la playlist */}
        <MusicPlayer playlist={playlist} />
      </main>

      {/* Sección de Listas de Reproducción */}
      <section className="playlist-section">
        <h2>🎧 Listas de Reproducción</h2>
        <div className="playlist-categories">
          <button>🎶 Pop</button>
          <button>😎 Rock</button>
          <button>🎧 Hip Hop</button>
          <button>🎻 Clásica</button>
        </div>
      </section>

    </div>
  );
};

export default PlayerPage;