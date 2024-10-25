const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../src/app");
const { expect } = chai;

chai.use(chaiHttp);

describe("String Manipulation API Integration Tests", () => {
  it("should reverse a string via API", (done) => {
    chai
      .request(app)
      .get("/api/reverse")
      .query({ text: "integration" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("noitargetni");
        done();
      });
  });

  it("should convert a string to uppercase via API", (done) => {
    chai
      .request(app)
      .get("/api/uppercase")
      .query({ text: "integration" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("INTEGRATION");
        done();
      });
  });

  it("should count the vowels in a string via API", (done) => {
    chai
      .request(app)
      .get("/api/count-vowels")
      .query({ text: "integration" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("5");
        done();
      });
  });
});
