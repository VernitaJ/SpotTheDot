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
        top: `${Math.random() * 100}vh`
    });
    const [found, setFound] = useState(false)
    const [dotStyle, setDotStyle] = useState<PlaceCoin>();


    useEffect(() => {
        setCoords({
            left: `${Math.random() * 200}vh`,
            top: `${Math.random() * 100}vh`
        })
        setDotStyle(
            {
                backgroundColor: color,
                height: `11px`,
                width: `11px`,
                left: coords.left,
                top: coords.top
            })
    }, [color])

    const addGold = () => {
        props.addToScore()
    }

    const changeToBomb = () => {
        addGold()
        setColor("rgb(0,0,0)");
        setFound(true)
    }
    
    const explode = () => {
        props.explode();
    }

    return (
        <div
            className={color==="gold" ? "coin" : "bomb"} 
            style={dotStyle}
            onMouseOver={() => color=="gold" ? changeToBomb() : props.explode() }
        >
        </div>
    );
};
export default Coin;