import { useEffect, useState } from "react"
import randomColor from "randomcolor";
import Dot from "./Dot.tsx"
import Coin from "./Coin.tsx"

interface Amount {
    amount: number;
    count: number
    explode: Function
    addGoldToScore: Function
}

type PlaceDot = {
    backgroundColor: string,
    height: string
    width: string
    left: string
    top: string
};

const RandomDots = (props: Amount) => {
    const [color, setColor] = useState(randomColor());
    const [found, setFound] = useState(false)
    const [dotStyle, setDotStyle] = useState<PlaceDot>();

    useEffect(()=> {
        componentArray = []
    }, [props.count])

    let componentArray = []
    
    for (var i = 0; i < props.amount; i++) {
            componentArray.push(<div key={i} ><Dot />
            {i % 5 == 0 ? <Coin explode={props.explode} addToScore={props.addGoldToScore}/>: null}
            </div>)
        }

    return (
        <div>
            {componentArray}
        </div>
    )
}

export default RandomDots