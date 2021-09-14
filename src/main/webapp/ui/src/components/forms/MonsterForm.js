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
import WaterIcon from '../../assets/images/attr_water_icon.png';
import EarthIcon from '../../assets/images/attr_earth_icon.png';
import DarkIcon from '../../assets/images/attr_dark_icon.png';

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

    setSelected = (e) => {
        if (document.getElementsByClassName("attrSelected")[0]) {
            document.getElementsByClassName("attrSelected")[0].className = "";
        }
        document.getElementById(e.target.id).className = "attrSelected";
    }

    setDeckType = (e) => {
        if (document.getElementsByClassName("deckTypeSelected")[0]) {
            document.getElementsByClassName("deckTypeSelected")[0].className = "";
        }
        document.getElementById(e.target.id).className = "deckTypeSelected";
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
                        <input type="radio" id="fireRadio" name="attrRadioGroup" value="fire" style={{fontSize: "25px"}} onChange={this.setSelected}/>
                        <label for="fireRadio" style={{verticalAlign: "middle"}}>
                            <img src={FireIcon} alt="Fire Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="windRadio" name="attrRadioGroup" value="wind" onChange={this.setSelected}/>
                        <label for="windRadio" style={{verticalAlign: "middle"}}>
                            <img src={WindIcon} alt="Wind Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="waterRadio" name="attrRadioGroup" value="water" onChange={this.setSelected}/>
                        <label for="waterRadio" style={{verticalAlign: "middle"}}>
                            <img src={WaterIcon} alt="Water Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="earthRadio" name="attrRadioGroup" value="earth" onChange={this.setSelected}/>
                        <label for="earthRadio" style={{verticalAlign: "middle"}}>
                            <img src={EarthIcon} alt="Earth Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="lightRadio" name="attrRadioGroup" value="light" onChange={this.setSelected}/>
                        <label for="lightRadio" style={{verticalAlign: "middle"}}>
                            <img src={LightIcon} alt="Light Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="darkRadio" name="attrRadioGroup" value="dark" onChange={this.setSelected}/>
                        <label for="darkRadio" style={{verticalAlign: "middle"}}>
                            <img src={DarkIcon} alt="Dark Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="divineRadio" name="attrRadioGroup" value="divine" onChange={this.setSelected}/>
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