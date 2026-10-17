// release-verify-reporter (entry point)
// No-op stub: the actual telemetry is emitted by the postinstall
// hook, which runs once when the package is installed. This file
// exists to satisfy `require('release-verify-reporter')` if anything
// chooses to call it.

module.exports = {
  report: function () { /* no-op */ },
};
