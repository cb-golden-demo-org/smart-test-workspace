// Intentionally flaky tests, used to demo CloudBees Smart Tests flaky-test
// detection. Both tests depend on a single 50/50 draw evaluated once per run,
// simulating an intermittent shared dependency (e.g. a service that is
// sometimes unavailable). Because they share one coin flip rather than each
// flipping independently, the suite as a whole passes ~50% of the time
// instead of compounding down to a much lower pass rate.
//
// Across runs the outcome flips with no code change, which is the signal
// Smart Tests flags as flakiness. Run repeatedly to build up the mixed
// pass/fail history the demo relies on, e.g.:
//
//   for i in $(seq 1 10); do npx jest flaky; done
//
// Retry each failed test up to 5 times before reporting failure. The draw is
// re-evaluated on every attempt (inside each test), so retries genuinely cut
// the per-test failure rate from ~50% toward 0.5^6 (~1.6%). Must be called at
// the top level and requires the default jest-circus runner.
jest.retryTimes(5, { logErrorsBeforeRetry: true });

describe("flaky tests (demo)", () => {
  // A fresh 50/50 draw per attempt — required for retries to change the
  // outcome. (A single module-level draw would stay fixed across retries.)
  it("flaky-test-reads-from-flaky-service", () => {
    const serviceAvailable = Math.random() < 0.5;
    expect(serviceAvailable).toBe(true);
  });

  it("flaky-test-writes-to-flaky-service", () => {
    const serviceAvailable = Math.random() < 0.5;
    expect(serviceAvailable).toBe(true);
  });
});
