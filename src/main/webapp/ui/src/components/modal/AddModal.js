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
            // attr: props.cardInfo.attribute,
            type: props.cardInfo.type,
            ability: props.cardInfo.ability,
            monsterClass: props.cardInfo.class,
            desc: props.cardInfo.desc,
            atk: props.cardInfo.atk,
            def: props.cardInfo.def,
            deck: props.cardInfo.deck,
            count: props.cardInfo.count,
            // tags: props.cardInfo.tags,
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
                // attr: this.props.cardInfo.attribute,
                type: this.props.cardInfo.type,
                ability: this.props.cardInfo.ability,
                monsterClass: this.props.cardInfo.class,
                desc: this.props.cardInfo.desc,
                atk: this.props.cardInfo.atk,
                def: this.props.cardInfo.def,
                deck: this.props.cardInfo.deck,
                count: this.props.cardInfo.count,
                // tags: this.props.cardInfo.tags,
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

    handleClearModal = () => {
        this.props.onCancel();
    }

    render() {
        const { show, cardInfo, cardType, name, number, lv, type, ability, monsterClass, desc, atk, def, deck, count, materials } = this.state

        let bannerColour = this.bannerColour();
        // let attrSymbol = this.attributeImage();
        //ELEPHANT: If ability === "NONE", remove from type/ability/class line

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
                            <div style={{width: "150px", verticalAlign: "middle", margin: "0 auto"}}>Attribute Icon</div>
                            <div style={{width: "50px", height: "25px", margin: "0 auto", verticalAlign: "middle"}}>
                                <img src={LevelIcon} alt="Level" height="25px" width="25px" style={{paddingRight: "10px", verticalAlign: "middle"}}/>
                                {lv}
                            </div>
                            <div>{number}</div>
                            <div>
                                {"[" + type.toUpperCase() + " / " + ability.toUpperCase() + " / " + monsterClass.toUpperCase() + "]"}
                            </div>
                            <div style={{width: "400px", margin: "10px auto", fontSize: "16px", fontStyle: "italic", textAlign: "center"}}>{desc}</div>
                            <div>{"ATK/" + atk + "  DEF/" + def}</div>
                            <div>{deck + " Deck (" + count + ")"}</div>
                        </div>
                    </div>
                    <div className="modal-footer modal-button-wrapper">
                        <button id="modalOK" className="modal-button okBtn" onClick={this.handleClearModal}>Confirm</button>
                        <button id="modalCancel" className="modal-button ccBtn" onClick={this.handleClearModal}>Cancel</button>
                    </div>
                </div>
            </div>) : null
        )
    }
}