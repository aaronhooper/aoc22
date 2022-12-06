const input: string = await Deno.readTextFile("input.txt");
const allSnacks: number[][] = input
  .trim()
  .split("\n\n")
  .map((chunk) => chunk.split("\n"));

const total: number = allSnacks.reduce((totalCalories, elfSnacks) => {
  const calories: number = elfSnacks.reduce((sum, calories) => {
    return sum + parseInt(calories, 10);
  }, 0);

  return calories > totalCalories ? calories : totalCalories;
}, 0);

console.log(total);
