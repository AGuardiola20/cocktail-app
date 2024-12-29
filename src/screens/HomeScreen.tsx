import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

const HomeScreen = () => {
  const drinks = useAppStore((state) => state.drinks);

  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks]);
  return (
    <>
      <h1 className="text-6xl font-extrabold">Recipes</h1>
      {hasDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-1 gap-10">
          {drinks.drinks.map((drink) => {
            return <DrinkCard key={drink.idDrink} drink={drink} />;
          })}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          No results yet, use the form to consult recipes
        </p>
      )}
    </>
  );
};

export default HomeScreen;
