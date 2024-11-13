import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as SVG } from './Assets/final.svg';
import Escape from './Assets/hacker.jpg'; // Hacking Traitor
import Design from './Assets/design.png'; // Jerome Chanel
import Smiley from './Assets/smiley.png'; // Emoji Impostor
import BattleShip from './Assets/battleship.png'; // Battleship
import Moi from './Assets/moi.jpg';
import './App.css';

export default function App() {
  const [selectedProject, setSelectedProject] = useState('default');
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [currentImage, setCurrentImage] = useState(Escape); // State for the current image
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const textElements = svgRef.current.querySelectorAll('text');

      const handleClick = (e) => {
        const projectName = e.target.textContent.trim();

        // Map of project names to images
        const imageMap = {
          'Hacking Traitor': Escape,
          'Jerome Chanel': Design,
          'Emoji Impostor': Smiley,
          'Battleship': BattleShip,
        };

        const imageToDisplay = imageMap[projectName];
        if (imageToDisplay) {
          setCurrentImage(imageToDisplay);
        } else {
          console.warn(`No image found for project: ${projectName}`);
        }
      };

      textElements.forEach((textElement) => {
        textElement.addEventListener('click', handleClick);
      });

      // Cleanup event listeners on unmount
      return () => {
        textElements.forEach((textElement) => {
          textElement.removeEventListener('click', handleClick);
        });
      };
    }
  }, []);

  const handleImageClick = (project) => {
    setSelectedProject((prevProject) => (prevProject === project ? 'default' : project));
  };

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Présentation */}
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

      {/* Projets */}
      <section className="min-h-screen px-4 snap-start bg-gradient-to-b from-slate-600 to-gray-800 flex flex-col justify-center items-center">
        <div className="relative w-3/4 h-auto">
          <SVG ref={svgRef} className="w-full h-full" />
          <img
            src={currentImage}
            className="absolute m-auto w-1/2 h-1/2 object-contain test"
            alt="Project Visual"
          />
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="h-screen px-4 snap-start bg-gradient-to-b from-slate-400 to-gray-600 flex items-center">
        <div className="w-full max-w-screen-lg mx-auto p-5 bg-gray-800 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-indigo-400">
            Contact Me
          </h2>
          <form
            action="https://formsubmit.co/jerome.neupert@gmail.com"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="_subject" value="New submission from portfolio site" />
            <input type="hidden" name="_captcha" value="false" />

            <label className="text-gray-300">
              <span className="block font-semibold mb-1">Name:</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              />
            </label>
            <label className="text-gray-300">
              <span className="block font-semibold mb-1">Email:</span>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              />
            </label>
            <label className="text-gray-300">
              <span className="block font-semibold mb-1">Message:</span>
              <textarea
                name="message"
                placeholder="Your message"
                rows="5"
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              />
            </label>
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Modal About Me */}
      {showAboutMe && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white p-10 flex flex-col justify-center items-center z-50">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-center">
            Bonjour, je suis Jérôme, développeur web :
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4 max-w-3xl">
            Étudiant à la Web@cadémie à Epitech Strasbourg, je suis passionné par le développement
            web et les nouvelles technologies.
            <br />
            <br />
            J'y ai développé de précieuses compétences dans des domaines divers et variés :
          </p>
          <br />
          <ul>
            <li className="text-lg md:text-xl leading-relaxed mt-4 max-w-3xl">
              Fan de AR/VR, j'ai utilisé la librairie THREEJS
            </li>
            <li className="text-lg md:text-xl leading-relaxed mt-4 max-w-3xl">
              Amateur de jeux-vidéo, j'ai pu faire mon jeu-vidéo
            </li>
            <li className="text-lg md:text-xl leading-relaxed mt-4 max-w-3xl">
              Consommateur de boisson de qualité, j'ai aussi pu faire une application mobile pour
              trouver la parfaite recette
            </li>
          </ul>
          <p className="text-lg md:text-xl leading-relaxed mt-4 max-w-3xl ">
            <a
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
              href="https://www.calameo.com/read/006093319ebf8ba96e1d7"
            >
              Un petit article à lire pour découvrir mon engagement !
            </a>
          </p>
          <button
            className="mt-8 bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setShowAboutMe(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
