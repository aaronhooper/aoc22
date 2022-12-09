import { findDuplicatedItem, itemPriorities, parse } from "./lib.ts";

const rucksacks = await parse("input.txt");
const duplicatedItems = [];

for (const rucksack of rucksacks) {
  const item = findDuplicatedItem(rucksack);
  duplicatedItems.push(item);
}

const sumOfPriorities = duplicatedItems
  .map((item) => itemPriorities[item])
  .reduce((all, item) => all + item);

console.log(sumOfPriorities);
