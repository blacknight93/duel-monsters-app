import React, { Component } from 'react';
import "../../styles/commonThemes.css";
import "../../styles/add.css";
import { MonsterType } from "../../enums/MonsterType";

export default class NonMonsterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            cardType: "",
            cardName: "",
            cardNo: "",
            type: "",
            desc: "",
            count: "",
            decks: [],
            tags: [],
            spell: props.spell //true if Spell; false if Trap
        };
    }

    componentDidMount() {
        this.getDecks();
        this.getTags();
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

    render() {
        const { cardType, cardName, cardNo, decks, tags } = this.state;

        //adjust typeOptions based on if this is for Spell or Trap
        let typeOptions = Object.values(MonsterType);
        let decksInstructions = "If this card belongs to a deck already in the database, please select that deck from the dropdown. Otherwise, you may enter it in the accompanying text box.";
        let tagInstructions = "You can select one or more options from the list (Ctrl+Click to select multiple tags). If the tag(s) you wish to use is not in the list, use the accompanying text box to include it with this card (separate multiple tags with \"/\")";

        //ELEPHANT: Add info i for each field
        //ELEPHANT: Replace all the FireIcon Attribute placeholders with other Attributes
        //ELEPHANT: Upon submit, make sure ATK/DEF matches a regular expression for {only numbers || "?"}
        //ELEPHANT: If deck selection has been made and something is in the deckInput box, select element has priority
        //ELEPHANT: Check tag input content (only alpha-num char) against selections from tag list. select element has priority

        return (
            <div className="contentWrapper">
                <div className="formElement" style={{width: "495px"}}>
                    <div>
                        <input type="text" placeholder="Card Number" id="cardNoInput" className="basicInput" maxLength="10" style={{marginRight: "25px"}}></input>
                        <input type="text" placeholder="Card Name" id="cardNameInput" className="basicInput" maxLength="50" style={{width: "350px"}}></input>
                    </div>
                </div>
                <div className="formElement" style={{width: "650px"}}> 
                    <div>
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
                <div className="formElement" style={{width: "485px"}}>
                    <span>
                        <select id="deckSelect" className="cardInfoSelect">
                            <option value="" disabled selected>Select Deck</option>
                            {decks.map((deck) => {
                                return <option value={deck}>{deck}</option>
                            })}
                        </select>
                        <input id="deckInput" className="basicInput" style={{width: "250px"}} maxLength="20" placeholder="Enter deck name"/>
                        <label for="deckInput"/>
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
                    <input id="tagInput" className="basicInput" style={{width: "250px", verticalAlign: "top"}} maxLength="20" placeholder="Enter tag(s)"/>
                    <label for="tagInput"/>
                </span>
                </div>
            </div>
        )
    }
}