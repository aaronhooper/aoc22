const input: string = await Deno.readTextFile("input.txt");
const allSnacks: number[][] = input
  .trim()
  .split("\n\n")
  .map((chunk) => chunk.split("\n"));

const totals: number[] = allSnacks.reduce((total, elfSnacks) => {
  const elfTotal: number = elfSnacks.reduce((sum, calories) => {
    sum += parseInt(calories, 10);
    return sum;
  }, 0);

  total.push(elfTotal);
  return total;
}, []);

totals.sort();

const answer: number = totals
  .reverse()
  .slice(0, 3)
  .reduce((sum, calories) => sum + calories);

console.log(answer);
