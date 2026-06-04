import { sleep } from "./helpers/dummy";

// Dummy test that sleeps ~2m, used to demo variable test durations in
// CloudBees Smart Tests.
describe("dummy-2-min-test", () => {
  it(
    "dummy-2-min-test",
    async () => {
      await sleep(120000);
      expect(true).toBe(true);
    },
    150000,
  );
});
