import imageResize from "../routes/utilities/imageReszie";
import supertest from "supertest";
import app from "../index";

describe("Testing Images processing API", () => {
  // it("It should return the path for the new resized image", async () => {
  //   const path = await imageResize("fjord", 400, 200);
  //   expect(path).toBe(`F:/Udacity/ImageProcessor/thumb/fjord_thumb.jpg`);
  // });

  it("It should return instructions for the right URL format", async () => {
    const Response = await supertest(app)
      .get("/api/images")
      .query({ filename: "encenadaport", width: 200 });
    expect(Response.status).toBe(400);
  });

  it("It should return 404 response for does not exist filename", async () => {
    const Response = await supertest(app)
      .get("/api/images")
      .query({ filename: "WrongFileName", width: 200, height: 400 });
    expect(Response.status).toBe(404);
  });
});
