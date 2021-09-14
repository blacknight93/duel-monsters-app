import React, { Component } from 'react';
import "../../styles/commonThemes.css";
import "../../styles/add.css";
import { SpellType } from "../../enums/SpellType";

export default class NonMonsterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            cardType: props.cardType,
            decks: [],
            tags: []
        };
    }

    componentDidMount() {
        this.getDecks();
        this.getTags();
    }

    componentDidUpdate() {
        if (this.props.cardType !== this.state.cardType) {
            this.setState({
                cardType: this.props.cardType
            });
        }
    }

    async getDecks() {
        let endpoint = `${window.location.origin}/inventory/decks`;
        let request = await fetch(endpoint);
        let response = await request.json();

        this.setState({
            decks: response
        });

    }

    async getTags() {
        let endpoint = `${window.location.origin}/inventory/tags`;
        let request = await fetch(endpoint);
        let response = await request.json();

        this.setState({
            tags: response
        });
    }

    filterForSelected(groupName) {
        let selected = null;
        let elements = document.getElementsByName(groupName);
        if(elements !== null) {
            let i = 0;
            while (i < elements.length && selected === null) {
                if (elements[i].checked) {selected = elements[i].value;}
                i++;
            }
        }

        return selected;
    }

    setDeckType = (e) => {
        if (document.getElementsByClassName("deckTypeSelected")[0]) {
            document.getElementsByClassName("deckTypeSelected")[0].className = "";
        }
        document.getElementById(e.target.id).className = "deckTypeSelected";
    }

    render() {
        const { cardType, decks, tags } = this.state;

        let typeOptions = cardType === "Spell" ? Object.values(SpellType) : ["Normal", "Continuous", "Counter"];
        let decksInstructions = "If this card belongs to a deck already in the database, please select that deck from the dropdown. Otherwise, you may enter it in the accompanying text box.\nSelect the type of deck this card belongs to by checking one of the boxes. If left unchecked, this card will be labelled as part of a Main Deck.";
        let tagInstructions = "You can select one or more options from the list (Ctrl+Click to select multiple tags). If the tag(s) you wish to use is not in the list, use the accompanying text box to include it with this card (separate multiple tags with \"/\")";

        //ELEPHANT: Add info i for each field
        //ELEPHANT: Check tag input content (only alpha-num char) against selections from tag list. select element has priority

        return (
            <div className="contentWrapper">
                <div className="formElement" style={{width: "495px"}}>
                    <div>
                        <input type="text" placeholder="Card Number" id="cardNoInput" className="basicInput" maxLength="10" autoComplete="off" style={{marginRight: "25px"}}></input>
                        <input type="text" placeholder="Card Name" id="cardNameInput" className="basicInput" maxLength="50" autoComplete="off" style={{width: "350px"}}></input>
                    </div>
                </div>
                <div className="formElement" style={{width: "650px"}}> 
                    <div style={{margin: "0 auto", width: "200px"}}>
                        <select id="typeSelect" className="cardInfoSelect" required>
                            <option value="" disabled selected>Select Type</option>
                            {typeOptions.map((type) => {
                                return <option value={type}>{type}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="formElement" style={{width: "600px"}}>
                    <div>
                        <textarea id="descriptionText" placeholder="Enter card description."/>
                        <label for="descriptionText"/>
                    </div>
                </div>
                <div style={{margin: "50px auto", borderBottom: "2px solid white", width: "70%"}}/>
                <div className="formElement" style={{width: "450px"}}>
                    <div style={{color: "white", fontFamily: "EBGaramond, serif"}}>
                        <div style={{fontSize: "26px", textAlign: "center"}}>Card Metrics</div>
                        <p style={{width: "450px", fontSize: "18px", textAlign: "center"}}>{decksInstructions}</p>
                    </div>
                </div>
                <div className="formElement" style={{display: "flex", width: "485px"}}>
                    <select id="deckSelect" className="cardInfoSelect">
                        <option value="" disabled selected>Select Deck</option>
                        {decks.map((deck) => {
                            return <option value={deck}>{deck}</option>
                        })}
                    </select>
                    <input id="deckInput" className="basicInput" style={{width: "250px", float: "right"}} maxLength="20" placeholder="Enter deck name"/>
                    <label for="deckInput"/>
                </div>
                <div style={{width: "375px", margin: "10px  auto"}}>
                    <span>
                        <input type="radio" id="mainDeckRadio" name="deckRadioGroup" value="Main Deck" onChange={this.setDeckType}/>
                        <label for="mainDeckRadio" style={{color: "white", fontFamily: "EBGaramond, serif", fontSize: "18px", marginRight: "10px"}}>Main Deck</label>
                        <input type="radio" id="extraDeckRadio" name="deckRadioGroup" value="Extra Deck" onChange={this.setDeckType}/>
                        <label for="extraDeckRadio" style={{color: "white", fontFamily: "EBGaramond, serif", fontSize: "18px", marginRight: "10px"}}>Extra Deck</label>
                        <input type="radio" id="sideDeckRadio" name="deckRadioGroup" value="Side Deck" onChange={this.setDeckType}/>
                        <label for="sideDeckRadio" style={{color: "white", fontFamily: "EBGaramond, serif", fontSize: "18px"}}>Side Deck</label>
                    </span>
                </div>
                <div className="formElement" style={{width: "190px"}}>
                    <div style={{fontSize: "20px", color: "white"}}>
                        <label for="countInput">Count: </label>
                        <input id="countInput" className="basicInput"/>
                    </div>
                </div>
                <div className="formElement" style={{width: "450px", color: "white", fontFamily: "EBGaramond, serif"}}>
                    <p style={{fontSize: "18px", textAlign: "center"}}>{tagInstructions}</p>
                </div>
                <div className="formElement" style={{width: "485px"}}>
                <span>
                    <select id="tagSelect" className="cardInfoSelect" style={{height: "250px", maxWidth: "200px"}} multiple>
                        {tags.map((tag) => {
                            return <option value={tag}>{tag}</option>
                        })}
                    </select>
                    <input id="tagInput" className="basicInput" style={{width: "250px", verticalAlign: "top"}} maxLength="70" placeholder="Enter tag(s)"/>
                    <label for="tagInput"/>
                </span>
                </div>
            </div>
        )
    }
}