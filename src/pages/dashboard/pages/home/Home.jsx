import { FaUserCheck, FaUserLock, FaUserTimes } from "react-icons/fa";
import { IoBusinessSharp } from "react-icons/io5";
import { RiUser6Line } from "react-icons/ri";
import { SiGhostery } from "react-icons/si";
import { TbGhostOff } from "react-icons/tb";

const Home = () => {
  return (
    <main className="px-10 py-8 grid grid-cols-3 gap-5">
      <article className="px-5 py-10 border border-gray-500/30 rounded-xl flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-gray-500/10">
        <h2 className="text-[80px]">50</h2>
        <h3 className="text-[40px] mb-8">Usuarios</h3>
        <div className="grid grid-cols-3 gap-3 w-full">
          <div className="w-full flex flex-col items-center gap-3">
            <h4 className="text-lg flex flex-col items-center gap-2">
              <FaUserCheck size={30} />
            </h4>
            <h5 className="text-lg flex items-center gap-1">
              <span>10</span>
              Activos
            </h5>
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            <h4 className="text-lg flex flex-col items-center gap-2">
              <FaUserLock size={30} />
            </h4>
            <h5 className="text-lg flex items-center gap-1">
              <span>10</span>
              Baneados
            </h5>
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            <h4 className="text-lg flex flex-col items-center gap-2">
              <FaUserTimes size={30} />
            </h4>
            <h5 className="text-lg flex items-center gap-1">
              <span>10</span>
              Eliminados
            </h5>
          </div>
        </div>
      </article>

      <article className="px-5 py-10 border border-gray-500/30 rounded-xl flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-gray-500/10">
        <h2 className="text-[80px]">50</h2>
        <h3 className="text-[40px] mb-8">Animes</h3>
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="w-full flex flex-col items-center gap-3">
            <h4 className="text-lg flex flex-col items-center gap-2">
              <SiGhostery size={30} />
            </h4>
            <h5 className="text-lg flex items-center gap-1">
              <span>10</span>
              Activos
            </h5>
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            <h4 className="text-lg flex flex-col items-center gap-2">
              <TbGhostOff size={30} />
            </h4>
            <h5 className="text-lg flex items-center gap-1">
              <span>10</span>
              Eliminados
            </h5>
          </div>
        </div>
      </article>

      <article className="px-5 py-10 border border-gray-500/30 rounded-xl flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-gray-500/10">
        <h2 className="text-[80px]">50</h2>
        <h3 className="text-[40px] mb-8">Studios</h3>
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="w-full flex flex-col items-center gap-3">
            <h4 className="text-lg flex flex-col items-center gap-2">
              <IoBusinessSharp size={30} />
            </h4>
            <h5 className="text-lg flex items-center gap-1">
              <span>10</span>
              Activos
            </h5>
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            <h4 className="text-lg flex flex-col items-center gap-2">
              <FaUserLock size={30} />
            </h4>
            <h5 className="text-lg flex items-center gap-1">
              <span>10</span>
              Eliminados
            </h5>
          </div>
        </div>
      </article>
      <article className="px-5 py-10 border border-gray-500/30 rounded-xl flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-gray-500/10">
        <h2 className="text-[80px]">50</h2>
        <h3 className="text-[40px] mb-8">Preguntas</h3>
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="w-full flex flex-col items-center gap-3">
            <h4 className="text-lg flex flex-col items-center gap-2">
              <FaUserCheck size={30} />
            </h4>
            <h5 className="text-lg flex items-center gap-1">
              <span>10</span>
              Activos
            </h5>
          </div>

          <div className="w-full flex flex-col items-center gap-3">
            <h4 className="text-lg flex flex-col items-center gap-2">
              <FaUserTimes size={30} />
            </h4>
            <h5 className="text-lg flex items-center gap-1">
              <span>10</span>
              Eliminados
            </h5>
          </div>
        </div>
      </article>
      <article className="px-5 py-10 border border-gray-500/30 rounded-xl flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-gray-500/10">
        <h2 className="text-[80px]">50</h2>
        <h3 className="text-[40px] mb-8">Autores</h3>
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="w-full flex flex-col items-center gap-3">
            <h4 className="text-lg flex flex-col items-center gap-2">
              <FaUserCheck size={30} />
            </h4>
            <h5 className="text-lg flex items-center gap-1">
              <span>10</span>
              Activos
            </h5>
          </div>

          <div className="w-full flex flex-col items-center gap-3">
            <h4 className="text-lg flex flex-col items-center gap-2">
              <FaUserTimes size={30} />
            </h4>
            <h5 className="text-lg flex items-center gap-1">
              <span>10</span>
              Eliminados
            </h5>
          </div>
        </div>
      </article>
      <article className="px-5 py-10 border border-gray-500/30 rounded-xl flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-gray-500/10">
        <h2 className="text-[80px]">50</h2>
        <h3 className="text-[40px] mb-8">Comentarios</h3>
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="w-full flex flex-col items-center gap-3">
            <h4 className="text-lg flex flex-col items-center gap-2">
              <FaUserCheck size={30} />
            </h4>
            <h5 className="text-lg flex items-center gap-1">
              <span>10</span>
              Activos
            </h5>
          </div>

          <div className="w-full flex flex-col items-center gap-3">
            <h4 className="text-lg flex flex-col items-center gap-2">
              <FaUserTimes size={30} />
            </h4>
            <h5 className="text-lg flex items-center gap-1">
              <span>10</span>
              Eliminados
            </h5>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Home;
