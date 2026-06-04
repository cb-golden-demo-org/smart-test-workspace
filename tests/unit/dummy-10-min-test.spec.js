import { sleep } from "./helpers/dummy";

// Dummy test that sleeps ~10m, used to demo variable test durations in
// CloudBees Smart Tests. This is the slowest test in the suite.
describe("dummy-10-min-test", () => {
  it(
    "dummy-10-min-test",
    async () => {
      await sleep(600000);
      expect(true).toBe(true);
    },
    660000,
  );
});
