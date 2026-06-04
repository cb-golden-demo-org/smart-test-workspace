import { sleep } from "./helpers/dummy";

// Dummy test that sleeps ~5m, used to demo variable test durations in
// CloudBees Smart Tests.
describe("dummy-5-min-test", () => {
  it(
    "dummy-5-min-test",
    async () => {
      await sleep(300000);
      expect(true).toBe(true);
    },
    330000,
  );
});
