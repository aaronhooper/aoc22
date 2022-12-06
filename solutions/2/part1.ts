import {
  beats,
  Letter,
  letterShapes,
  outcomeScore,
  parse,
  Shape,
  shapeScore,
} from "./lib.ts";

const strategy: string[][] = await parse("input.txt");

const answer: number = strategy.reduce((finalScore, gameResult) => {
  const opponentChoice: Shape = letterShapes[gameResult[0] as Letter];
  const playerChoice: Shape = letterShapes[gameResult[1] as Letter];

  if (playerChoice === beats[opponentChoice]) {
    finalScore += outcomeScore.won;
  } else if (playerChoice === opponentChoice) {
    finalScore += outcomeScore.drawn;
  } else {
    finalScore += outcomeScore.lost;
  }

  return finalScore + shapeScore[playerChoice];
}, 0);

console.log(answer);
