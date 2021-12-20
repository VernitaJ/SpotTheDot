import { Dispatch, useEffect, useState } from "react";

type PlaceCoin = {
    backgroundColor: string
    height: string
    width: string
    left: string
    top: string
};

type Coords = {
    left: string,
    top: string
}
interface Handler {
    explode : Function
    addToScore: Function
}

const Coin = (props : Handler) => {
    const [color, setColor] = useState("gold");
    const [coords, setCoords] = useState<Coords>({
        left: `${Math.random() * 200}vh`,
        top: `${Math.floor(Math.random() * (100 - 20 + 1) + 15)}vh`
    });
    const [found, setFound] = useState(false)
    const [dotStyle, setDotStyle] = useState<PlaceCoin>();


    useEffect(() => {
        setCoords({
            left: `${Math.random() * 200}vh`,
            top: `${Math.floor(Math.random() * (100 - 20 + 1) + 15)}vh`
        })
        setDotStyle(
            {
                backgroundColor: color,
                height: `30px`,
                width: `30px`,
                left: coords.left,
                top: coords.top
            })
    }, [found])

    const addGold = () => {
        props.addToScore()
    }

    const changeToBomb = () => {
        addGold()
        setFound(true)
        setColor("transparent");
    }
    
    const explode = () => {
        props.explode();
    }

    return (
        <div
            className={!found ? "coin" : "bomb"} 
            style={dotStyle}
            onMouseOver={() => color=="gold" ? changeToBomb() : props.explode() }
        >
        </div>
    );
};
export default Coin;