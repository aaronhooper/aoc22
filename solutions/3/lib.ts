export async function parse(filename: string): Promise<string[][]> {
  const contents: string = await Deno.readTextFile(filename);

  return contents
    .trim()
    .split("\n")
    .map((rucksack) => {
      const midpoint = rucksack.length / 2;
      const firstCompartment = rucksack.substring(0, midpoint);
      const secondCompartment = rucksack.substring(midpoint);

      return [firstCompartment, secondCompartment];
    });
}

export function findDuplicatedItem(rucksack: string[]): string {
  const firstCompartment = rucksack[0];
  const secondCompartment = rucksack[1];
  let duplicatedItem = "";

  for (const item of firstCompartment) {
    if (secondCompartment.includes(item)) {
      duplicatedItem = item;
    }
  }

  return duplicatedItem;
}

function mergeCompartments(rucksack: string[]): string {
  return rucksack[0].concat(rucksack[1]);
}

export function findGroupItem(rucksacks: string[][]): string {
  const mergedRucksacks = rucksacks.map(mergeCompartments);
  let groupItem = "";

  for (const item of mergedRucksacks[0]) {
    if (
      mergedRucksacks[1].includes(item) && mergedRucksacks[2].includes(item)
    ) {
      groupItem = item;
      break;
    }
  }

  return groupItem;
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const itemPriorities = (alphabet + alphabet.toUpperCase())
  .split("")
  .reduce<Record<string, number>>(
    (record, letter, priority) => {
      record[letter] = priority + 1;
      return record;
    },
    {},
  );
