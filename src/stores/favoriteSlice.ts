import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoriteSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExist: (id: Recipe[`idDrink`]) => boolean;
};

export const createFavoriteSlice: StateCreator<FavoriteSliceType> = (
  set,
  get
) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (get().favoriteExist(recipe.idDrink)) {
      set({
        favorites: [
          ...get().favorites.filter(
            (favorite) => favorite.idDrink !== recipe.idDrink
          ),
        ],
      });
    } else {
      set({
        favorites: [...get().favorites, recipe],
      });
    }
  },
  favoriteExist: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },
});
