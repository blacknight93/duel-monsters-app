import { Component } from 'react';
import '../styles/commonThemes.css';
import '../styles/add.css';
import { MonsterType } from "../enums/MonsterType";
import { Ability } from "../enums/Ability";
import { Classification } from "../enums/Classification";
import LevelIcon from '../assets/images/level_icon.png';
import FireIcon from '../assets/images/attr_fire_icon.png';
import WindIcon from '../assets/images/attr_wind_icon.png';
import LightIcon from '../assets/images/attr_light_icon.png';
import DivineIcon from '../assets/images/attr_divine_icon.png';
import WaterIcon from '../assets/images/attr_water_icon.png';
import EarthIcon from '../assets/images/attr_earth_icon.png';
import DarkIcon from '../assets/images/attr_dark_icon.png';

export default class EditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardName: props.location.query.cardInfo,
            cardInfo: [],
            number: "",
            lv: 0,
            attr: "",
            type: "",
            ability: "",
            monsterClass: "",
            desc: "",
            atk: 0,
            def: 0,
            count: 0,
            materials: [],
            decks: [],
            tags: []
            // zones: props.cardInfo.zones,
            // pEffect: props.cardInfo.pEffect,
            // redBound: props.cardInfo.redBound,
            // blueBound: props.cardInfo.blueBound
        }
    }

    componentDidMount() {
        this.setState({
            cardName: this.props.location.query.cardInfo
        });
        this.getCardByName(this.props.location.query.cardInfo);
        this.getDecks();
        this.getTags();
    }

    // componentDidUpdate() {
    //     if(this.props.cardInfo !== this.state.cardInfo) {
    //         this.setState({
    //             cardInfo: this.props.cardInfo
    //         });
    //     }
    // }

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

    async getCardByName(cardName) {
        let endpoint = `${window.location.origin}/inventory/name/${cardName}`;
        let request = await fetch(endpoint);
        let response = await request.json();

        console.log("getCardByName");
        console.log(response);

        this.setState({
            cardInfo: response,
            lv: response[0].level,
            attr: response[0].attribute,
            type: response[0].type,
            ability: response[0].ability,
            monsterClass: response[0].classification,
            desc: response[0].description,
            atk: response[0].atk,
            def: response[0].def,
            materials: response[0].materials,
            tags: response[0].tag
        });
    }

    getCardNumbers() {
        const { cardInfo } = this.state;

        let numberList = {};

        cardInfo.map(element => {
            numberList[element.cardNo] = element.deck
        });

        return numberList;
    }

    onAttributeSelect = (e) => {
        console.log("onAttributeSelect");
        console.log(e.target);
    }

    render() {
        const { cardInfo, cardName, attr, lv, type, monsterClass, desc, atk, def, deck, count, tag, materials, attrIcon } = this.state;

        let typeOptions = Object.values(MonsterType);
        let abilityOptions = Object.values(Ability);
        let classOptions = Object.values(Classification);
        let levelOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12];
        let attrOptions = ["Dark", "Divine", "Earth", "Fire", "Light", "Water", "Wind"];
        let tagInstructions = "You can select one or more options from the list (Ctrl+Click to select multiple tags). If the tag(s) you wish to use is not in the list, use the accompanying text box to include it with this card (separate multiple tags with \"/\")";
        let editInstructions = "All information edited on this page will modify the card information for all instances of cards with this name.\nCard numbers, decks, and quantities are immutable.";


        console.log("edit card form");
        console.log(cardName);
        console.log(cardInfo);
        console.log("attr: " + attr);
        console.log("lv: " + lv);
        console.log("type: " + type);
        console.log("monsterClass: " + monsterClass);
        console.log("desc: " + desc);
        console.log("atk: " + atk);
        console.log("def: " + def);
        console.log("count: " + count);
        console.log("materials: " + materials);

        let cardNumberString = Object.keys(this.getCardNumbers()).toString().replace(',', ', ');

        return (
            cardInfo ? 
            <div className="contentWrapper">
                <div>
                    <div id="header" style={{textAlign: "center"}}>Edit Card</div>
                    <div id="description" style={{width: "500px", margin: "0 auto"}}/>
                </div>
                <div className="formElement" style={{width: "495px"}}>
                    <div id="cardNo" style={{marginRight: "25px", color: "white", fontSize: "20px"}}>{"Card Number(s): " + cardNumberString}</div>
                    <div style={{display: 'flex', marginTop: "15px"}}>
                        <div id="cardNameLabel" style={{marginRight: "25px", width: "120px", color: "white", fontSize: "20px"}}>Card Name:</div>
                        <input type="text" id="cardNameInput" className="basicInput" maxLength="50" autoComplete="off" defaultValue={cardName} style={{width: "350px", float: 'right'}}/>
                    </div>
                </div>
                <div className="formElement" style={{width: "495px", margin: "0 auto"}}>
                    <div style={{marginLeft: "50px", display: "flex", width: "250px"}}>
                        <div id="lvLabel" style={{marginRight: "25px", width: "60px", color: "white", fontSize: "20px"}}>Level:</div>
                        <select id="levelSelect" className="cardInfoSelect" style={{float: "right", height: "40px", width: "40px", verticalAlign: "middle", textAlign: "center"}}>
                            {levelOptions.map((level) => {
                                return level === lv ? <option value={level} selected="selected">{level}</option> : <option value={level}>{level}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="formElement" style={{width: "495px", margin: "10px auto"}}>
                    <div style={{display: "flex", width: "250px"}}>
                        <div id="attrLabel" style={{marginLeft: "15px", width: "60px", color: "white", fontSize: "20px"}}>Attribute:</div>
                        <select id="attrSelect" className="cardInfoSelect" style={{marginLeft: "55px", float: "right", height: "40px", width: "80px", verticalAlign: "middle", textAlign: "center"}}>
                            {attrOptions.map((option) => {
                                return option === attr ? <option value={option} selected="selected" onSelect={this.onAttributeSelect}>{option}</option> : <option value={option}>{option}</option>
                            })}
                        </select>
                    </div>
                </div>
                {/* <div className="formElement" style={{width: "520px"}}>
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
                </div> */}
                {/* <div className="formElement" style={{width: "650px"}}> 
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
                </div> */}
                {/* <div className="formElement" style={{width: "600px"}}>
                    <div>
                        <textarea id="descriptionText" placeholder="Enter card description."/>
                        <label for="descriptionText"/>
                    </div>
                </div> */}
                {/* <div className="formElement" style={{width: "325px"}}>
                    <span style={{fontSize: "20px", color: "white"}}>
                        <label for="atkInput">ATK: </label>
                        <input id="atkInput" className="basicInput atkDefInput" maxLength="4" minLength="1"/>
                        <label for="defInput">DEF: </label>
                        <input id="defInput" className="basicInput atkDefInput" maxLength="4" minLength="1"/>
                    </span>
                </div> */}
                {/* <div style={{margin: "50px auto", borderBottom: "2px solid white", width: "70%"}}/> */}
                {/* <div className="formElement" style={{width: "450px"}}>
                    <div style={{color: "white", fontFamily: "EBGaramond, serif"}}>
                        <div style={{fontSize: "26px", textAlign: "center"}}>Card Metrics</div>
                    </div>
                </div> */}
                {/* <div className="formElement" style={{width: "485px"}}>
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
                </div> */}
                {/* <div className="formElement" style={{width: "190px"}}>
                    <div style={{fontSize: "20px", color: "white"}}>
                        <label for="countInput">Count: </label>
                        <input id="countInput" className="basicInput"/>
                    </div>
                </div> */}
                {/* <div className="formElement" style={{width: "450px", color: "white", fontFamily: "EBGaramond, serif"}}>
                    <p style={{fontSize: "18px", textAlign: "center"}}>{tagInstructions}</p>
                </div> */}
                {/* <div className="formElement" style={{width: "485px"}}>
                    <span>
                        <select id="tagSelect" className="cardInfoSelect" style={{height: "250px", maxWidth: "200px"}} multiple>
                            {tags.map((tag) => {
                                return <option value={tag}>{tag}</option>
                            })}
                        </select>
                        <input id="tagInput" className="basicInput" style={{width: "250px", verticalAlign: "top"}} maxLength="70" placeholder="Enter tag(s)"/>
                        <label for="tagInput"/>
                    </span>
                </div> */}
            </div>
            : null
        )
    }
}