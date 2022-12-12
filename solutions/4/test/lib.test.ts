import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { contained, overlaps } from "../lib.ts";

Deno.test("contained() returns true when one assignment fully contains another", () => {
  let result = contained(["2-8", "3-7"]);
  let expected = true;
  assertEquals(result, expected);

  result = contained(["3-7", "2-8"]);
  expected = true;
  assertEquals(result, expected);
});

Deno.test("contained() returns false when one assignment does not fully contain another", () => {
  const result = contained(["2-4", "6-8"]);
  const expected = false;

  assertEquals(result, expected);
});

Deno.test("overlaps() returns true for overlapping assignments #1", () => {
  const result = overlaps(["2-8", "3-7"]);
  const expected = true;
  assertEquals(result, expected);
});

Deno.test("overlaps() returns true for overlapping assignments #2", () => {
  const result = overlaps(["3-7", "2-8"]);
  const expected = true;
  assertEquals(result, expected);
});

Deno.test("overlaps() returns true for overlapping assignments #3", () => {
  const result = overlaps(["3-7", "6-12"]);
  const expected = true;
  assertEquals(result, expected);
});

Deno.test("overlaps() returns true for overlapping assignments #4", () => {
  const result = overlaps(["6-12", "3-7"]);
  const expected = true;
  assertEquals(result, expected);
});

Deno.test("overlaps() returns false for assignments that do not overlap #1", () => {
  const result = overlaps(["2-4", "6-8"]);
  const expected = false;
  assertEquals(result, expected);
});

Deno.test("overlaps() returns false for assignments that do not overlap #2", () => {
  const result = overlaps(["6-8", "2-4"]);
  const expected = false;
  assertEquals(result, expected);
});
