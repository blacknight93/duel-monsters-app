import React, { Component } from 'react';
import "../styles/commonThemes.css";
import "../styles/add.css";
import { MonsterType } from "../enums/MonsterType";
import { Ability } from "../enums/Ability";
import { Classification } from "../enums/Classification";
import LevelIcon from '../assets/images/level_icon.png';
import FireIcon from '../assets/images/attr_fire_icon.png';
import WindIcon from '../assets/images/attr_wind_icon.png';

export default class Add extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let description = "Cards are stored based on the card number. This number is uneditable, so make sure you've entered it correctly. All other information can be edited at a later time.";
        let typeOptions = Object.values(MonsterType);
        let abilityOptions = Object.values(Ability);
        let classOptions = Object.values(Classification);
        let levelOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12];
        let attributeOptions = [FireIcon];

        //ELEPHANT: Add info i for each field

        return(
            <div style={{position: "relative"}}>
                <div className="contentWrapper">
                    <div id="header" style={{textAlign: "center"}}>Add Card</div>
                    <div id="description" style={{marginLeft: "35%"}}>
                        <ol id="instructions">
                            <li>Select a card type</li>
                            <li>Fill in the card information. (All information is required)</li>
                            <li>Click "Add" to add card to your inventory</li>
                        </ol>
                        <div style={{width: "500px", textAlign: "center"}}>{description}</div>
                    </div>
                    <span id="cardTypeSelection" className="radioGroup">
                        <input type="radio" id="monsterRadio" name="cardTypeRadioGroup" value="monster"/>
                        <label for="monsterRadio">Monster</label>
                        <input type="radio" id="spellRadio" name="cardTypeRadioGroup" value="spell"/>
                        <label for="spellRadio">Spell</label>
                        <input type="radio" id="trapRadio" name="cardTypeRadioGroup" value="trap"/>
                        <label for="trapRadio">Trap</label>
                        <input type="radio" id="pendulumRadio" name="cardTypeRadioGroup" value="pendulum"/>
                        <label for="pendulumRadio">Pendulum</label>
                        <input type="radio" id="fusionRadio" name="cardTypeRadioGroup" value="fusion"/>
                        <label for="fusionRadio">Fusion</label>
                        <input type="radio" id="xyzRadio" name="cardTypeRadioGroup" value="xyz"/>
                        <label for="xyzRadio">Xyz</label>
                        <input type="radio" id="synchroRadio" name="cardTypeRadioGroup" value="synchro"/>
                        <label for="synchroRadio">Synchro</label>
                        <input type="radio" id="linkRadio" name="cardTypeRadioGroup" value="link"/>
                        <label for="linkRadio">Link</label>
                    </span>
                    <div style={{marginLeft: "34%", marginTop: "20px"}}>
                        <input type="text" placeholder="Card Number" id="cardNoInput" className="basicInput" maxLength="10" style={{marginRight: "25px"}}></input>
                        <input type="text" placeholder="Card Name" id="cardNameInput" className="basicInput" maxLength="50" style={{width: "350px"}}></input>
                    </div>
                    <div style={{marginLeft: "42%", marginTop: "20px"}}>
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
                    <div style={{marginLeft: "32%", marginTop: "20px"}}>
                        <input type="radio" id="fireRadio" name="attrRadioGroup" value="fire" style={{fontSize: "25px"}}/>
                        <label for="fireRadio" style={{verticalAlign: "middle"}}>
                            <img src={FireIcon} alt="Fire Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="windRadio" name="attrRadioGroup" value="wind"/>
                        <label for="windRadio" style={{verticalAlign: "middle"}}>
                            <img src={WindIcon} alt="Wind Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="fireRadio" name="attrRadioGroup" value="synchro"/>
                        <label for="fireRadio" style={{verticalAlign: "middle"}}>
                            <img src={FireIcon} alt="Fire Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="fireRadio" name="attrRadioGroup" value="synchro"/>
                        <label for="fireRadio" style={{verticalAlign: "middle"}}>
                            <img src={FireIcon} alt="Fire Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="fireRadio" name="attrRadioGroup" value="synchro"/>
                        <label for="fireRadio" style={{verticalAlign: "middle"}}>
                            <img src={FireIcon} alt="Fire Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="fireRadio" name="attrRadioGroup" value="synchro"/>
                        <label for="fireRadio" style={{verticalAlign: "middle"}}>
                            <img src={FireIcon} alt="Fire Attribute Icon" height="40px" width="40px"/>
                        </label>
                        <input type="radio" id="fireRadio" name="attrRadioGroup" value="synchro"/>
                        <label for="fireRadio" style={{verticalAlign: "middle"}}>
                            <img src={FireIcon} alt="Fire Attribute Icon" height="40px" width="40px"/>
                        </label>
                    </div>
                    <div style={{marginLeft: "30%", marginTop: "20px"}}> 
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
                        <select id="classSelect" className="cardInfoSelect">
                            <option value="" disabled selected>Select Class</option>
                            {classOptions.map((classification) => {
                                return <option value={classification}>{classification}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}