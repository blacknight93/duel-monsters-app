import { Component } from 'react';
import '../../styles/inventoryDetails.css';

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
            types: props.formattedTypes,
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
                types: this.props.formattedTypes,
                cardNo: this.props.formattedCardNo,
                decks: this.props.formattedDecks,
                tags: this.props.formattedTags,
                count: this.props.count
            });
        }
    }

    render() {
        const { cardInfo, cardName, attr, level, desc, atk, def, cardNo, types, decks, tags, count } = this.state;

        return (
            cardInfo ?
                <span id="detailsPanel" className="detailsPanel">
                    <div id="cardTitle" style={{fontSize: "20px", marginTop: "0px"}}>{cardName}</div>
                    <div id="cardNo" style={{fontSize: "14px"}}>{cardNo}</div>
                    <div id="attribute" style={{fontSize: "14px"}}>{attr}</div>
                    <div id="lv"/>
                    <div id="type" style={{fontSize: "18px"}}>{types}</div>
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