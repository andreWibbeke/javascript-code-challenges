import { assert } from "chai";
import { JSDOM } from "jsdom";
import { allDishes, vegetarianDishes } from "../data/data.js";
import {
  filterList,
  createListItems,
  createUnorderedList,
  appendAsChild,
} from "../assets/createList.js";

describe("Movie class", function () {
  describe("Create list items", () => {
    beforeEach(() => {
      const dom = new JSDOM(
        `
      <html>
        <body>
          <div id="list">
          </div>
        </body>
      </html>
      `,
        {
          url: "http://localhost",
        }
      );

      global.window = dom.window;
      global.document = dom.window.document;
      global.HTMLLIElement = dom.window.HTMLLIElement;
      global.HTMLUListElement = dom.window.HTMLUListElement;
    });

    it("should filter an array", function () {
      assert.deepEqual(filterList(allDishes, "vegetarian"), vegetarianDishes);
    });

    it("should create an array with four items", function () {
      const list = createListItems(vegetarianDishes);
      assert.typeOf(list, "array");
      assert.lengthOf(list, 4);
    });

    it("should return an array with four HTMLLIElement's", function () {
      const listItems = createListItems(filterList(allDishes, "vegetarian"));
      listItems.forEach((item) => assert.instanceOf(item, HTMLLIElement));
    });

    it("should create an unordered DOM list", function () {
      const ul = createUnorderedList(
        createListItems(filterList(allDishes, "vegetarian"))
      );
      assert.instanceOf(ul, HTMLUListElement);
    });

    it("should append an unordered DOM list to the div element with id = list", function () {
      const divList = document.querySelector("#list");
      appendAsChild(
        createUnorderedList(
          createListItems(filterList(allDishes, "vegetarian"))
        ),
        divList
      );
      assert.instanceOf(document.querySelector("ul"), HTMLUListElement);
    });
  });
});
