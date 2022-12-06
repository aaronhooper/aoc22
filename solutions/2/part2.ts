import {
  Letter,
  letterOutcomes,
  letterShapes,
  Outcome,
  outcomeScore,
  parse,
  playerShouldChooseShape,
  Shape,
  shapeScore,
} from "./lib.ts";

const strategy: string[][] = await parse("input.txt");

const answer: number = strategy.reduce((finalScore, gameResult) => {
  const opponentChoice: Shape = letterShapes[gameResult[0] as Letter];
  const playerShould: Outcome = letterOutcomes[gameResult[1] as Letter];
  const playerChoice: Shape = playerShouldChooseShape(
    opponentChoice,
    playerShould,
  );

  return finalScore + shapeScore[playerChoice] + outcomeScore[playerShould];
}, 0);

console.log(answer);
