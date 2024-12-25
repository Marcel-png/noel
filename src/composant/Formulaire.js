import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';
import gifImage from '../images/gifImage .webp';
import noelMusic from '../images/noelMusic.m4a';
import '../index.css';

const Formulaire = () => {
  const [nom, setNom] = useState('');
  const [lienGenere, setLienGenere] = useState('');
  const [nomRecu, setNomRecu] = useState(new URLSearchParams(window.location.search).get('nom') || '');
  const [showOverlay, setShowOverlay] = useState(true);
  const audioRef = useRef(null);

  const startExperience = () => {
    setShowOverlay(false);
    if (audioRef.current) {
      audioRef.current.play().catch((e) => console.log('Erreur de lecture:', e));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom.trim()) {
      alert('Veuillez entrer votre nom avant.');
      return;
    }
    const lien = `${window.location.origin}?nom=${encodeURIComponent(nom)}`;
    setLienGenere(lien);
  };

  const partagerSurWhatsApp = () => {
    if (lienGenere) {
      const message = `🎄✨ Ho Ho Ho ! ${nom} a une surprise magique de Noël rien que pour vous ! 🎅✨

🌟 Découvrez ce doux message en cliquant ici : ${lienGenere}

💫 Que la féerie de Noël illumine votre journée !`;
      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <>
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div
            className="bg-white text-center p-8 rounded-lg shadow-lg animate__animated animate__pulse"
            onClick={startExperience}
          >
            <h2 className="text-2xl font-bold mb-4">✨ Cliquez pour découvrir la magie de Noël 🎄</h2>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Commencer l'expérience magique
            </button>
          </div>
        </div>
      )}

      <div className="relative bg-white shadow-xl rounded-lg max-w-md mx-auto my-8 p-6">
        <audio ref={audioRef} src={noelMusic} loop />
        <img src={gifImage} alt="Merry Christmas" className="w-32 h-32 mx-auto mb-4" />
        {nomRecu ? (
          <>
            <h1 className="text-red-500 text-xl font-bold text-center">
              {nomRecu} vous souhaite un joyeux Noël !
            </h1>
            <p className="text-center mt-4">Ajoutez votre nom pour partager à votre tour.</p>
          </>
        ) : (
          <h1 className="text-red-500 text-xl font-bold text-center">
            Partagez la magie de Noël !
          </h1>
        )}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Votre nom ici..."
            className="w-full p-2 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Créer la magie ✨
          </button>
        </form>
        {lienGenere && (
          <button
            onClick={partagerSurWhatsApp}
            className="w-full bg-green-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-green-700"
          >
            Partager sur WhatsApp 🎄
          </button>
        )}
      </div>
    </>
  );
};

export default Formulaire;