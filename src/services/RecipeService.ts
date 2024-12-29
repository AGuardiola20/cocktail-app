import axios from "axios";
import { CategoriesAPIResponseSchema } from "../utils/recipes-schema";

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const { data } = await axios(url);
  const res = CategoriesAPIResponseSchema.safeParse(data);
  if (res.success) {
    return res.data;
  }
}
