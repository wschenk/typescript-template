import { command, restPositionals } from "cmd-ts";

export const complete = command({
  name: "complete",
  args: {
    prompt: restPositionals({
      description: "The prompt to use",
      displayName: "prompt",
    }),
  },
  handler: async ({ prompt }) => {
    console.log("Running prompt", prompt);
  },
});

export default complete;
