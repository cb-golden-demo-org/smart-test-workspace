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
describe("flaky tests (demo)", () => {
  // One 50/50 draw per test-file execution drives both assertions below.
  const serviceAvailable = Math.random() < 0.5;

  it("flaky-test-reads-from-flaky-service", () => {
    expect(serviceAvailable).toBe(true);
  });

  it("flaky-test-writes-to-flaky-service", () => {
    expect(serviceAvailable).toBe(true);
  });
});
