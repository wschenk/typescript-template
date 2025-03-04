import { describe, it, expect, jest } from "@jest/globals";
import { complete, sayHi } from "./complete.js";
import { run } from "cmd-ts";

describe("complete command", () => {
  it("should be defined", () => {
    expect(complete).toBeDefined();
  });

  it("should have the correct name", () => {
    expect(complete.name).toBe("complete");
  });

  it("should handle prompt arguments", async () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const args = ["test", "prompt"];

    await run(complete, args);

    expect(consoleSpy).toHaveBeenCalledWith("Running prompt", args);
    consoleSpy.mockRestore();
  });

  it("should handle empty prompt", async () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const args: string[] = [];

    await run(complete, args);

    expect(consoleSpy).toHaveBeenCalledWith("Running prompt", args);
    consoleSpy.mockRestore();
  });
});

describe("sayHi function", () => {
  it("should return a greeting", () => {
    expect(sayHi("John")).toBe("Hello, John!");
  });

  it("should handle empty name", () => {
    expect(sayHi("")).toBe("Hello!");
  });
});
