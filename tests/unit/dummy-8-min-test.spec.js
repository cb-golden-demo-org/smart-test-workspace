import { sleep } from "./helpers/dummy";

// Dummy test that sleeps ~8m, used to demo variable test durations in
// CloudBees Smart Tests.
describe("dummy-8-min-test", () => {
  it(
    "dummy-8-min-test",
    async () => {
      await sleep(480000);
      expect(true).toBe(true);
    },
    510000,
  );
});
