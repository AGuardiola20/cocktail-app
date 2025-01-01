import type { Drink } from "../types";
import { useAppStore } from "../stores/useAppStore";

type DrinkCardProps = {
  drink: Drink;
};

const DrinkCard = ({ drink }: DrinkCardProps) => {
  const selectRecipe = useAppStore((state) => state.selectRecipe);

  return (
    <div className="max-w-sm w-full rounded-lg border border-gray-200 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="relative group">
        <img
          src={drink.strDrinkThumb}
          alt={`${drink.strDrink} image`}
          className="w-full h-64 object-cover transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-in-out rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 truncate">
          {drink.strDrink}
        </h2>
        <button
          type="button"
          className="mt-4 w-full p-3 text-lg font-bold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-200 ease-in-out"
          onClick={() => selectRecipe(drink.idDrink)}
        >
          See recipe
        </button>
      </div>
    </div>
  );
};

export default DrinkCard;
