import React, { useState, useRef } from 'react';
import Escape from './Assets/hacker.jpg';
import Secret from './Assets/secret.png';
import Design from './Assets/design.png';
import Appart from './Assets/appart.png';
import Smiley from './Assets/smiley.png';
import Google from './Assets/chrome.png';
import Tailwind from './Assets/tailwind.png';
import ReactImage from './Assets/React.png';
import ThreeJS from './Assets/ThreeJS.png';
import './App.css';

export default function App() {
  const [selectedProject, setSelectedProject] = useState('default');
  const textZoneRef = useRef(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
    textZoneRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const renderProjectDetails = () => {
    switch (selectedProject) {
      case 'Neo Jerome':
        return (
          <div className="p-5 bg-black rounded-lg mt-5">
            <p className="text-green-400 font-mono">
              <span className="font-bold">Description :</span> <span className="italic">The Hacking Traitor</span> <br />
              <span className="font-semibold">Envoyé par la compagnie</span> <i>Neo Jerome</i> <span className="font-semibold">pour trouver leur traître,</span> <br />
              <span className="font-semibold">Il y aura donc plusieurs phases de jeu :</span> <br />
              <span className="font-semibold">La première phase sera de trouver le traître, accumuler des preuves puis récuperer tout ce qui est possible</span> <br />
            </p>
            <div className="mt-2">
              <h3 className="text-green-500 font-mono">Technologies utilisées :</h3>
              <li className="list-none mt-1 text-green-400 font-mono">React : <img src={ReactImage} alt="React" className="inline-block w-12 h-12 ml-2" /></li>
              <li className="list-none mt-1 text-green-400 font-mono">Tailwind : <img src={Tailwind} alt="Tailwind" className="inline-block w-12 h-12 ml-2" /></li>
            </div>
          </div>
        );
      case 'Jerome Chanel':
        return (
          <div className="p-5 bg-black rounded-lg mt-5">
            <p className="text-yellow-300 font-serif">
              <span className="font-bold">Description :</span> <span className="italic">Chanel Jérôme</span> <br />
              <span className="font-semibold">Luxe, élégance et design</span> <br />
              <span className="font-semibold">La capacité de concevoir votre propre tenue de luxe, </span> <br />
              <span className="font-semibold">avec une touche de sophistication inégalée.</span> <br />
            </p>
            <div className="mt-2">
              <h3 className="text-yellow-400 font-serif">Technologies utilisées :</h3>
              <li className="list-none mt-1 text-yellow-300 font-serif">React : <img src={ReactImage} alt="React" className="inline-block w-12 h-12 ml-2" /></li>
              <li className="list-none mt-1 text-yellow-300 font-serif">Tailwind : <img src={Tailwind} alt="Tailwind" className="inline-block w-12 h-12 ml-2" /></li>
              <li className="list-none mt-1 text-yellow-300 font-serif">ThreeJS : <img src={ThreeJS} alt="ThreeJS" className="inline-block w-12 h-12 ml-2" /></li>
            </div>
          </div>
        );
      case 'Smiley':
        return (
          <div className="p-5 bg-black rounded-lg mt-5">
            <p className="text-blue-300 font-sans">
              <span className="font-bold">Description :</span>
              <span className="italic">Un jeu amusant pour trouver l'emoji imposteur et vous divertir quand vous vous ennuyez.</span> <br />
              <span className="font-semibold">Choisissez deux emojis (un imposteur et les autres sont des clones), puis générez une grille de 10x10.</span> <br />
              <span className="font-semibold">Votre objectif est de trouver l'imposteur parmi tous les emojis le plus rapidement possible.</span> <br />
            </p>
            <div className="mt-2">
              <h3 className="text-blue-400 font-sans">Technologies utilisées :</h3>
              <li className="list-none mt-1 text-blue-300 font-sans">React : <img src={ReactImage} alt="React" className="inline-block w-12 h-12 ml-2" /></li>
              <li className="list-none mt-1 text-blue-300 font-sans">Chrome Extension : <img src={Google} alt="Google Chrome extension" className="inline-block w-14 h-14 ml-1" /></li>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-5 bg-gray-800 rounded-lg mt-5">
            <p className="text-gray-300">Sélectionner un projet pour plus d'infos</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-black text-white w-full min-h-screen flex flex-col justify-center items-center px-4">
      <section className="mb-8 w-full max-w-screen-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-indigo-400">Creation of Jerome</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="cursor-pointer" onClick={() => handleImageClick('Neo Jerome')}>
            <img src={Escape} alt="The Crown" className="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-105" />
            <div className="mt-2 text-center">
              <p className="text-xl md:text-2xl text-emerald-400">Neo Jerome</p>
              <a href="https://escapegame-9f1f3.web.app/" className="block mt-1">
                <p className="font-bold text-sky-400 underline animate-pulse duration-75">The Hacking Traitor</p>
              </a>
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => handleImageClick('Jerome Chanel')}>
            <img src={Design} alt="Stranger Things" className="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-105" />
            <div className="mt-2 text-center">
              <p className="text-xl md:text-2xl text-orange-400">Jerome Chanel</p>
              <a href="https://designer-97084.web.app/" className="block mt-1">
                <p className="font-bold text-yellow-400 underline animate-bounce duration-75">Made in Jérôme</p>
              </a>
            </div>
          </div>
          <div>
            <img src={Appart} alt="A Christmas Prince" className="w-full h-64 object-cover rounded-lg" />
            <div className="mt-2 text-center">
              <p className="text-sm md:text-base">CIA</p>
              <p className="font-bold">Secret project [portfolio 3D]</p>
              <p>Unreal Engine 5 🤫 <br />
                [ Il arrive bientôt promis ! ]</p>
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => handleImageClick('Smiley')}>
            <img src={Smiley} alt="Smiley" className="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-105" />
            <div className="mt-2 text-center">
              <p className="text-xl md:text-2xl text-orange-400">Smiley</p>
              <a href="https://chromewebstore.google.com/detail/impostor-emoji/hiokcpoidlfkgmeiednkcagmhakkoeph?authuser=0&hl=fr" rel="noreferrer" target="_blank" className="block mt-1">
                <p className="font-bold text-orange-400 underline animate-bounce duration-75">Find the Impostor</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section ref={textZoneRef} className="w-full max-w-screen-lg">
        {renderProjectDetails()}
      </section>
      
      <section className="w-full max-w-screen-lg mx-auto mt-10 p-5 bg-gray-800 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-indigo-400">Contact Me</h2>
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
      </section>
    </div>
  );
}
