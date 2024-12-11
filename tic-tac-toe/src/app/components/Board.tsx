"use client"

import calculateWinner from "../utils/calculateWinner"
import { useEffect, useState } from "react"
import Square from "../components/Square"
type Player = "X" | "O" | "BOTH" | null


function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
        Math.round(Math.random() * 1) === 1 ? "X" : "O"
    );
    const [winner, setWinner] = useState<Player>(null);
    const [showConfetti, setShowConfetti] = useState(false)


    function reset() {
        setSquares(Array(9).fill(null));
        setWinner(null);
        setShowConfetti(false);
        setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
    }

    function setSquareValue(index: number) {
        const newData = squares.map((val, i) => {
            if (i === index) {
                return currentPlayer;
            }
            return val;
        });
        setSquares(newData);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }

    useEffect(() => {
        const w = calculateWinner(squares);
        if (w) {
            setWinner(w);
            setShowConfetti(true)
        }

        if (!w && !squares.filter((square) => !square).length) {
            setWinner("BOTH");
        }
    });

    return (
        <div className="flex flex-col gap-y-4">
            {!winner && <p className="text-center">Hey {currentPlayer}, it's your turn</p>}
            {winner && winner !== "BOTH" && <p className="text-center">Congratulations {winner}!</p>}
            {winner && winner === "BOTH" && (
                <p className="text-center">It's a draw!</p>
            )}

            <div className="grid">
                {Array(9)
                    .fill(null)
                    .map((_, i) => {
                        return (
                            <Square
                                winner={winner}
                                key={i}
                                onClick={() => setSquareValue(i)}
                                value={squares[i]}
                            />
                        );
                    })}
            </div>
            <button className="reset" onClick={reset}>
                RESET
            </button>
        </div>
    );
}

export default Board;

function useWindowSize(): { innerWidth: any; innerHeight: any } {
    throw new Error("Function not implemented.")
}
