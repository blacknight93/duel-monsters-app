import { Component } from "react";
import "../styles/commonThemes.css";
import "../styles/decks.css";
import Scroll from '../assets/images/deck_scroll.png';
import StockList from "../components/inventory/StockList";

export default class Decks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inventory: {},
            decks: [],
            currentMain: [],
            mainCount: 0,
            currentExtra: [],
            extraCount: 0,
            currentSide: [],
            sideCount: 0,
            show: false,
            selectedDeck: ""
        }
    }

    componentDidMount() {
        this.getDecks();
    }

    async getDecks() {
        let endpoint = `${window.location.origin}/inventory/decks`;
        let request = await fetch(endpoint);
        let response = await request.json();

        this.setState({
            decks: response
        });
    }

    async getDeckList(deck) {
        let endpoint = `${window.location.origin}/inventory/deck/${deck}`;
        let request = await fetch(endpoint);
        let response = await request.json();

        console.log("deckList");
        console.log(response);

        let main = [];
        let extra = [];
        let side = [];

        for (let i = 0; i < response.length; i++) {
            if (response[i].extraDeck === true) {
                extra.push(response[i]);
            } else if (response[i].extraDeck === false && response[i].sideDeck === true) {
                side.push(response[i]);
            } else {
                main.push(response[i]);
            }
        }

        this.setState({
            currentMain: this.condenseCardList(main),
            currentExtra: this.condenseCardList(extra),
            currentSide: this.condenseCardList(side),
            mainCount: main.length,
            extraCount: extra.length,
            sideCount: side.length
        });
    }

    condenseCardList(cardList) {
        cardList.sort((a,b) => a.cardName > b.cardName ? 1 : -1);

        let condensedList = {};
        cardList.map((item) => {
            condensedList[item.cardName] ? (condensedList[item.cardName].push(item)) : (condensedList[item.cardName] = [item])
        });

        return condensedList;
    }

    onClick = (e) => {
        console.log("click");
        console.log(e);

        document.getElementById("deckBtnArea").style.margin = "25px 150px";
        // if (document.getElementsByClassName("selectedDeck")[0] !== null) {
        //     document.getElementsByClassName("selectedDeck")[0].className = "";
        // }
        document.getElementById(e.target.innerText).class = "selectedDeck";

        this.getDeckList(e.target.innerText);
        this.setState({
            show: true
        });
    }

    render() {
        const { show, decks, currentMain, currentExtra, currentSide, mainCount, extraCount, sideCount } = this.state;

        let buttonArea = decks.length > 7 ? (decks.length / 2) * 250 : 200;
        decks.sort();

        let instructions = "Select a deck from the list to view the content of its Main Deck, Extra Deck, and Side Deck."

        return (
            <div className="contentWrapper">
                <div>
                    <div id="header" style={{textAlign: "center"}}>View Decks</div>
                        <div id="description" style={{width: "500px", margin: "0 auto"}}>
                            <div style={{width: "500px", textAlign: "center"}}>{instructions}</div>
                        </div>
                    </div>
                <div style={{display: "flex", margin: "0 auto", width: "1200px"}}>
                    <div id="deckBtnArea" style={{margin: "25px auto", width: buttonArea, height: "350px"}}>
                        { decks ? decks.map(deck => {
                            return <button id={deck} className="deckBtn" onClick={this.onClick}>
                                        <div style={{position: "relative", margin: "0 auto", height: "50px", width: "200px"}}>
                                            <img src={Scroll} alt={deck + " Deck Scroll"} height="50px" width="200px" style={{position: "absolute", left: 0}}/>
                                            <div className="btnText">{deck}</div>
                                        </div>
                                    </button>
                        }) : null }
                    </div>
                    {show ? 
                        <div id="deckListArea" style={{width: "500px", float: "right"}}>
                            <div id="mainDeck">
                                <h4 className="listHeader">{"Main Deck (" + mainCount + ")"}</h4>
                                <StockList cardList={currentMain}/>
                            </div>
                            <div id="extraDeck">
                                <h4 className="listHeader">{"Extra Deck (" + extraCount + ")"}</h4>
                                <StockList cardList={currentExtra}/>
                            </div>
                            <div id="sideaDeck">
                                <h4 className="listHeader">{"Side Deck (" + sideCount + ")"}</h4>
                                <StockList cardList={currentSide}/>
                            </div>
                        </div> : null}
                </div>
            </div>
        );
    }
}