// This component handles the game's functionality and renders the current card to the screen
import Prompt from "./Prompt";
import { useState, useEffect } from "react";

export default function Game({ handleScore, handleScoreReset }) {
    const [deck, setDeck] = useState([]); //list of cards seen during the game, each card is an object
    const [selection, setSelection] = useState(0); //state for random card selection

    function handleDeck() {
        const runeList = ["Air", "Body", "Chaos", "Cosmic", "Death", "Earth", "Fire", "Law", "Mind", "Nature", "Water"];

        let newDeck = [];
        for(let rune of runeList) {
            const newRune = {
                name: rune,
                displayed: false,
            };
            newDeck = [...newDeck, newRune];
        }
        setDeck(newDeck);
    }

    function markDisplayed(index) {
        const updatedDeck = [...deck];
        updatedDeck[index].displayed = true;
        setDeck(updatedDeck);
    }

    function randomSelection() {
        let x = Math.floor(Math.random() * 11);
        setSelection(x);
    }

    function handleClick(answer) {
        if (answer === deck[selection].displayed) {
            handleScore();
            markDisplayed(selection);
        }
        else {
            handleScoreReset();
            handleDeck();
        }
    }

    useEffect(() => { //initialize list, only call once
        handleDeck();
    }, [])

    useEffect(() => { //select a random card, call if any cards have their status updated
        randomSelection();
    }, [deck])


    if (deck.length === 0) { //this if statement prevents the return statement below from trying to access an empty or undefined array
        return null;
    }

    return(
        <div>
            <div>
                <p>{deck[selection].name}</p>
                <img src={require(`../img/${deck[selection].name.toLowerCase()}.png`)} style={{width: 90, height: 90}} alt={`${deck[selection].name}`}/>
            </div>
            <div>
                <Prompt handleClick={ handleClick } />
            </div>
        </div>
    );
}