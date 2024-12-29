import axios from "axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
} from "../utils/recipes-schema";
import { Drink, SearchFilter } from "../types";

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const { data } = await axios(url);
  const res = CategoriesAPIResponseSchema.safeParse(data);
  if (res.success) {
    return res.data;
  }
}

export async function getRecipes(filters: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
  const { data } = await axios(url);
  const res = DrinksAPIResponse.safeParse(data);
  if (res.success) {
    return res.data;
  }
}

export async function getRecipeById(id: Drink["idDrink"]) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data } = await axios(url);
  const res = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  if (res.success) {
    return res.data;
  }
}
