import React, { useState, useEffect } from 'react';
import 'animate.css';
import gifImage from '../images/gifImage .webp';
import '../index.css';

const Formulaire = () => {
  const [nom, setNom] = useState('');
  const [lienGenere, setLienGenere] = useState('');
  const [nomRecu, setNomRecu] = useState(new URLSearchParams(window.location.search).get('nom') || '');

  useEffect(() => {
    createSnowflakes();
  }, []);

  const createSnowflakes = () => {
    const body = document.querySelector('body');
    for (let i = 0; i < 20; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      // Appliquez une classe aléatoire pour l'image
      if (Math.random() < 0.5) {
        snowflake.classList.add('snowflake1');
      } else {
        snowflake.classList.add('snowflake2');
      }
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      body.appendChild(snowflake);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom.trim()) {
      alert('Veuillez entrer votre nom avant.');
    } else {
      const lien = `${window.location.origin}?nom=${encodeURIComponent(nom)}`;
      setLienGenere(lien);
    }
  };

  const partagerSurWhatsApp = () => {
    if (lienGenere) {
      const message = `🎄 ${nom} vous souhaite un Joyeux Noël ! Cliquez ici pour voir : ${lienGenere}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      alert('Veuillez d\'abord générer un lien.');
    }
  };

  return (
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
      )}
    </div>
  );
};

export default Formulaire;
