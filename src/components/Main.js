import React from 'react'
import Card from './Card' //this pulls in the Card .css


import shuffle from './utils'
import IMAGES from './data'

export default function Main(props) {
    //init array
    function createDeck() {
        let initCards = [];

        IMAGES.forEach(img => {
            initCards.push(img);
        });
        return shuffle(initCards);
    };


    //shuffle but w/ STATE
    function shuffleAllChards() {
        setAllCards(cards => {
            return shuffle(cards);
        });
    };


    const [allCards, setAllCards] = React.useState(createDeck());
    const [pickedCards, setPickedCards] = React.useState([]);

    function addToPickedArray(num) { setPickedCards( prev => ([...prev, num])); };

    
    function clickUpdate(e) {
        const value = e.target.dataset.value;

        //to addres async issues:
        let currentScore = props.currentScore,
                highestScore = props.highestScore;
        
        shuffleAllChards(); //updates state
        
        //LOSE CONDITION
        if(pickedCards.includes(value)) {
            props.updateCurrentScore(0);
            setPickedCards([]); //clear 'pickedCards' for a new game
            return;
        } //reset game


        //CONTINUE CONDITION
        currentScore++;
        props.updateCurrentScore( currentScore)
        addToPickedArray(value);

        if (currentScore > highestScore) {
            props.updateHighestScore( currentScore);
        } 

        //WIN CONDITION
        if(currentScore === 12) {
            props.updateCurrentScore(0);
            setPickedCards([]); //clear 'pickedCards' for a new game
            return;            
        }
    };


    return(
        
        <div>
            <h1>
                Memory Main!
            </h1>                                                           
            {allCards.map((card) => (
                <Card 
                    key={card.id}                    
                    num={card.id}
                    handleClick={clickUpdate}
                    presidentUrlName={card.urlInfo}                    
                />
    
            ))}
        <hr />    
        </div>
    )
}