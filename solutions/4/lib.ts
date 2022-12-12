export async function parse(filename: string): Promise<string[][]> {
  const input = await Deno.readTextFile(filename);

  return input
    .split("\n")
    .map((line) => line.split(","));
}

export function contained(pair: string[]): boolean {
  const assignment1 = pair[0].split("-").map((section) => parseInt(section));
  const assignment2 = pair[1].split("-").map((section) => parseInt(section));

  // Need to check both directions, because if assignment A is not contained
  // by assignment B, then assignment B might be contained by assignment A.
  if (assignment1[0] >= assignment2[0] && assignment1[1] <= assignment2[1]) {
    return true;
  }
  if (assignment1[0] <= assignment2[0] && assignment1[1] >= assignment2[1]) {
    return true;
  }

  return false;
}

export function overlaps(pair: string[]): boolean {
  const assignment1 = pair[0].split("-").map((section) => parseInt(section));
  const assignment2 = pair[1].split("-").map((section) => parseInt(section));

  if (assignment1[0] <= assignment2[0] && assignment1[1] >= assignment2[0]) {
    return true;
  }
  if (assignment1[0] >= assignment2[0] && assignment2[1] >= assignment1[0]) {
    return true;
  }

  return false;
}
