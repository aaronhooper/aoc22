export type Shape = "rock" | "paper" | "scissors";
export type Outcome = "lost" | "drawn" | "won";
export type Letter = "A" | "B" | "C" | "X" | "Y" | "Z";
export type Score = number;

export const outcomeScore: Record<Outcome, Score> = {
  lost: 0,
  drawn: 3,
  won: 6,
};

export const shapeScore: Record<Shape, Score> = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

export const beats: Record<Shape, Shape> = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
};

export const letterShapes: Record<Letter, Shape> = {
  A: "rock",
  B: "paper",
  C: "scissors",
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

export const letterOutcomes: Record<Letter, Outcome> = {
  A: "lost",
  B: "drawn",
  C: "won",
  X: "lost",
  Y: "drawn",
  Z: "won",
};

export async function parse(filename: string): Promise<string[][]> {
  const input: string = await Deno.readTextFile(filename);

  return input
    .trim()
    .split("\n")
    .map((line) => line.split(" "));
}

export function playerShouldChooseShape(
  opponentChoice: Shape,
  playerShould: Outcome,
) {
  if (playerShould == "won") {
    return beats[opponentChoice];
  } else if (playerShould == "lost") {
    return beats[beats[opponentChoice]];
  } else {
    return beats[beats[beats[opponentChoice]]];
  }
}
