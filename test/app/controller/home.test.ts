import * as assert from "assert";
import { app } from "egg-mock/bootstrap";

describe("test/app/controller/home.test.ts", () => {
  it("should GET /", async () => {
    const result = await app
      .httpRequest()
      .get("/")
      .expect(200);
    assert(result.text === "hi, egg");
  });

  it("should redirect", async () => {
    await app
      .httpRequest()
      .get("/redirect")
      .expect(302);
  });
});
