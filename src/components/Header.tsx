import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import Logo from "../assets/imgs/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

const Header = () => {
  const [searchFilter, setSearchFilter] = useState({
    ingredient: "",
    category: "",
  });
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  const showNotification = useAppStore((state) => state.showNotification);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchFilter({
      ...searchFilter,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(searchFilter).includes("")) {
      showNotification({
        text: "All form fields are required!",
        error: true,
      });
      return;
    }

    searchRecipes(searchFilter);
  };

  return (
    <header className="bg-gradient-to-r  from-orange-500 to-red-500 shadow-lg p-5">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="Logo" className="w-36" />
        <nav className="flex gap-8 text-lg font-semibold text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 underline decoration-4"
                : "hover:text-yellow-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favoritos"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 underline decoration-4"
                : "hover:text-yellow-300"
            }
          >
            Favorites
          </NavLink>
        </nav>
      </div>
      {isHome && (
        <div className="flex justify-center items-center py-20 bg-gradient-to-r from-orange-500 to-red-500">
          <form
            className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-3xl space-y-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-extrabold text-gray-800 text-center">
              Find Your Perfect Recipe
            </h2>
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-lg font-semibold text-gray-600"
              >
                Name or Ingredients
              </label>
              <input
                type="text"
                name="ingredient"
                id="ingredient"
                className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="E.g., Vodka, Tequila, Coffee"
                onChange={handleChange}
                value={searchFilter.ingredient}
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-lg font-semibold text-gray-600"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                onChange={handleChange}
                value={searchFilter.category}
              >
                <option value="">--- Select an option ---</option>
                {categories.drinks.map((drink, index) => (
                  <option key={index} value={drink.strCategory}>
                    {drink.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all ease-in-out"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
