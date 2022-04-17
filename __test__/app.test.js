import request from "supertest";
import {app} from "../src/app";

describe("Lista de usuarios", () => {
    test("METHOD GET", async() => {
        // async() await ,espera q la peticion result termine 
        // para recien pasar a la otra
        const result= await request(app).get("/user");

        expect(result.status).toBe(200);
        expect(result.ok).toBe(true);
    });
});

// POST
describe("Creacion de usuario", () => {
    test("METHOD POST", async () => {
      const body = {
        name: "Alvaro Huaman",
        email: "alvaro@gmail.com",
        phone_number: "999999",
      };
  
      const result = await request(app).post("/user/store").send(body);
  
      expect(result.status).toBe(201);
      expect(result.ok).toBe(true);
    });
  });