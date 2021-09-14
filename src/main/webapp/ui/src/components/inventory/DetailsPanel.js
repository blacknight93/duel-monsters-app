import { Component } from 'react';
import '../../styles/inventoryDetails.css';
import LevelIcon from '../../assets/images/level_icon.png';
import FireIcon from '../../assets/images/attr_fire_icon.png';
import WindIcon from '../../assets/images/attr_wind_icon.png';
import LightIcon from '../../assets/images/attr_light_icon.png';
import DivineIcon from '../../assets/images/attr_divine_icon.png';
import WaterIcon from '../../assets/images/attr_water_icon.png';
import EarthIcon from '../../assets/images/attr_earth_icon.png';
import DarkIcon from '../../assets/images/attr_dark_icon.png';

export default class DetailsPane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardInfo: props.cardInfo,
            cardName: props.cardName,
            attr: props.attr,
            level: props.level,
            desc: props.desc,
            atk: props.atk,
            def: props.def,
            cardNo: props.formattedCardNo,
            modifiers: props.formattedModifiers,
            materials: props.formattedMaterials,
            decks: props.formattedDecks,
            tags: props.formattedTags,
            count: props.count
        }
    }

    componentDidMount() {
        if(this.props.cardInfo === undefined) {
            this.setState({
                cardInfo: []
            });
        }
    }

    componentDidUpdate() {
        if (this.state.cardInfo !== this.props.cardInfo) {
            this.setState({
                cardInfo: this.props.cardInfo
            });
        }

        if (this.state.cardName !== this.props.cardName) {
            this.setState({
                cardName: this.props.cardName,
                attr: this.props.attr,
                level: this.props.level,
                desc: this.props.desc,
                atk: this.props.atk,
                def: this.props.def,
                modifiers: this.props.formattedModifiers,
                cardNo: this.props.formattedCardNo,
                decks: this.props.formattedDecks,
                tags: this.props.formattedTags,
                count: this.props.count
            });
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
        const { level } = this.state;

        let row = []
        for (let i = 0; i < level; i++) {
            row.push(<img src={LevelIcon} alt="Level" height="25px" width="25px" style={{paddingRight: "10px", verticalAlign: "middle"}}/>);
        }
        return row;
    }

    render() {
        const { cardInfo, cardName, level, desc, atk, def, cardNo, materials, modifiers, decks, tags, count } = this.state;

        let attributeIcon = this.getAttributeIcon();
        let levelRow = this.getLevelIcons();

        return (
            cardInfo ?
                <span id="detailsPanel" className="detailsPanel">
                    <div id="cardTitle" style={{fontSize: "20px", marginTop: "0px"}}>{cardName}</div>
                    <div id="cardNo" style={{fontSize: "14px"}}>{cardNo}</div>
                    <div id="attribute" style={{width: "400px", height: "25px", margin: "0 auto", verticalAlign: "middle"}}>{attributeIcon}</div>
                    
                    {level ? <div style={{width: "400px", height: "25px", margin: "0 auto", verticalAlign: "middle"}}>
                                {levelRow}
                            </div> : null}
                    <div id="type" style={{fontSize: "18px"}}>{modifiers}</div>
                    {materials ? materials : null}
                    <div id="desc" style={{fontSize: "16px"}}>{desc}</div>
                    {atk ? <div id="atkDef">
                        <span id={"atk"}>{"ATK: " + atk}</span>
                        <span> / </span>
                        <span id={"def"}>{"DEF: " + def}</span>
                    </div> : <span/>}
                    <div id="count">{count}</div>
                    <div id="decks">{decks}</div>
                    <div id="tags">{tags}</div>
                </span> :
                <div/>
        )
    }
}