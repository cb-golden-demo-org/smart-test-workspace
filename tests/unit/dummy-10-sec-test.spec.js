import { sleep } from "./helpers/dummy";

// Dummy test that sleeps ~10s, used to demo variable test durations in
// CloudBees Smart Tests.
describe("dummy-10-sec-test", () => {
  it(
    "dummy-10-sec-test",
    async () => {
      await sleep(10000);
      expect(true).toBe(true);
    },
    30000,
  );
});
