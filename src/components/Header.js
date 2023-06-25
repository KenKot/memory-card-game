import '../styles/Header.css'

export default function Header({currentScore, highestScore}) {
    return(
        <div className="nav--container">
            <div className="logo">
                <img src="./memoryman.png" id="mm-picture"/>
                <h1>
                    Presidential Memory Game    
                </h1>    
            </div>
            <div>
                <h2>Current Score: {currentScore}</h2>
                <h2>Highest Score: {highestScore}</h2>
            </div>
        </div>
    )
}