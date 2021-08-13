import React, { Component } from 'react';
import "../styles/commonThemes.css";
import "../styles/add.css";
import "../styles/modal.css";
import { Ability } from '../enums/Ability';
import AddModal from '../components/modal/AddModal';
import MonsterForm from '../components/forms/MonsterForm';
import NonMonsterForm from '../components/forms/NonMonsterForm';
import MaterialMonsterForm from '../components/forms/MaterialMonsterForm';

export default class Add extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cardType: "",
            cardInfo: {},
            show: false,
            selectedType: "Monster"
        }

        this.filterForSelected = this.filterForSelected.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    filterForSelected() {
        let selected = null;
        let elements = document.getElementsByName("cardTypeRadioGroup");
        if(elements !== null) {
            let i = 0;
            while (i < elements.length && selected === null) {
                if (elements[i].checked) {selected = elements[i].value;}
                i++;
            }
        }

        this.setState({
            selectedType: selected
        });
    }

    getForm(selectedType) {
        switch (selectedType) {
            case "Spell":
                return <NonMonsterForm cardType={"Spell"}/>;
            case "Trap":
                return <NonMonsterForm cardType={"Trap"}/>
            case "Pendulum":
                return <MaterialMonsterForm cardType={Ability.PENDULUM}/>
            case "Fusion":
                return <MaterialMonsterForm cardType={Ability.FUSION}/>
            case "Synchro":
                return <MaterialMonsterForm cardType={Ability.SYNCHRO}/>
            case "Xyz":
                return <MaterialMonsterForm cardType={Ability.XYZ}/>
            case "Link":
                return <MaterialMonsterForm cardType={Ability.LINK}/>
            default:
                return <MonsterForm cardType={"Monster"}/>
        }
    }

    onSubmit() {
        /*
            - popup confirmation modal filled with form information
            - "Confirm" and "Cancel" buttons
            - grey out background
            - on submit, add info to repository
        */

        const { selectedType } = this.state;
        let cardInfo = {};

        // ALL CARDS
        cardInfo["cardType"] = selectedType;
        cardInfo["cardNo"] = document.getElementById("cardNoInput").value;
        cardInfo["cardName"] = document.getElementById("cardNameInput").value;
        cardInfo["type"] = document.getElementById("typeSelect").value;
        cardInfo["desc"] = document.getElementById("descriptionText").value;
        // cardInfo["deckSelect"] = document.getElementById("deckSelect").value;
        // cardInfo["deckInput"] = document.getElementById("deckInput").value;
        cardInfo["deck"] = document.getElementById("deckSelect").value === "" 
                            ? document.getElementById("deckInput").value
                            : document.getElementById("deckSelect").value; //ELEPHANT: come back and check that field isn't empty
        cardInfo["count"] = document.getElementById("countInput").value;
        cardInfo["tagSelect"] = document.getElementById("tagSelect").value;
        cardInfo["tagInput"] = document.getElementById("tagInput").value; //ELEPHANT: split tagInput on '/' and concat to tagSelect

        if (selectedType !== "Spell" && selectedType !== "Trap") {
            cardInfo["level"] = document.getElementById("levelSelect").value;
            //ELEPHANT: get attribute
            cardInfo["ability"] = document.getElementById("abilitySelect").value;
            cardInfo["class"] = document.getElementById("classSelect").value;
            cardInfo["atk"] = document.getElementById("atkInput").value;
            cardInfo["def"] = selectedType !== "Link" ? document.getElementById("defInput").value : null;
        }

        if (selectedType === "Fusion" || selectedType === "Xyz" || selectedType === "Synchro") {
            let materialElements = document.getElementsByClassName("material");
            let materials = [];
            for (let i=0; i < materialElements.length; i++) {
                materials.push(materialElements[i].innerText);
            }
            cardInfo["materials"] = materials;
        } else if (selectedType === "Link") {
            let materialElements = document.getElementsByClassName("material");
            let materials = [];
            for (let i=0; i < materialElements.length; i++) {
                materials.push(materialElements[i].innerText);
            }
            cardInfo["materials"] = materials;
            //ELEPHANT: get link zones
        } else if (selectedType === "Pendulum") {
            //ELEPHANT: get pendulum effect
            //ELEPHANT: get left and right bounds
        }
        
        console.log("cardInfo");
        console.log(cardInfo);
        
        this.setState({
            cardInfo: cardInfo,
            show: true
        });
    }

    onCancel = () => {
        this.setState({
            show: false
        });
    }

    onConfirm = (e) => {
        console.log("update repository");
    }



    render() {
        const { cardType, cardInfo, show, selectedType } = this.state;

        let description = "Cards are stored based on the card number. This number is uneditable, so make sure you've entered it correctly. All other information can be edited at a later time.";
        
        //ELEPHANT: Add info i for each field
        //ELEPHANT: Replace all the FireIcon Attribute placeholders with other Attributes
        //ELEPHANT: Upon submit, make sure ATK/DEF matches a regular expression for {only numbers || "?"}
        //ELEPHANT: Check tag input content (only alpha-num char) against selections from tag list. select element has priority
        //TODO: HOW THE FORK DID I FORGET ABOUT RITUAL MONSTERS?!?!?!?!?
        //TODO: AND TOKENS!!! --CRIES--

        let formView = this.getForm(selectedType);
        console.log("show? " + show);

        return(
                <div className="contentWrapper">
                    <div>
                        <div id="header" style={{textAlign: "center"}}>Add Card</div>
                        <div id="description" style={{width: "500px", margin: "0 auto"}}>
                            <ol id="instructions">
                                <li>Select a card type</li>
                                <li>Fill in the card information. (All information is required)</li>
                                <li>Click "Add" to add card to your inventory</li>
                            </ol>
                            <div style={{width: "500px", textAlign: "center"}}>{description}</div>
                        </div>
                    </div>
                    <div className="formElement" style={{width: "800px"}}>
                        <span id="cardTypeSelection" className="radioGroup">
                            <input type="radio" id="monsterRadio" name="cardTypeRadioGroup" value="Monster" defaultChecked={true} onChange={this.filterForSelected}/>
                            <label for="monsterRadio">Monster</label>
                            <input type="radio" id="spellRadio" name="cardTypeRadioGroup" value="Spell" onChange={this.filterForSelected}/>
                            <label for="spellRadio">Spell</label>
                            <input type="radio" id="trapRadio" name="cardTypeRadioGroup" value="Trap" onChange={this.filterForSelected}/>
                            <label for="trapRadio">Trap</label>
                            <input type="radio" id="pendulumRadio" name="cardTypeRadioGroup" value="Pendulum" onChange={this.filterForSelected} disabled/>
                            <label for="pendulumRadio">Pendulum</label>
                            <input type="radio" id="fusionRadio" name="cardTypeRadioGroup" value="Fusion" onChange={this.filterForSelected}/>
                            <label for="fusionRadio">Fusion</label>
                            <input type="radio" id="xyzRadio" name="cardTypeRadioGroup" value="Xyz" onChange={this.filterForSelected}/>
                            <label for="xyzRadio">Xyz</label>
                            <input type="radio" id="synchroRadio" name="cardTypeRadioGroup" value="Synchro" onChange={this.filterForSelected}/>
                            <label for="synchroRadio">Synchro</label>
                            <input type="radio" id="linkRadio" name="cardTypeRadioGroup" value="Link" onChange={this.filterForSelected} disabled/>
                            <label for="linkRadio">Link</label>
                        </span>
                    </div>
                    {formView}
                    <div className="formElement" style={{width: "190px", marginTop: "50px"}}>
                        <button className="formBtn okBtn" onClick={this.onSubmit}>Submit</button>
                        <button className="formBtn ccBtn" onClick={this.onCancel}>Clear</button>
                        <AddModal cardInfo={cardInfo} show={show} onCancel={this.onCancel} onConfirm={this.onConfirm}/>
                    </div>
                </div>
        )
    }
}