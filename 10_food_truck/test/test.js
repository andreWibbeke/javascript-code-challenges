import { assert } from "chai";
import { JSDOM } from "jsdom";
import {
  totalMenu,
  flattenMenuList,
  createListItems,
  appendChildren,
} from "../index.js";
import data from "../data/data.js";

describe("create a unique list of menu items and append it to the DOM", () => {
  let testData;
  before(() => {
    testData = ["pizza", "pasta", "pizza", "calzones", "lobster", "calzones"];
    const dom = new JSDOM(`
      <html>
        <body>
          <ul id="combined-menu">
          </ul>
        </body>
      </html>
    `);

    global.window = dom.window;
    global.document = window.document;
    global.HTMLLIElement = dom.window.HTMLLIElement;
    global.HTMLUListElement = dom.window.HTMLUListElement;
  });

  it("should return a combined array of all vendors", () => {
    assert.sameOrderedMembers(totalMenu(data), testData);
  });

  it("should remove all duplicates from the menu list", () => {
    assert.sameOrderedMembers(flattenMenuList(testData), [
      "pizza",
      "pasta",
      "calzones",
      "lobster",
    ]);
  });

  it("create an array of DOM list items", () => {
    const listItemList = createListItems(flattenMenuList(testData));
    listItemList.forEach((item) => assert.instanceOf(item, HTMLLIElement));
  });

  it("should append the list items to the DOM", function () {
    const ul = document.querySelector("#combined-menu");

    appendChildren(createListItems(flattenMenuList(testData)), ul);
    assert.lengthOf(document.querySelectorAll("li"), 4);
  });
});
