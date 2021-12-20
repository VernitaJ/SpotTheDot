import { useEffect, useState } from "react"
import RandomDots from "./components/RandomDots.tsx"
import TargetDot from "./components/TargetDot.tsx"
import Overview from "./Overview.tsx"

interface Detail {
    explode: Function
}

const Game = (props: Detail) => {
    let [count, setCount] = useState<number>(0);
    let [score, setScore] = useState<number>(0);
    const [amount, setAmount] = useState<number>(1);
    const [found, setFound] = useState<boolean>(false)

    const handleFind = () => {
        setCount(count + 1)
        setScore(score + 10)
        setAmount(Math.ceil(amount * 1.25))
        setFound(!found)
    }
    const addGoldToScore = () => {
        setScore(score + 50)
    }

    return (
        <div className="game-container">
            <Overview count={count} score={score} />
            <div className="dot-container">
                <RandomDots amount={amount} count={amount} addGoldToScore={addGoldToScore} explode={props.explode} />
                <TargetDot target="target" found={found} handleFind={handleFind} />
            </div>
        </div>
    )
}

export default Game