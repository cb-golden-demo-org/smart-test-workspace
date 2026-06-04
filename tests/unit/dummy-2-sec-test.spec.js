import { sleep } from "./helpers/dummy";

// Dummy test that sleeps ~2s, used to demo variable test durations in
// CloudBees Smart Tests.
describe("dummy-2-sec-test", () => {
  it(
    "dummy-2-sec-test",
    async () => {
      await sleep(2000);
      expect(true).toBe(true);
    },
    10000,
  );
});
