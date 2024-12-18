import React, { useState, useEffect } from 'react';
import SongCard from '../components/SongCard';

/**
 * HomePage - Página principal que muestra canciones populares.
 */
const HomePage = () => {
  const [popularSongs, setPopularSongs] = useState([]);

  useEffect(() => {
    // Datos de canciones populares
    const songs = [
      { id: 1, title: 'Rockstar', artist: 'DaBaby ft. Roddy Ricch', album: 'Pop' },
      { id: 2, title: 'Unstoppable', artist: 'The Score', album: 'Pop Rock' },
      { id: 3, title: 'Run Boy Run', artist: 'Woodkid', album: 'Indie Pop'},
      { id: 4, title: 'World on Hold', artist: 'Bob Sinclar', album: 'Electrónica' },
      { id: 5, title: 'We Will Rock You', artist: 'Queen', album: 'Rock' },
      { id: 6, title: 'Life Is Good', artist: 'Future ft. Drake', album: 'Hip Hop'},
      { id: 7, title: 'Save Your Tears', artist: 'The Weeknd & Ariana Grande', album: 'Pop' },
      { id: 8, title: 'Circles', artist: 'Post Malone', album: 'Pop' },
      { id: 9, title: 'The Box', artist: 'Roddy Ricch', album: 'Hip Hop' },
      { id: 10, title: 'Say So', artist: 'Doja Cat', album: 'Pop' },
    ];
    setPopularSongs(songs);
  }, []);

  return (
    <section className="home-page">
      <h1>Canciones Populares</h1>
      <div className="song-list">
        {popularSongs.map((song) => (
          <SongCard key={song.id} {...song} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;