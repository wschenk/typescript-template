import { complete } from "@/complete";

describe("complete command", () => {
  it("should be defined", () => {
    expect(complete).toBeDefined();
  });

  it("should have the correct name", () => {
    expect(complete.name).toBe("complete");
  });
});
