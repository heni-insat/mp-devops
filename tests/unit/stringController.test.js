const { expect } = require("chai");
const {
  reverse,
  uppercase,
  countVowels,
} = require("../../src/controllers/stringController");

describe("String Manipulation Controller Unit Tests", () => {
  it("should reverse a string", () => {
    const req = { query: { text: "hello" } };
    const res = {
      send: (output) => expect(output).to.equal("olleh"),
      set: () => {},
    };
    reverse(req, res);
  });

  it("should convert a string to uppercase", () => {
    const req = { query: { text: "hello" } };
    const res = {
      send: (output) => expect(output).to.equal("HELLO"),
      set: () => {},
    };
    uppercase(req, res);
  });

  it("should count the vowels in a string", () => {
    const req = { query: { text: "hello" } };
    const res = {
      send: (output) => expect(output).to.equal("2"),
      set: () => {},
    };
    countVowels(req, res);
  });

  it("should convert a string to lowercase", () => {
    const req = { query: { text: "HELLO" } };
    const res = {
      send: (output) => expect(output).to.equal("hello"),
      set: () => {},
    };
    lowercase(req, res);
  });
});
