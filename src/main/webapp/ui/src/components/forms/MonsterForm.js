import React, { Component } from 'react';
import "../../styles/commonThemes.css";
import "../../styles/add.css";
import { MonsterType } from "../../enums/MonsterType";
import { Ability } from "../../enums/Ability";
import { Classification } from "../../enums/Classification";
import LevelIcon from '../../assets/images/level_icon.png';
import FireIcon from '../../assets/images/attr_fire_icon.png';
import WindIcon from '../../assets/images/attr_wind_icon.png';
import LightIcon from '../../assets/images/attr_light_icon.png';
import DivineIcon from '../../assets/images/attr_divine_icon.png';

export default class MonsterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            cardType: "",
            decks: [],
            tags: []
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
        const { decks, tags } = this.state;

        let typeOptions = Object.values(MonsterType);
        let abilityOptions = Object.values(Ability);
        let classOptions = Object.values(Classification);
        let levelOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12];
        let decksInstructions = "If this card belongs to a deck already in the database, please select that deck from the dropdown. Otherwise, you may enter it in the accompanying text box.";
        let tagInstructions = "You can select one or more options from the list (Ctrl+Click to select multiple tags). If the tag(s) you wish to use is not in the list, use the accompanying text box to include it with this card (separate multiple tags with \"/\")";

        //ELEPHANT: Add info i for each field
        //ELEPHANT: Replace all the FireIcon Attribute placeholders with other Attributes
        //ELEPHANT: Check tag input content (only alpha-num char) against selections from tag list. select element has priority

        return (
            <div className="contentWrapper">
                <div className="formElement" style={{width: "495px"}}>
                    <div>
                        <input type="text" placeholder="Card Number" id="cardNoInput" className="basicInput" maxLength="10" autoComplete="off" style={{marginRight: "25px"}}></input>
                        <input type="text" placeholder="Card Name" id="cardNameInput" className="basicInput" maxLength="50" autoComplete="off" style={{width: "350px"}}></input>
                    </div>
                </div>
                <div className="formElement" style={{width: "210px"}}>
                    <label for="levelSelect" style={{verticalAlign: "middle"}}>
                        <img src={LevelIcon} alt="Monster Level Icon" height="40px" width="40px"/>
                    </label>
                    <select id="levelSelect" className="cardInfoSelect" style={{width: "125px", verticalAlign: "middle"}}>
                        <option value="" disabled selected>Select Level</option>
                        {levelOptions.map((level) => {
                            return <option value={level}>{level}</option>
                        })}
                    </select>
                </div>
                <div className="formElement" style={{width: "520px"}}>
                    <div>
                        <input type="radio" id="fireRadio" name="attrRadioGroup" value="fire" style={{fontSize: "25px"}}/>
                        <label for="fireRadio" style={{verticalAlign: "middle"}}>
                            <img src={FireIcon} alt="Fire Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="windRadio" name="attrRadioGroup" value="wind"/>
                        <label for="windRadio" style={{verticalAlign: "middle"}}>
                            <img src={WindIcon} alt="Wind Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="fireRadio" name="attrRadioGroup" value="water"/>
                        <label for="fireRadio" style={{verticalAlign: "middle"}}>
                            <img src={FireIcon} alt="Fire Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="fireRadio" name="attrRadioGroup" value="earth"/>
                        <label for="fireRadio" style={{verticalAlign: "middle"}}>
                            <img src={FireIcon} alt="Fire Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="lightRadio" name="attrRadioGroup" value="light"/>
                        <label for="lightRadio" style={{verticalAlign: "middle"}}>
                            <img src={LightIcon} alt="Light Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="fireRadio" name="attrRadioGroup" value="dark"/>
                        <label for="fireRadio" style={{verticalAlign: "middle"}}>
                            <img src={FireIcon} alt="Fire Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="divineRadio" name="attrRadioGroup" value="divine"/>
                        <label for="divineRadio" style={{verticalAlign: "middle", paddingRight: "0"}}>
                            <img src={DivineIcon} alt="Divine Attribute Icon" height="40px" width="40px"/>
                        </label>
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
                        <select id="abilitySelect" className="cardInfoSelect">
                            <option value="" disabled selected>Select Ability</option>
                            {abilityOptions.map((ability) => {
                                return <option value={ability}>{ability}</option>
                            })}
                        </select>
                        <select id="classSelect" className="cardInfoSelect" style={{marginRight: "0"}}>
                            <option value="" disabled selected>Select Class</option>
                            {classOptions.map((classification) => {
                                return <option value={classification}>{classification}</option>
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
                <div className="formElement" style={{width: "325px"}}>
                    <span style={{fontSize: "20px", color: "white"}}>
                        <label for="atkInput">ATK: </label>
                        <input id="atkInput" className="basicInput atkDefInput" maxLength="4" minLength="1"/>
                        <label for="defInput">DEF: </label>
                        <input id="defInput" className="basicInput atkDefInput" maxLength="4" minLength="1"/>
                    </span>
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
                    <input id="tagInput" className="basicInput" style={{width: "250px", verticalAlign: "top"}} maxLength="120" placeholder="Enter tag(s)"/>
                    <label for="tagInput"/>
                </span>
                </div>
            </div>
        )
    }
}