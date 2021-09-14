import { Component } from "react";
import "../../styles/commonThemes.css"
import LevelIcon from '../../assets/images/level_icon.png';
import FireIcon from '../../assets/images/attr_fire_icon.png';
import WindIcon from '../../assets/images/attr_wind_icon.png';
import LightIcon from '../../assets/images/attr_light_icon.png';
import DivineIcon from '../../assets/images/attr_divine_icon.png';
import WaterIcon from '../../assets/images/attr_water_icon.png';
import EarthIcon from '../../assets/images/attr_earth_icon.png';
import DarkIcon from '../../assets/images/attr_dark_icon.png';

export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            cardInfo: props.cardInfo,
            cardType: props.cardInfo.cardType,
            name: props.cardInfo.cardName,
            number: props.cardInfo.cardNo,
            lv: props.cardInfo.level,
            attr: props.cardInfo.attribute,
            type: props.cardInfo.type,
            ability: props.cardInfo.ability,
            monsterClass: props.cardInfo.class,
            desc: props.cardInfo.description,
            atk: props.cardInfo.atk,
            def: props.cardInfo.def,
            deck: props.cardInfo.deck,
            count: props.cardInfo.count,
            tag: props.cardInfo.tag,
            materials: props.cardInfo.materials,
            // zones: props.cardInfo.zones,
            // pEffect: props.cardInfo.pEffect,
            // redBound: props.cardInfo.redBound,
            // blueBound: props.cardInfo.blueBound
        }

        this.handleClearModal = this.handleClearModal.bind(this);
    }

    componentDidUpdate() {
        if (this.props.show !== this.state.show) {
            this.setState({
                show: this.props.show
            });
        }

        if (this.props.cardInfo !== this.state.cardInfo) {
            this.setState({
                cardInfo: this.props.cardInfo,
                cardType: this.props.cardInfo.cardType,
                name: this.props.cardInfo.cardName,
                number: this.props.cardInfo.cardNo,
                lv: this.props.cardInfo.level,
                attr: this.props.cardInfo.attribute,
                type: this.props.cardInfo.type,
                ability: this.props.cardInfo.ability,
                monsterClass: this.props.cardInfo.class,
                desc: this.props.cardInfo.description,
                atk: this.props.cardInfo.atk,
                def: this.props.cardInfo.def,
                deck: this.props.cardInfo.deck,
                count: this.props.cardInfo.count,
                tag: this.props.cardInfo.tag,
                materials: this.props.cardInfo.materials,
                // zones: this.props.cardInfo.zones,
                // pEffect: this.props.cardInfo.pEffect,
                // redBound: this.props.cardInfo.redBound,
                // blueBound: this.props.cardInfo.blueBound
            });
        }
    }

    async addCard(newCard) {
        let endpoint = `${window.location.origin}/add`;
        let request = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCard)
        });
        let response = await request.json();

        console.log(response);
        console.log(response.message);
    }

    bannerColour() {
        const { cardType } = this.state;

        switch (cardType) {
            case "Spell":
                return "#1D9E74";
            case "Trap":
                return "#BC5A84";
            case "Pendulum":
                return "#1D9E74"; //figure out how to make a gradient; gradient to white
            case "Ritual":
                return "#9DB5CC";
            case "Fusion":
                return "#A086B7";
            case "Synchro":
                return "#CCCCCC";
            case "Xyz":
                return "#000";
            case "Link":
                return "#00008B";
            case "Token":
                return "#C0C0C0";
            default:
                return "#FF8B53"; //Monster
        }
    }

    getAttributeIcon() {
        const { attr } = this.state;

        switch (attr) {
            case "fire":
                return FireIcon;
            case "water":
                return WaterIcon;
            case "earth":
                return EarthIcon;
            case "wind":
                return WindIcon;
            case "dark":
                return DarkIcon;
            case "light":
                return LightIcon;
            default:
                return DivineIcon;
        }
    }

    getLevelIcons() {
        const { lv } = this.state;

        let row = []
        for (let i = 0; i < lv; i++) {
            row.push(<img src={LevelIcon} alt="Level" height="25px" width="25px" style={{paddingRight: "10px", verticalAlign: "middle"}}/>);
        }
        return row;
    }

    formatMaterials(materials) {
        let result = "(";

        for (let i=0; i < materials.length; i++) {
            result += "\"" + materials[i] + "\""
            if (i === materials.length - 1) {result += ")"}
            else { result += " + " }
        }

        return result;
    }

    formatTags(tags) {
        let tagList = "";

        for (let i=0; i < tags.length; i++) {
            tagList += tags[i]
            if (i !== tags.length - 1) { tagList += ", "; }
        }

        return tagList;
    }

    formatModifiers() {
        const { cardType, type, ability, monsterClass } = this.state;

        console.log("ability");
        console.log(ability);

        if (cardType === "Spell" || cardType === "Trap") {
            return type;
        } else if (ability === null) {
            return "[" + type.toUpperCase() + " / " + monsterClass.toUpperCase() + "]";
        } else {
            return "[" + type.toUpperCase() + " / " + ability.toUpperCase() + " / " + monsterClass.toUpperCase() + "]";
        }
    }

    clearForm() {
        const { cardType } = this.state;

        //Stuff all cards have
        document.getElementById("cardNoInput").value = "";
        document.getElementById("cardNameInput").value = "";
        document.getElementById("descriptionText").value = "";
        document.getElementById("deckInput").value = "";
        document.getElementById("countInput").value = "";
        document.getElementById("tagInput").value = "";
        document.getElementById("typeSelect").selectedIndex = -1;
        document.getElementById("deckSelect").selectedIndex = -1;
        document.getElementById("tagSelect").selectedIndex = -1;

        if (cardType !== "Spell" && cardType !== "Trap") {

            document.getElementById("atkInput").value = "";
            document.getElementById("defInput").value = "";
            document.getElementById("levelSelect").selectedIndex = -1;
            document.getElementById("abilitySelect").selectedIndex = -1;
            document.getElementById("classSelect").selectedIndex = -1;

            let radioButtons = document.getElementsByName("attrRadioGroup");
            for (let i=0; i < radioButtons.length; i++) {
                radioButtons[i].checked = false;
            }

        }
    }

    handleClearModal = () => {
        this.props.onCancel();
    }

    handleSubmitModal = () => {
        const { cardInfo } = this.state;

        console.log("handleSubmitModal");
        console.log(cardInfo);
        
        this.addCard(cardInfo);
        this.clearForm();
        this.props.onCancel();
    }

    render() {
        const { show, cardType, name, number, attr, lv, type, monsterClass, desc, atk, def, deck, count, tag, materials } = this.state

        let bannerColour = this.bannerColour();
        let formattedMaterials = materials ? <div>{this.formatMaterials(materials)}</div> : null;
        let formattedTags = tag ? <div>{"Tags: " + this.formatTags(tag)}</div> : null;
        let formattedModifiers = type ? this.formatModifiers() : null;
        let attributeIcon = this.getAttributeIcon();
        let lvRow = lv ? this.getLevelIcons() : null;

        return (
            show ? 
            (<div className="modal">
                <div className="modal-content" style={{background: bannerColour}}>
                    <div className="modal-header">
                        <h4 className="modal-title">{"Confirm " + cardType + " Card Submission"}</h4>
                    </div>
                    <div className="modal-body">
                        <div style={{background: "#FFFFFF80", padding: "10px", fontSize: "20px"}}>
                            <div style={{textAlign: "center"}}>{name}</div>
                            {attr ? 
                                <div style={{width: "150px", verticalAlign: "middle", margin: "0 auto"}}>
                                    <img src={attributeIcon} alt="Attribute" height="25px" width="25px" style={{paddingRight: "10px", verticalAlign: "middle"}}/>
                                </div> 
                                : null}
                            {lv ? <div style={{width: "400px", height: "25px", margin: "0 auto", verticalAlign: "middle"}}>
                                {lvRow}
                            </div> : null}
                            <div>{number}</div>
                            {formattedMaterials}
                            <div>
                                {monsterClass ? formattedModifiers : type}
                            </div>
                            <div style={{width: "400px", margin: "10px auto", fontSize: "16px", fontStyle: "italic", textAlign: "center"}}>{desc}</div>
                            {atk ? <div>{"ATK/" + atk + "  DEF/" + def}</div> : null}
                            <div>{deck + " Deck (" + count + ")"}</div>
                            {formattedTags}
                        </div>
                    </div>
                    <div className="modal-footer modal-button-wrapper">
                        <div style={{textAlign: "center", fontSize: "20px", marginBottom: "25px"}}>Is the above information correct?</div>
                        <div style={{width: "200px", marginRight: 0}}>
                            <button id="modalOK" className="modal-button okBtn" onClick={this.handleSubmitModal}>Confirm</button>
                            <button id="modalCancel" className="modal-button ccBtn" onClick={this.handleClearModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>) : null
        )
    }
}