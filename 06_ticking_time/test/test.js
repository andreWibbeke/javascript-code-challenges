import { assert } from "chai";
import { JSDOM } from "jsdom";
import Timer from "../index.js";

describe("timer instance", () => {
  describe("expectations about the object's properties", () => {
    before(() => {
      global.timer = new Timer();
    });

    it("should initialize with default values", () => {
      assert.deepEqual(timer, { seconds: 0, minutes: 0, hours: 0 });
    });
    it("should have a seconds property with a number value", () => {
      assert.isNumber(timer.seconds);
    });
    it("should have a minutes property with a number value", () => {
      assert.isNumber(timer.minutes);
    });
    it("should have a hours property with a number value", () => {
      assert.isNumber(timer.hours);
    });
  });

  describe("expectations about the object's methods", () => {
    beforeEach(() => {
      global.timer = new Timer();
    });

    before(() => {
      const dom = new JSDOM(
        `
      <html>
        <body>
          <div id="clock">
          </div>
        </body>
      </html>
      `
      );

      global.window = dom.window;
      global.document = dom.window.document;
    });

    it("should add two seconds when called twice", () => {
      timer.addSecond();
      timer.addSecond();
      assert.strictEqual(timer.seconds, 2);
    });
    it("should add two minutes when called twice", () => {
      timer.addMinute();
      timer.addMinute();
      assert.strictEqual(timer.minutes, 2);
    });
    it("should add two hours when called twice", () => {
      timer.addHour();
      timer.addHour();
      assert.strictEqual(timer.hours, 2);
    });
    it("should update seconds", function (done) {
      this.timeout(4000);
      const intervalID = timer.initializeTimer();
      setTimeout(() => {
        assert.strictEqual(timer.seconds, 3);
        clearInterval(intervalID);
        done();
      }, 3500);
    });
    it("should update minutes", function (done) {
      this.timeout(4000);
      const timer = new Timer(59, 0, 0);
      const intervalID = timer.initializeTimer();

      setTimeout(() => {
        assert.deepEqual(timer, { seconds: 2, minutes: 1, hours: 0 });
        clearInterval(intervalID);
        done();
      }, 3500);
    });
    it("should update hours", function (done) {
      this.timeout(4000);
      const timer = new Timer(59, 59, 0);
      const intervalID = timer.initializeTimer();

      setTimeout(() => {
        assert.deepEqual(timer, { seconds: 2, minutes: 0, hours: 1 });
        clearInterval(intervalID);
        done();
      }, 3500);
    });
  });

  describe("expectations about the DOM", () => {
    before(() => {
      const dom = new JSDOM(
        `
      <html>
        <body>
          <div id="clock">
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
    });

    it("should display a certain time after running", function (done) {
      this.timeout(6000);
      const timer = new Timer(59, 59, 3);
      const intervalID = timer.initializeTimer();

      setTimeout(() => {
        const clock = document.querySelector("#clock");
        assert.strictEqual(clock.textContent, "4:0:4");
        clearInterval(intervalID);
        done();
      }, 5500);
    });
  });
});
