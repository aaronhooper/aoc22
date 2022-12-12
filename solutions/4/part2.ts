import { overlaps, parse } from "./lib.ts";

const parsed = await parse("input.txt");
console.log(parsed.filter(overlaps).length);
