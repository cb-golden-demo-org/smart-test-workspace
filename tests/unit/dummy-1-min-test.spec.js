import { sleep } from "./helpers/dummy";

// Dummy long-running test used to demo variable test durations in CloudBees
// Smart Tests. Sleeps ~60s so it stands out as the slowest test in the suite.
// Per-test timeout is raised above the sleep so it does not abort.
describe("dummy-1-min-test", () => {
  it(
    "dummy-1-min-test",
    async () => {
      await sleep(60000);
      expect(true).toBe(true);
    },
    120000,
  );
});
