import React, { Component } from 'react';
import "../styles/commonThemes.css";
import "../styles/add.css";
import "../styles/modal.css";
// import LevelIcon from '../assets/images/level_icon.png';
// import FireIcon from '../assets/images/attr_fire_icon.png';
// import WindIcon from '../assets/images/attr_wind_icon.png';
import AddModal from '../components/modal/AddModal';
import MonsterForm from '../components/forms/MonsterForm';
import NonMonsterForm from '../components/forms/NonMonsterForm';
import FusionForm from '../components/forms/FusionForm';

export default class Add extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cardType: "",
            cardName: "",
            cardNo: "",
            level: 0,
            attr: "",
            type: "",
            ability: "",
            class: "",
            desc: "",
            atk: "",
            def: "",
            count: "",
            decks: [],
            tags: [],
            show: false,
            selectedType: "monster"
        }

        this.filterForSelected = this.filterForSelected.bind(this);
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
            case "spell":
                return <NonMonsterForm spell={true}/>;
            case "trap":
                return <NonMonsterForm spell={false}/>
            case "fusion":
                return <FusionForm/>
            default:
                return <MonsterForm/>
        }
    }

    onSubmit = () => {
        /*
            - popup confirmation modal filled with form information
            - "Confirm" and "Cancel" buttons
            - grey out background
            - on submit, add info to repository
        */

    //     let cardType = this.filterForSelected("cardTypeRadioGroup");
    //     let cardNo = document.getElementById("cardNoInput").value;
    //     let cardName = document.getElementById("cardNameInput").value;

    //     console.log("Info: " + cardType + ", " + cardNo + ", " + cardName);

    //    this.setState({
    //         cardType: cardType,
    //         cardName: cardName,
    //         cardNo: cardNo,
    //         // level: 0,
    //         // attr: "",
    //         // type: "",
    //         // ability: "",
    //         // class: "",
    //         // desc: "",
    //         // atk: "",
    //         // def: "",
    //         // count: "",
    //         // decks: [],
    //         // tags: [],
    //         show: true
    //    });
    }



    render() {
        const { show, selectedType } = this.state;

        let description = "Cards are stored based on the card number. This number is uneditable, so make sure you've entered it correctly. All other information can be edited at a later time.";
        
        //ELEPHANT: Add info i for each field
        //ELEPHANT: Replace all the FireIcon Attribute placeholders with other Attributes
        //ELEPHANT: Upon submit, make sure ATK/DEF matches a regular expression for {only numbers || "?"}
        //ELEPHANT: If deck selection has been made and something is in the deckInput box, select element has priority
        //ELEPHANT: Check tag input content (only alpha-num char) against selections from tag list. select element has priority

        let formView = this.getForm(selectedType);

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
                            <input type="radio" id="monsterRadio" name="cardTypeRadioGroup" value="monster" defaultChecked={true} onChange={this.filterForSelected}/>
                            <label for="monsterRadio">Monster</label>
                            <input type="radio" id="spellRadio" name="cardTypeRadioGroup" value="spell" onChange={this.filterForSelected}/>
                            <label for="spellRadio">Spell</label>
                            <input type="radio" id="trapRadio" name="cardTypeRadioGroup" value="trap" onChange={this.filterForSelected}/>
                            <label for="trapRadio">Trap</label>
                            <input type="radio" id="pendulumRadio" name="cardTypeRadioGroup" value="pendulum" onChange={this.filterForSelected}/>
                            <label for="pendulumRadio">Pendulum</label>
                            <input type="radio" id="fusionRadio" name="cardTypeRadioGroup" value="fusion" onChange={this.filterForSelected}/>
                            <label for="fusionRadio">Fusion</label>
                            <input type="radio" id="xyzRadio" name="cardTypeRadioGroup" value="xyz" onChange={this.filterForSelected}/>
                            <label for="xyzRadio">Xyz</label>
                            <input type="radio" id="synchroRadio" name="cardTypeRadioGroup" value="synchro" onChange={this.filterForSelected}/>
                            <label for="synchroRadio">Synchro</label>
                            <input type="radio" id="linkRadio" name="cardTypeRadioGroup" value="link" onChange={this.filterForSelected}/>
                            <label for="linkRadio">Link</label>
                        </span>
                    </div>
                    {formView}
                    <div className="formElement" style={{width: "190px", marginTop: "50px"}}>
                        <button className="formBtn okBtn" onClick={this.onSubmit}>Submit</button>
                        <button className="formBtn ccBtn">Clear</button>
                        {/* <AddModal cardType={cardType} name={cardName} number={cardNo} show={show}/> */}
                    </div>
                </div>
        )
    }
}