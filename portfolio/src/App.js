import React, { useState } from 'react';
import Escape from './Assets/hacker.jpg';
import Secret from './Assets/secret.png';
import Design from './Assets/design.png';
import Zombie from './Assets/zombie.png';
import Tailwind from './Assets/tailwind.png';
import ReactImage from './Assets/React.png';
import ThreeJS from './Assets/ThreeJS.png';
import './App.css';

export default function App () {
  const [selectedProject, setSelectedProject] = useState('default');

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
              <li className="list-none mt-1 text-green-400 font-mono">React : <img src={ReactImage} alt={ReactImage} className="inline-block w-12 h-12 ml-2"/></li>
              <li className="list-none mt-1 text-green-400 font-mono">Tailwind : <img src={Tailwind} alt='' className="inline-block w-12 h-12 ml-2"/></li>
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
              <li className="list-none mt-1 text-yellow-300 font-serif">ThreeJS : <img src={ThreeJS} alt="Tailwind" className="inline-block w-12 h-12 ml-2" /></li>

            </div>
          </div>
        );
      default:
        return (
          <div className="p-5 bg-gray-800 rounded-lg mt-5">
            <p className="text-gray-300">Select a project to see the details.</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-black text-white w-full min-h-screen flex flex-col justify-center items-center px-4">
      <section className="mb-8 w-full max-w-screen-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-indigo-400">Creation of Jerome</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="cursor-pointer" onClick={() => setSelectedProject('Neo Jerome')}>
            <img src={Escape} alt="The Crown" className="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-105"/>
            <div className="mt-2 text-center">
              <p className="text-xl md:text-2xl text-emerald-400">Neo Jerome</p>
              <a href="https://escapegame-9f1f3.web.app/" className="block mt-1">
                <p className="font-bold text-sky-400 underline animate-pulse duration-75">The Hacking Traitor</p>
              </a>
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => setSelectedProject('Jerome Chanel')}>
            <img src={Design} alt="Stranger Things" className="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-105"/>
            <div className="mt-2 text-center">
              <p className="text-xl md:text-2xl text-orange-400">Jerome Chanel</p>
              <a href="https://designer-97084.web.app/" className="block mt-1">
                <p className="font-bold text-yellow-400 underline animate-bounce duration-75">Made in Jérôme</p>
              </a>
            </div>
          </div>
          <div>
            <img src={Zombie} alt="A Christmas Prince" className="w-full h-64 object-cover rounded-lg"/>
            <div className="mt-2 text-center">
              <p className="text-sm md:text-base">CIA</p>
              <p className="font-bold">Secret project [Jeux Vidéo]</p>
              <p>Unreal Engine 5 🤫 <br />
                [ Il arrive bientôt promis ! ]</p>
            </div>
          </div>
          <div>
            <img src={Secret} alt="Mindhunter" className="w-full h-64 object-cover rounded-lg"/>
            <div className="mt-2 text-center">
              <p className="text-sm md:text-base">CIA</p>
              <p className="font-bold">Secret project</p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full max-w-screen-lg mx-auto">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-indigo-400">Learn about any project [click on the image]</h2>
          <div className="text-center text-base md:text-lg">
            {renderProjectDetails()}
          </div>
        </div>
      </div>
    </div>
  );
}
