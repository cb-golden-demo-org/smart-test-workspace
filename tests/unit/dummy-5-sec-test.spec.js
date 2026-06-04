import { sleep } from "./helpers/dummy";

// Dummy test that sleeps ~5s, used to demo variable test durations in
// CloudBees Smart Tests.
describe("dummy-5-sec-test", () => {
  it(
    "dummy-5-sec-test",
    async () => {
      await sleep(5000);
      expect(true).toBe(true);
    },
    15000,
  );
});
