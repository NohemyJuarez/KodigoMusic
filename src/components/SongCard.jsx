import React from 'react';

const SongCard = ({ title, artist, album }) => {
  return (
    <div className="song-card">
      <h3>{title}</h3>
      <p>Artista: {artist}</p>
      <p>Género: {album}</p>
    </div>
  );
};

export default SongCard;