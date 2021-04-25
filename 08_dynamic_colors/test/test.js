import { assert } from "chai";
import { JSDOM } from "jsdom";
import changeColor from "../index.js";

describe("changeColor() function", () => {
  let style;

  before(() => {
    const dom = new JSDOM(`
      <html>
        <body>
          <button id="green">Green</button>
          <button id="orange">Orange</button>
          <button id="red">Red</button>
        </body>
      </html>
    `);

    global.window = dom.window;
    global.document = window.document;
    global.body = document.body;
  });

  it("should have a background color of green", () => {
    changeColor("green")();
    assert.strictEqual(body.style.backgroundColor, "green");
  });

  it("should have a background color of orange", () => {
    changeColor("orange")();
    assert.strictEqual(body.style.backgroundColor, "orange");
  });

  it("should have a background color of red", () => {
    changeColor("red")();
    assert.strictEqual(body.style.backgroundColor, "red");
  });
});
