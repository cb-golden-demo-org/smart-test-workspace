// Intentionally flaky tests, used to demo CloudBees Smart Tests flaky-test
// detection. These pass or fail nondeterministically from run to run with no
// code change, which is exactly the signal Smart Tests flags as flakiness.
//
// Run them a handful of times to build up the mixed pass/fail history the
// demo relies on, e.g.:
//
//   for i in $(seq 1 10); do npx jest flaky; done
//
describe("flaky tests (demo)", () => {
  it("flaky-test-fails-50-percent", () => {
    // Fails roughly half the time.
    expect(Math.random()).toBeLessThan(0.5);
  });

  it("flaky-test-fails-30-percent", () => {
    // Fails roughly 30% of the time.
    expect(Math.random()).toBeGreaterThan(0.3);
  });

  it("flaky-test-timing-based", async () => {
    // Flakes on event-loop timing jitter rather than a fixed probability.
    const start = Date.now();
    await new Promise((resolve) => setTimeout(resolve, 5));
    expect((Date.now() - start) % 2).toBe(0);
  });
});
