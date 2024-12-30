import { useMemo } from "react";
import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

const FavoriteScreen = () => {
  const favorites = useAppStore((state) => state.favorites);

  const hasFavorites = useMemo(() => favorites.length, [favorites]);
  return (
    <>
      <h1 className="text-6xl font-extrabold">Favorites</h1>
      {hasFavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-1 gap-10">
          {favorites.map((drink) => {
            return <DrinkCard key={drink.idDrink} drink={drink} />;
          })}
        </div>
      ) : (
        <p className="my-2 text-center text-2xl">
          Favorites will be displayed here
        </p>
      )}
    </>
  );
};

export default FavoriteScreen;
