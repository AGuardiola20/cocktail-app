import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { NotificationSliceType } from "./notificationSlice";

export type FavoriteSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExist: (id: Recipe[`idDrink`]) => boolean;
  loadFromStorage: () => void;
};

export const createFavoriteSlice: StateCreator<
  FavoriteSliceType & NotificationSliceType,
  [],
  [],
  FavoriteSliceType
> = (set, get) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    const { favorites, favoriteExist } = get();
    const { showNotification } = get();

    if (favoriteExist(recipe.idDrink)) {
      set({
        favorites: favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink
        ),
      });
      showNotification({
        text: "Recipe deleted successfully!",
        error: true,
      });
    } else {
      set({
        favorites: [...favorites, recipe],
      });
      showNotification({
        text: "Recipe added successfully!",
        error: false,
      });
    }

    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
  favoriteExist: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },
  loadFromStorage: () => {
    const storeFavorites = localStorage.getItem("favorites");
    if (storeFavorites) {
      set({
        favorites: JSON.parse(storeFavorites),
      });
    }
  },
});
