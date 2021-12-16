interface Score {
    count : number
    score : number
}

const Overview = (props: Score) => {
    return(
        <div className="overview">
            <h5>Level: {props.count}</h5>
            <h5>Score: {props.score}</h5>
        </div>
    )
}

export default Overview