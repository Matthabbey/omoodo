# Bug-fix workflow

Use this alongside the [code change workflow](code-change.md) whenever the task
corrects unintended behavior.

1. Reproduce the failure or trace it to a concrete code path before editing.
   Record the expected and actual behavior.
2. Find the root cause and the canonical owner of the faulty state or behavior.
3. Inspect closely related paths for the same failure mode without broadening
   the task unnecessarily.
4. Make a focused fix that preserves public contracts and unrelated behavior.
5. Add a regression test that fails before the fix and passes after it, when
   practical and supported by the project's test setup.
6. Verify the original failure, relevant edge cases, and focused static checks.
   Report any reproduction or verification that could not be completed.
