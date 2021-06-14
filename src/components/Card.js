import { useState } from "react";
import {Cards} from './Cards';

const Card = (props) => {
    const [clickedCards, setClickedCards] = useState([]);
    const [cardIndex, setCardIndex] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

    const shuffleCards = () => {
        var cardIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        for (var i = 0; i < 16; i++) {
            var j = Math.floor(Math.random() * 12);
            [cardIndexes[i], cardIndexes[j]] = [cardIndexes[j], cardIndexes[i]];
        }
        setCardIndex(cardIndexes);
    }
 
    const clickedOnCard = (index) => {
        if (clickedCards.includes(index)) {
            props.updateBestScore();
            setClickedCards([]);
        }
        else {
            props.updateCurrentScore();
            setClickedCards([...clickedCards, index]);
        }
        shuffleCards();
    }

    return (
        <div
            style={{
                margin: "190px auto auto ",
                width: "90%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                cursor: "pointer",
            }}
        >
        {cardIndex.map((key) => {
            let card = Cards[key];
            return (
                <div
                  onClick={() => clickedOnCard(key)}
                  style={{
                    margin: "10px",
                    borderRadius: "5px",
                    background: "white",
                    height: '300px'
                  }}
                  key={key}
                  id='card'
                  className="card"
                >
                  <img
                    style={{ width: "300px", borderRadius: "5px 5px 5px 5px", borderWidth: "thin", borderColor: 'black', height: "90%" }}
                    alt={card[1]}
                    src={card[0]}
                  ></img>
                  <p style={{ textAlign: "center", marginTop: "0px"}}>{card[1]}</p>
                </div>
            );
        })}
        </div>
    );    
}

export default Card;