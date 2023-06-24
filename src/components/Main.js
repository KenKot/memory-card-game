import React from 'react'
import Card from './Card' //this pulls in the Card .css


import shuffle from './utils'
import IMAGES from './data'

// TODO
//     1)Add win condition that displays 'you win'
//     2)remove images in src findByPlaceholderText


export default function Main(props) {
    //init array
    function createDeck() {
        let initCards = [];
        // for (let i = 0; i < 12; i++) {
        //     const card = { num: i };
        //     initCards.push(card);
        // }

        IMAGES.forEach(img => {
            initCards.push(img)
        })
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
        
        if(pickedCards.includes(value)) {
            props.updateCurrentScore(0);
            setPickedCards([]); //clear 'pickedCards' for a new game
            return;
        } //reset game

        if(currentScore != 12) {
            addToPickedArray(value)
        } else {
            console.log('score is 12')
        }
        
        
        console.log('pickedCards:', [...pickedCards, value])

        props.incrementCurrentScore();
        currentScore++;

        if (currentScore > highestScore) {
            console.log('yee')
            props.updateHighestScore( currentScore);
        } 
        else {
            console.log('currentScore:', currentScore)
            console.log('highestScore:', highestScore)
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