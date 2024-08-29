import React, { useState } from 'react';
import Escape from './Assets/hacker.jpg';
import Secret from './Assets/secret.png';
import Design from './Assets/design.png';
import Zombie from './Assets/zombie.png';
import './App.css';

export default function App () {
  const [selectedProject, setSelectedProject] = useState('default');

  const renderProjectDetails = () => {
    switch (selectedProject) {
      case 'Neo Jerome':
        return (
          <div className="p-5 bg-gray-800 rounded-lg mt-5">
            <p className="text-gray-300">
              Description : The Hacking Traitor <br />
              Envoyé par la compagnie <i>Neo Jerome</i> pour trouver leur traître, <br />
              Il y aura donc plusieurs phases de jeu : <br />
              - La phase de hacking des informations de la compagnie <br />
              - La phase de recherche <br />
            </p>
            <div className="mt-2">
              <h3 className="text-yellow-400">Technologies utilisées :</h3>
              <li className="list-none mt-1">React <img src={Zombie} alt='' className="inline-block w-5 h-5 ml-2"/></li>
            </div>
          </div>
        );
      case 'Jerome Chanel':
        return (
          <div className="p-5 bg-gray-800 rounded-lg mt-5">
            <p className="text-gray-300">
              Description : Chanel Jérôme <br />
              The ability to design your own outfit <br />
            </p>
            <div className="mt-2">
              <h3 className="text-yellow-400">Technologies utilisées :</h3>
              <ul>
                <li className="list-none mt-1">React <img src={Zombie} alt='' className="inline-block w-12 h-12 ml-2"/></li>
                <li className="list-none mt-1">React <img src={Zombie} alt='' className="inline-block w-12 h-12 ml-2"/></li>
                <li className="list-none mt-1">React <img src={Zombie} alt='' className="inline-block w-12 h-12 ml-2"/></li>
                <li className="list-none mt-1">React <img src={Zombie} alt='' className="inline-block w-12 h-12 ml-2"/></li>
              </ul>
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
