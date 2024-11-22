import React from 'react';
import Moi from './Assets/moi.jpg';

const Presentation = ({ setShowAboutMe }) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-4 snap-start bg-slate-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center title titleDev text-white">
        Jérôme NEUPERT : Développeur Web
      </h2>
      <div className="flex justify-center">
        <div className="neon-border">
          <img src={Moi} alt="Jérôme" className="portrait mx-auto mb-4 rounded-lg" />
          <p className="text-center">
            <a href="/CV.pdf" download className="font-bold text-indigo-500">
              Mon CV pour votre joie
            </a>
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="mt-10 bg-indigo-500 text-white px-6 py-3 text-2xl rounded-lg aboutMe animate-pulse duration-75"
          onClick={() => setShowAboutMe(true)}
        >
          About Me
        </button>
      </div>
    </section>
  );
};

export default Presentation;
