const supertest = require("supertest");
const { app, server } = require("../index");
const DBConnection = require("../db.config");

const api = supertest(app);

describe("Users api", () => {
  afterAll(() => {
    DBConnection.end();
    server.close();
  });
  beforeEach(async () => {});
  test("Users are returned as JSON", async () => {
    await api
      .get("/api/users")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Create Users are returned as JSON", async () => {
    await api
      .post("/api/users")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Delete Users are returned as JSON", async () => {
    await api
      .delete("/api/users")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});
