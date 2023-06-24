export default function shuffle(initCards) {
    for (let i = initCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = initCards[i];
        initCards[i] = initCards[j];
        initCards[j] = temp;
    }    
    return initCards;
};