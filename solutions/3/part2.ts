import { findGroupItem, itemPriorities, parse } from "./lib.ts";

const rucksacks = await parse("input.txt");
const groupCount = rucksacks.length / 3;
const groupItems = [];

for (let i = 0; i < groupCount; i++) {
  const groupRucksacks = rucksacks.slice(0, 3);
  rucksacks.splice(0, 3);
  const groupItem = findGroupItem(groupRucksacks);
  groupItems.push(groupItem);
}

const sumOfPriorities = groupItems
  .map((item) => itemPriorities[item])
  .reduce((all, item) => all + item);

console.log(sumOfPriorities);
