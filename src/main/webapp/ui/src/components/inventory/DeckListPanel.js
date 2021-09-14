import { Component } from 'react';

export default class DeckListPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardList = props.cardList,
            condensedList = {},
            mainDeck = [],
            extraDeck = [],
            sideDeck = []
        }
    }

    sortDecks(cardList) {
        let mainDeck = [];
        let extraDeck = [];
        let sideDeck = [];

        // for (let i=0; i < cardList.length; i++) {
        //     if (cardList.sideDeck) {
        //         sideDeck.push(cardList[i]);
        //     } else if (cardList[i].cardType !== "Monster" && cardList[i].cardType !== "Spell" && cardList[i].cardType !== "Monster" && cardList[i].cardType !== "Monster" && )
        // }
    }

    condenseCardList(cardList) {
        cardList.sort((a,b) => a.cardName > b.cardName ? 1 : -1);

        let condensedList = {};
        cardList.map((item) => {
            condensedList[item.cardName] ? (condensedList[item.cardName].push(item)) : (condensedList[item.cardName] = [item])
        });

        this.setState({
            condensedList: condensedList
        });
    }
}