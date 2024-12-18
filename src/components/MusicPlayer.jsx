import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles.css';

const MusicPlayer = ({ playlist, initialSongIndex = 0 }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(initialSongIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  const audioRef = useRef(null);
  const intervalRef = useRef();

  // Efecto para inicializar el audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = new Audio(playlist[currentSongIndex].url);

    // Escucha cuando el audio se carga para obtener la duración
    audioRef.current.addEventListener('loadedmetadata', () => {
      setDuration(audioRef.current.duration);
      setCurrentTime(0);
    });

    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    }
  }, [currentSongIndex]);

  // Función para manejar Play/Pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      startTimer();
    }
    setIsPlaying(!isPlaying);
  };

  // Función para manejar el temporizador
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current && audioRef.current.currentTime) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 1000);
  };

  // Función para saltar canciones
  const skipTrack = (direction) => {
    let newIndex = currentSongIndex;

    if (direction === 'next') {
      newIndex = isShuffle
        ? Math.floor(Math.random() * playlist.length)
        : (currentSongIndex + 1) % playlist.length;
    } else if (direction === 'prev') {
      newIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    }

    setCurrentSongIndex(newIndex);
  };

  // Función para manejar el progreso manualmente
  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="music-player">
      {/* Información de la canción */}
      <div className="song-info">
        <img
          src={playlist[currentSongIndex].cover}
          alt={playlist[currentSongIndex].title}
          className="song-cover"
        />
        <h3>{playlist[currentSongIndex].title}</h3>
        <p>{playlist[currentSongIndex].artist}</p>
      </div>

      {/* Controles de reproducción */}
      <div className="player-controls">
        <button onClick={() => skipTrack('prev')}>⏮️</button>
        <button onClick={togglePlay}>{isPlaying ? '⏸️' : '▶️'}</button>
        <button onClick={() => skipTrack('next')}>⏭️</button>

        {/* Controles adicionales */}
        <button onClick={() => setIsLoop(!isLoop)} style={{ color: isLoop ? 'green' : 'black' }}>
          🔁
        </button>
        <button onClick={() => setIsShuffle(!isShuffle)} style={{ color: isShuffle ? 'green' : 'black' }}>
          🔀
        </button>
      </div>

      {/* Barra de progreso */}
      <div className="progress-bar">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleProgressChange}
        />
        <span>{formatTime(duration)}</span>
      </div>

      {/* Opciones de personalización */}
      <div className="custom-options">
        <button>💖 Agregar a favoritos</button>
        <button>➕ Añadir a playlist</button>
      </div>
    </div>
  );
};

// Función auxiliar para formatear tiempo
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default MusicPlayer;