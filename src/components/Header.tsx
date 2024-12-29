import { useEffect, useMemo } from "react";
import Logo from "../assets/imgs/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

const Header = () => {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);

  useEffect(() => {
    fetchCategories();
  });

  return (
    <header
      className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src={Logo} alt="Logo" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/favoritos"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favorites
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Name or ingredients
              </label>
              <input
                type="text"
                name="ingredient"
                id="ingredient"
                className="p-3 w-full focus:outline-none rounded-lg"
                placeholder="Name or ingredients. Ej. Vodka, Tequila Coffee"
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                className="p-3 w-full focus:outline-none rounded-lg"
              >
                <option value="" className="text-center">
                  ---Select an option---
                </option>
              </select>
            </div>
            <input
              type="submit"
              value="Search"
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full rounded-lg uppercase p-2"
            />
          </form>
        )}
      </div>
    </header>
  );
};

export default Header;
