import { assert } from "chai";
import urlify from "../index.js";

describe("urlify function", () => {
  it("should return a url friendly string", () => {
    assert.strictEqual(urlify("My blog name!"), "my-blog-name");
  });

  it("should return a url friendly string", () => {
    assert.strictEqual(urlify("Andre's blog."), "andres-blog");
  });

  it("should return a url friendly string", () => {
    assert.strictEqual(urlify("Did you know?"), "did-you-know");
  });

  it("should return a url friendly string", () => {
    assert.strictEqual(
      urlify("#5 most recent updates"),
      "5-most-recent-updates"
    );
  });

  it("should return a url friendly string", () => {
    assert.strictEqual(urlify(" tHiS iS !aweSomE! "), "this-is-awesome");
  });
});
