import { sleep } from "./helpers/dummy";

// Dummy test that sleeps ~30s, used to demo variable test durations in
// CloudBees Smart Tests.
describe("dummy-30-sec-test", () => {
  it(
    "dummy-30-sec-test",
    async () => {
      await sleep(30000);
      expect(true).toBe(true);
    },
    60000,
  );
});
