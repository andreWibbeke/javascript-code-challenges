import { assert } from "chai";
import * as Test from "../index.js";

describe("return true is password is strong, false otherwise", () => {
  it("should have at least 8 characters", () => {
    assert.strictEqual(Test.hasEightChars("1234567"), false);
  });

  it("should have at least 8 characters", () => {
    assert.strictEqual(Test.hasEightChars("12345678"), true);
  });

  it("should have at least 8 characters", () => {
    assert.strictEqual(Test.hasEightChars("123456789"), true);
  });

  it("should have at least one lowercase character", () => {
    assert.strictEqual(Test.hasLowercaseChar("123456789"), false);
  });

  it("should have at least one lowercase character", () => {
    assert.strictEqual(Test.hasLowercaseChar("a23456789"), true);
  });

  it("should have at least one lowercase character", () => {
    assert.strictEqual(Test.hasLowercaseChar("ab3456789"), true);
  });

  it("should have at least one uppercase character", () => {
    assert.strictEqual(Test.hasUppercaseChar("ab3456789"), false);
  });

  it("should have at least one uppercase character", () => {
    assert.strictEqual(Test.hasUppercaseChar("abC456789"), true);
  });

  it("should have at least one uppercase character", () => {
    assert.strictEqual(Test.hasUppercaseChar("abCD56789"), true);
  });

  it("should have at least one digit", () => {
    assert.strictEqual(Test.hasDigit("abCDzzzzz"), false);
  });

  it("should have at least one digit", () => {
    assert.strictEqual(Test.hasDigit("abCDzzzz1"), true);
  });

  it("should have at least one digit", () => {
    assert.strictEqual(Test.hasDigit("abCD56789"), true);
  });

  it("should have at least one special char", () => {
    assert.strictEqual(Test.hasSpecialChar("abCD56789"), false);
  });

  it("should have at least one special char", () => {
    assert.strictEqual(Test.hasSpecialChar("abCD*6789"), true);
  });

  it("should have at least one special char", () => {
    assert.strictEqual(Test.hasSpecialChar("abCD*?789"), true);
  });

  it("should return false", () => {
    assert.strictEqual(Test.isValidPassword("1234"), false);
  });

  it("should return true", () => {
    assert.strictEqual(Test.isValidPassword("Th!s5tr0ngP@W"), true);
  });
});
