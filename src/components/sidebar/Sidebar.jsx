import { RiHomeLine } from "react-icons/ri";
import {
  TbBrandHipchat,
  TbBuilding,
  TbEyeglass,
  TbGhostFilled,
  TbMessageSearch,
  TbUsers,
} from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="fixed w-[13vw] bg-primary h-full border-l border-gray-500/20 flex flex-col">
      <section className="p-8 border-b border-gray-500/20">
        <div className="w-12 h-12 relative mb-4">
          <img
            src="/vite.svg"
            alt=""
            className="w-full h-full absolute object-cover"
          />
        </div>
        <h3 className="text-sm text-gray-500">
          Cristhian Rodríguez (<span>Sempai</span>){" "}
        </h3>
      </section>
      {/* Section menu */}
      <section className="pt-0">
        <ul>
          <NavLink
            to={"/home"}
            className="px-8 py-5 text-gray-500 flex items-center
             gap-2 border-b border-gray-500/30 hover:text-white hover:bg-gray-500/10 transition-all duration-300"
          >
            <RiHomeLine size={20} />
            Home
          </NavLink>
          <NavLink
            to={"/home"}
            className="px-8 py-5 text-gray-500 flex items-center
             gap-2 border-b border-gray-500/30 hover:text-white hover:bg-gray-500/10 transition-all duration-300"
          >
            <TbGhostFilled size={20} />
            Animes
          </NavLink>

          <NavLink
            to={"/home"}
            className="px-8 py-5 text-gray-500 flex items-center
             gap-2 border-b border-gray-500/30 hover:text-white hover:bg-gray-500/10 transition-all duration-300"
          >
            <TbMessageSearch size={20} />
            Comentarios
          </NavLink>
          <NavLink
            to={"/home"}
            className="px-8 py-5 text-gray-500 flex items-center
             gap-2 border-b border-gray-500/30 hover:text-white hover:bg-gray-500/10 transition-all duration-300"
          >
            <TbUsers size={20} />
            Usuarios
          </NavLink>
          <NavLink
            to={"/home"}
            className="px-8 py-5 text-gray-500 flex items-center
             gap-2 border-b border-gray-500/30 hover:text-white hover:bg-gray-500/10 transition-all duration-300"
          >
            <TbBuilding size={20} />
            Studios
          </NavLink>

          <NavLink
            to={"/home"}
            className="px-8 py-5 text-gray-500 flex items-center
             gap-2 border-b border-gray-500/30 hover:text-white hover:bg-gray-500/10 transition-all duration-300"
          >
            <TbEyeglass size={20} />
            Authors
          </NavLink>

          <NavLink
            to={"/home"}
            className="px-8 py-5 text-gray-500 flex items-center
             gap-2 border-b border-gray-500/30 hover:text-white hover:bg-gray-500/10 transition-all duration-300"
          >
            <TbBrandHipchat size={20} />
            Q&A
          </NavLink>
        </ul>
      </section>

      <button className="absolute text-gray-500  bottom-0 px-8 py-5 border-t border-gray-500/30 w-full hover:bg-gray-500/10 hover:text-white transition-all duration-300 ">
        Cerrar sesion
      </button>
    </aside>
  );
};

export default Sidebar;
