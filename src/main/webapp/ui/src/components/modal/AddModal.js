import { Component } from "react";
import "../../styles/commonThemes.css"
import LevelIcon from '../../assets/images/level_icon.png';

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
            desc: props.cardInfo.desc,
            atk: props.cardInfo.atk,
            def: props.cardInfo.def,
            deck: props.cardInfo.deck,
            count: props.cardInfo.count,
            tags: props.cardInfo.tags,
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
                desc: this.props.cardInfo.desc,
                atk: this.props.cardInfo.atk,
                def: this.props.cardInfo.def,
                deck: this.props.cardInfo.deck,
                count: this.props.cardInfo.count,
                tags: this.props.cardInfo.tags,
                materials: this.props.cardInfo.materials,
                // zones: this.props.cardInfo.zones,
                // pEffect: this.props.cardInfo.pEffect,
                // redBound: this.props.cardInfo.redBound,
                // blueBound: this.props.cardInfo.blueBound
            });
        }
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
            case "Monster":
                return "#FF8B53";
            default:
                return "#FF8B53"; //Monster
        }
    }

    // attributeImage() {
    //     //
    // }

    formatMaterials(materials) {
        // const { materials } = this.state;
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

    handleClearModal = () => {
        this.props.onCancel();
    }

    render() {
        const { show, cardInfo, cardType, name, number, attr, lv, type, ability, monsterClass, desc, atk, def, deck, count, tags, materials } = this.state

        let bannerColour = this.bannerColour();
        let formattedMaterials = materials ? <div>{this.formatMaterials(materials)}</div> : null;
        let formattedTags = tags ? <div>{"Tags: " + this.formatTags(tags)}</div> : null;
        let formattedModifiers = type ? "[" + type.toUpperCase() + (ability === "None" ? " / " : " / " + ability.toUpperCase() + " / ") + monsterClass.toUpperCase() + "]" : null; 

        console.log("cardInfo");
        console.log(cardInfo);

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
                            {attr ? <div style={{width: "150px", verticalAlign: "middle", margin: "0 auto"}}>Attribute Icon</div> : null}
                            {lv ? <div style={{width: "50px", height: "25px", margin: "0 auto", verticalAlign: "middle"}}>
                                <img src={LevelIcon} alt="Level" height="25px" width="25px" style={{paddingRight: "10px", verticalAlign: "middle"}}/>
                                {lv}
                            </div> : null}
                            <div>{number}</div>
                            {formattedMaterials}
                            <div>
                                {ability ? formattedModifiers : type}
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
                            <button id="modalOK" className="modal-button okBtn" onClick={this.handleClearModal}>Confirm</button>
                            <button id="modalCancel" className="modal-button ccBtn" onClick={this.handleClearModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>) : null
        )
    }
}