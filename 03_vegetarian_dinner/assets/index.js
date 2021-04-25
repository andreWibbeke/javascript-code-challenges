import { allDishes as dishes } from "../data/data.js";
import {
  filterList,
  createListItems,
  createUnorderedList,
  appendAsChild,
} from "./createList.js";

appendAsChild(
  createUnorderedList(createListItems(filterList(dishes, "vegetarian"))),
  document.querySelector("#list")
);
