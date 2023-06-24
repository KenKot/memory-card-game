export default function Header({currentScore, highestScore}) {




    return(
        <div>
            <h1>
                Memory Game    
            </h1>    
            <h2>Current Score: {currentScore}</h2>
            <h2>Highest Score: {highestScore}</h2>
        <hr />    
        </div>
    )
}