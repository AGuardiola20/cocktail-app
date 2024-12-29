import axios from "axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
} from "../utils/recipes-schema";
import { SearchFilter } from "../types";

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
