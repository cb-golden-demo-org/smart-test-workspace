// Helper for the dummy demo tests that exercise variable test durations.
//
// Real wall-clock durations are used by default so CloudBees Smart Tests can
// highlight slow vs. fast tests in the results view. To shrink them while
// iterating locally, set DUMMY_DURATION_SCALE, e.g.:
//
//   DUMMY_DURATION_SCALE=0.02 npx jest dummy
//
const scale = parseFloat(process.env.DUMMY_DURATION_SCALE || "1");

// Sleep for `ms` milliseconds (scaled by DUMMY_DURATION_SCALE).
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms * scale));

module.exports = { sleep, scale };
