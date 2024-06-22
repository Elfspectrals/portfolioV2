import Escape from './Assets/hacker.jpg'
import Secret from './Assets/secret.png'
import Design from './Assets/design.png'
export default function Component() {
  return (
    <div className="bg-black text-white w-full h-screen flex justify-center items-center">
      <section className="mb-8 w-full max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-indigo-400 ">Creation of Jerome</h2>
        <div className="flex space-x-4">
          <div className="w-64 flex-shrink-0">
            <img src={Escape} alt="The Crown" className="w-full h-64 object-cover" />
            <div className="mt-2 text-center">
              <p className="text-2xl text-emerald-400">Neo Jerome</p>
              <a href="https://escapegame-9f1f3.web.app/">
                <p className="font-bold text-sky-400 bold underline animate-pulse duration-75">The Hacking Traitor</p>
              </a>            
              </div>
          </div>
          <div className="w-64 flex-shrink-0">
            <img src={Design} alt="Stranger Things" className="w-full h-64 object-cover" />
            <div className="mt-2 text-center">
              <p className="text-2xl text-orange-400">Jerome Chanel</p>
              <a href="https://designer-97084.web.app/">
              <p className="font-bold text-yellow-400 bold underline animate-bounce duration-75">Made in Jérôme</p>
              </a>
            </div>
          </div>
          <div className="w-64 flex-shrink-0">
            <img src={Secret} alt="A Christmas Prince" className="w-full h-64 object-cover" />
            <div className="mt-2 text-center">
              <p className="text-sm">CIA</p>
              <p className="font-bold">Secret project [Jeux Vidéo]</p>
            </div>
          </div>
          <div className="w-64 flex-shrink-0">
            <img src={Secret} alt="Mindhunter" className="w-full h-64 object-cover" />
            <div className="mt-2 text-center">
              <p className="text-sm">CIA</p>
              <p className="font-bold">Secret project</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
