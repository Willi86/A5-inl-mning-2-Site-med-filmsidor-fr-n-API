import { expect, test } from "@jest/globals";
import request from "supertest";
import app from "../app.js";

test("Home page shows ticket link ", async () => {
  const response1 = await request(app)
    .get("/tickets")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);
  expect(response1.text).toMatch("Isle of dogs");
  expect(response1.text).toMatch("Pulp Fiction");
  expect(response1.text).toMatch("Encanto");
  expect(response1.text).toMatch("Min granne Totoro");
  expect(response1.text).toMatch("The Shawshank Redemption");
  expect(response1.text).toMatch("Forrest Gump");
  expect(response1.text).toMatch("The Muppets");
  //expect(response1.text).toMatch("avatar"); // to test if its working
});
//check img
test("Movie page shows images", async () => {
    const response = await request(app)
      .get("/movies/%208")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200);
  
    expect(response.text).toMatch("<img"); 
  });
  
  test("Movie page shows images", async () => {
    const response = await request(app)
      .get("/movies/%202")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200);
  
    expect(response.text).toMatch("<img"); 
  });
  
  test("Movie page shows images", async () => {
    const response = await request(app)
      .get("/movies/%203")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200);
  
    expect(response.text).toMatch("<img"); 
  });
  test("Movie page shows images", async () => {
    const response = await request(app)
      .get("/movies/%204")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200);
  
    expect(response.text).toMatch("<img"); 
  });
  test("Movie page shows images", async () => {
    const response = await request(app)
      .get("/movies/%205")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200);
  
    expect(response.text).toMatch("<img"); 
  });
  test("Movie page shows images", async () => {
    const response = await request(app)
      .get("/movies/%206")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200);
  
    expect(response.text).toMatch("<img"); 
  });
 
