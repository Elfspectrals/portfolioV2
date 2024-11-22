import React, { useState, useEffect } from 'react';
import ContactMe from './ContactMe'; // Import ContactMe component
import Presentation from './Presentation'; // Import Presentation component
import './App.css';

export default function App() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  useEffect(() => {
    // Logic for SVG click handling if needed
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Présentation */}
      <Presentation setShowAboutMe={setShowAboutMe} />

      {/* Section Projets */}
      <section className="min-h-screen px-4 snap-start bg-gradient-to-b from-slate-600 to-gray-800 flex flex-col justify-center items-center">
        {/* SVG Project Section */}
      </section>

      {/* Contact Form */}
      <section className="h-screen px-4 snap-start bg-gradient-to-b from-slate-400 to-gray-600 flex items-center">
        <ContactMe />
      </section>

      {/* Modal About Me */}
      {showAboutMe && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white p-10 flex flex-col justify-center items-center z-50">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-center">
            Bonjour, je suis Jérôme, développeur web :
          </p>
          {/* About Me Content */}
          <button
            className="mt-8 bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setShowAboutMe(false)}
          >
            Fermer
          </button>
        </div>
      )}
    </div>
  );
}
