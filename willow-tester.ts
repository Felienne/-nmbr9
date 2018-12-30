import { Game } from "./lib/game";
import { MonteCarloTreePlayer } from "./lib/players/monte-carlo-tree-hugger";
import { playFixedDeck, FIXED_DECKS, playStandardDecks } from "./lib/test-harness";
import { mean, standardDeviation } from "./lib/util";
import { FastBoard } from "./lib/fast-board";
import { Tile } from "./lib/tile";
import { Move, CandidateMove } from "./lib/board";

import fs = require('fs');
import util = require('util');

const appendFile = util.promisify(fs.appendFile);

// Standardized test bench for the Willow player

function boardCalculator(board: FastBoard):number{
<<<<<<< HEAD
    return board.score() + board.maxHeight()*5
}

function selector(board: FastBoard):boolean{
    const maxSize = 12;
    const sizeOK = board.widthOfBoudingBox() < maxSize && board.heightOfBoundingBox() < maxSize;
=======
    return board.score();
}

function selector(startingBoard: FastBoard, move: CandidateMove):boolean{
    const board = new FastBoard(startingBoard);
    board.playMove(move);
>>>>>>> Add initial trappings of TensorFlow-based NN player

    if (board.turnsPlayed < 5){
        return board.holesAt(0) <= 6 ;
    }
    else{
            return board.holesAt(0) <= 20 && sizeOK;
    }

    //met een veld van max 15 (een van de twee) krijg je nog steeds wel 48 gaten!
    //dus: veld nog kleiner maken
    //of toch ook selecteren op gaten?
    // met 13 zijn er ook nog wel wat 20+ en zelfs 30 gaten nog ff proberen met gatselectie en 13
    //dat was niet beter (zie output)
    //nu weer 12 en eens extra belonen voor hoogte

    // const maxSize = 12;
    // const sizeOk = board.widthOfBoudingBox() < maxSize || board.heightOfBoundingBox() < maxSize;
    // if (board.turnsPlayed < 5){
    //     return board.holesAt(0) < 6;
    // }
    // else{
    //     if (board.turnsPlayed < 10){
    //         return sizeOk && board.holesAt(0) < 12;
    //     }
    //     else{
    //         if (board.turnsPlayed < 15){
    //             return sizeOk && board.maxHeight() >= 1 && board.holesAt(0) < 15;
    //         }
    //         else{
    //             return sizeOk && board.maxHeight() >= 2 && board.holesAt(0) < 20;
    //         }
    //     }
    // }

    // if (board.turnsPlayed < 5){
    //     return board.holesAt(0) < 6;
    // }
    // else{
    //     if (board.turnsPlayed < 10){
    //         return board.holesAt(0) < 12;
    //     }
    //     else{
    //         if (board.turnsPlayed < 15){
    //             return board.maxHeight() >= 1 && board.holesAt(0) < 15;
    //         }
    //         else{
    //             return board.maxHeight() >= 2 && board.holesAt(0) < 20;
    //         }
    //     }
    // }

}

async function main() {
    const player = new MonteCarloTreePlayer({
        // Iterations so we don't depend on CPU speed for results
        maxIterations: 100,
        printTreeStatistics: true,
        boardScoreCalculator: boardCalculator,
        branchSelectorString: '>5 turns width and height < 12',
        boardScoreCalculatorString: 'board.score()',
        branchSelector: selector
    });

    const plays_per_deck = 5;
    const deck_number = 5;
    const stats = await playStandardDecks(player, plays_per_deck);
    //const stats = await playFixedDeck(player, FIXED_DECKS[deck_number], plays_per_deck);

    console.log(stats);

    await appendFile('willow-stats.txt', stats + '\n');
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});