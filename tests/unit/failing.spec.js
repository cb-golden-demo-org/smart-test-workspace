// Intentionally failing tests, used to demo how failures surface in CloudBees
// Smart Tests results and in the published JUnit evidence.
//
// NOTE: these ALWAYS fail. The "Run unit tests" step in
// .cloudbees/workflows/workflow.yaml is not marked continue-on-error, so a
// non-zero jest exit here will fail the `test` job and block the downstream
// `build-container-image` job (needs: test). Gate or remove this file when a
// green end-to-end pipeline is required.
describe("intentionally failing tests (demo)", () => {
  it("intentionally-failing-assertion", () => {
    expect(1 + 1).toBe(3);
  });

  it("intentionally-failing-thrown-error", () => {
    throw new Error("Demo failure: simulated defect in feature X");
  });
});
