import Image from './logo192.png'
import Escape from './Assets/hacker.jpg'
import Secret from './Assets/secret.png'
export default function Component() {
  return (
    <div className="bg-black text-white w-full h-screen flex justify-center items-center overflow-hidden">
      <section className="mb-8 w-full max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-indigo-400 ">Creation of Jerome</h2>
        <div className="flex space-x-4">
          <div className="w-64 flex-shrink-0">
            <img src={Escape} alt="The Crown" className="w-full h-64 object-cover" />
            <div className="mt-2 text-center">
              <p className="text-2xl text-emerald-400 ">Neo Jerome</p>
              <a href="https://escapegame-9f1f3.web.app/">
                <p className="font-bold text-sky-400 bold underline animate-pulse duration-75">The Hacking Traitor</p>
              </a>            
              </div>
          </div>
          <div className="w-64 flex-shrink-0">
            <img src={Secret} alt="Stranger Things" className="w-full h-64 object-cover" />
            <div className="mt-2 text-center">
              <p className="text-sm">NETFLIX ORIGINAL</p>
              <p className="font-bold">STRANGER THINGS</p>
            </div>
          </div>
          <div className="w-64 flex-shrink-0">
            <img src={Secret} alt="A Christmas Prince" className="w-full h-64 object-cover" />
            <div className="mt-2 text-center">
              <p className="text-sm">NETFLIX ORIGINAL</p>
              <p className="font-bold">A CHRISTMAS PRINCE</p>
            </div>
          </div>
          <div className="w-64 flex-shrink-0">
            <img src={Secret} alt="Mindhunter" className="w-full h-64 object-cover" />
            <div className="mt-2 text-center">
              <p className="text-sm">NETFLIX ORIGINAL</p>
              <p className="font-bold">MINDHUNTER</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
