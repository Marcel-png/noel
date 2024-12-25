import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';
import gifImage from '../images/gifImage .webp';
import noelMusic from '../images/noelMusic.m4a';
import '../index.css';

const Formulaire = () => {
  const [nom, setNom] = useState('');
  const [lienGenere, setLienGenere] = useState('');
  const [nomRecu, setNomRecu] = useState(new URLSearchParams(window.location.search).get('nom') || '');
  const [showMagicEffect, setShowMagicEffect] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const audioRef = useRef(null);

  const startExperience = () => {
    setShowOverlay(false);
    const audio = new Audio(noelMusic);
    audioRef.current = audio;
    audio.loop = true;
    
    try {
      audio.play().catch(e => console.log('Erreur de lecture:', e));
    } catch (error) {
      console.log('Erreur de lecture:', error);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const createChristmasScene = () => {
    // Création des éléments de Noel
    createSnowflakes();
    createSanta();
    createChristmasLights();
    createGifts();
  };

  const createSnowflakes = () => {
    const container = document.createElement('div');
    container.className = 'snowflakes-container';
    
    for (let i = 0; i < 1500000; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      
      const snowflakes = ['❄', '❅', '❆', '✻', '✼', '❉', '❆', '✻', '✼', '❉', '❆', '✻', '✼', '❉'];
      snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
      
      // Position aléatoire horizontale
      snowflake.style.left = `${Math.random() * 100}%`;
      
      // Animation plus variée
      snowflake.style.animationDelay = `${Math.random() * 3}s`;
      snowflake.style.animationDuration = `${Math.random() * (15 - 5) + 5}s`;
      
      // Plus grande variation de taille
      const size = Math.random() * (40 - 10) + 10;
      snowflake.style.fontSize = `${size}px`;
      
      // Variation d'opacité
      snowflake.style.opacity = Math.random() * (1 - 0.4) + 0.4;
      
      container.appendChild(snowflake);
    }
    document.body.appendChild(container);
  };

  const createSanta = () => {
    const santa = document.createElement('div');
    santa.className = 'santa-sleigh';
    document.body.appendChild(santa);
  };

  const createChristmasLights = () => {
    const lights = document.createElement('div');
    lights.className = 'christmas-lights';
    document.body.appendChild(lights);
  };

  const createGifts = () => {
    const giftsContainer = document.createElement('div');
    giftsContainer.className = 'gifts-container';
    for (let i = 0; i < 5; i++) {
      const gift = document.createElement('div');
      gift.className = 'gift';
      gift.style.left = `${20 + i * 20}%`;
      gift.style.animationDelay = `${i * 0.3}s`;
      giftsContainer.appendChild(gift);
    }
    document.body.appendChild(giftsContainer);
  };

  const cleanupChristmasScene = () => {
    const elements = [
      '.snowflakes-container',
      '.santa-sleigh',
      '.christmas-lights',
      '.gifts-container'
    ];
    elements.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) element.remove();
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom.trim()) {
      alert('Veuillez entrer votre nom avant.');
      return;
    }
    const lien = `${window.location.origin}?nom=${encodeURIComponent(nom)}`;
    setLienGenere(lien);
    setShowMagicEffect(true);
    // Effet de confettis lors de la génération du lien
    createConfettiEffect();
  };


  const partagerSurWhatsApp = () => {
    if (lienGenere) {
      const message = `🎄✨ Ho Ho Ho ! ${nom} a une surprise magique de Noël rien que pour vous ! 🎅✨

🎁 Un message rempli d'amour et de magie vous attend...

🌟 Découvrez ce doux message en cliquant ici : ${lienGenere}

💫 Que la féerie de Noël illumine votre journée ! 🦌⭐️`;

      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const createConfettiEffect = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      
      // Style aléatoire pour chaque confetti
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      confetti.style.animationDuration = `${Math.random() * (6 - 3) + 3}s`;
      
      document.body.appendChild(confetti);
      
      // Nettoyer les confettis après l'animation
      setTimeout(() => {
        confetti.remove();
      }, 6000);
    }
  };

  return (
<<<<<<< HEAD
    <>
      {showOverlay && (
        <div className="start-overlay" onClick={startExperience}>
          <div className="start-content animate-pulse">
            <h2>✨ Cliquez pour découvrir la magie de Noël 🎄</h2>
            <button className="start-button">
              Commencer l'expérience magique
            </button>
          </div>
        </div>
=======
    <div className="bg-opacity-80 relative bg-white shadow-2xl animate__animated animate__fadeIn mx-auto my-8 border border-blue-500 rounded-lg w-full max-w-lg p-4 md:p-8 lg:p-12" style={{ zIndex: 1 }}>
      <section className="text-center">
        <img src={gifImage} alt="Merry Christmas" className="mx-auto my-4 w-32 h-32 animate__animated animate__rubberBand" />
      </section>
      <div className="blinking-lights">
        <span></span>
        <span></span>
        <span></span>
      </div>
      {nomRecu ? (
        <>
          <h1 className="text-red-500 font-bold my-8 text-center text-xl md:text-2xl lg:text-3xl animate__animated animate__bounceIn sparkle">
            {nomRecu} vous souhaite un joyeux Noël !
          </h1>
          <p className="text-center text-black-500 mb-8">
            Ajoutez votre nom pour transmettre ce message à quelqu'un d'autre.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <input
                type="text"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="border border-black-500 rounded-lg font-bold border-2 p-2 mb-4 w-full"
                placeholder="Votre nom ici..."
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold border border-red-500 rounded-lg border-2 p-2 my-4 animate__animated animate__pulse"
              >
                Partager la surprise à votre tour.
              </button>
            </div>
          </form>
          {lienGenere && (
            <div className="text-center mt-4">
              <button
                onClick={partagerSurWhatsApp}
                className="bg-green-500 hover:bg-green-700 text-white font-bold border border-green-500 rounded-lg border-2 p-2 mt-4"
              >
                Appuyer ici pour partager.
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <h1 className="text-red-500 font-bold my-8 text-center text-xl md:text-2xl lg:text-3xl animate__animated animate__bounceIn sparkle">
            {nomRecu || 'Nom'} <br /> vous souhaite un joyeux Noël.
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <label
                htmlFor="nom"
                className="block text-black-500 text-lg md:text-xl lg:text-2xl font-bold mb-4"
              >
                Entrez votre nom :
              </label>
              <input
                type="text"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="border border-black-500 rounded-lg font-bold border-2 p-2 mb-4 w-full"
                placeholder="Votre nom ici..."
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold border border-red-500 rounded-lg border-2 p-2 my-4 animate__animated animate__pulse"
              >
                Partager la surprise à votre tour.
              </button>
            </div>
          </form>
          {lienGenere && (
            <div className="text-center mt-4">
              <button
                onClick={partagerSurWhatsApp}
                className="bg-green-500 hover:bg-green-700 text-white font-bold border border-green-500 rounded-lg border-2 p-2 mt-4"
              >
                Appuyer ici pour partager
              </button>
            </div>
          )}
        </>
>>>>>>> c3e2cc87a7ee1a05df499715e4ccdbba41194c4e
      )}

      <div className={`christmas-card ${showMagicEffect ? 'magic-active' : ''}`}>
        <audio src={noelMusic} loop autoPlay playsInline muted={false} />
        
        <div className="card-content">
          <img 
            src={gifImage} 
            alt="Merry Christmas" 
            className="christmas-gif animate-bounce duration-2000"
          />

          <div className="message-container">
            {nomRecu ? (
              <h1 className="christmas-title animate-fade-in">
                {nomRecu} vous souhaite un merveilleux Noël ! ✨
              </h1>
            ) : (
              <h1 className="christmas-title animate-fade-in">
                Partagez la magie de Noël ! 🎄
              </h1>
            )}

            <form onSubmit={handleSubmit} className="christmas-form">
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="name-input"
                placeholder="Votre nom magique..."
              />
              <button type="submit" className="submit-button">
                Créer la magie ✨
              </button>
            </form>

            {lienGenere && (
              <button
                onClick={partagerSurWhatsApp}
                className="share-button animate-pulse"
              >
                Partager la magie sur WhatsApp 🎄
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulaire;
