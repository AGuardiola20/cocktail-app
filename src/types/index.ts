import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
  SearchFilterShema,
} from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;

export type SearchFilter = z.infer<typeof SearchFilterShema>;

export type Drinks = z.infer<typeof DrinksAPIResponse>;
