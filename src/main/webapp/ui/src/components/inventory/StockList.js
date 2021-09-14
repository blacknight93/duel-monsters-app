import { Component } from 'react';
import '../../styles/inventory.css';

export default class StockList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardList: props.cardList,
            edit: props.edit
        }
    }

    componentDidMount() {
        this.setState({
            cardList: this.props.cardList,
            edit: this.props.edit
        });
    }

    componentDidUpdate() {
        if(this.state.cardList !== this.props.cardList) {
            this.setState({
                cardList: this.props.cardList
            });
        }
    }

    formatListEntries(list) {
        let values = Object.values(list);

        return (values.map((item) => {
            let count = item[0].count;
            for(let i=1; i < item.length; i++) {
                count += item[i].count;
            }
            return (
                <li 
                    id="inventoryItem" 
                    className={item[0].cardType.toLowerCase() + "Item"} 
                    onClick={this.onClick}>
                        {item[0].cardName + (count > 1 ? (" (" + count + ")") : "")}
                </li>)
        }));
    }

    onClick = (e) => {
        const { edit } = this.state;

        let cardName = e.target.innerText.includes(' (') ? e.target.innerText.substring(0, e.target.innerText.indexOf(' (')) : e.target.innerText;

        if (edit) {
            this.props.onSelectedCard(cardName);
        } else {
            document.getElementsByClassName("inventoryList")[0].style.left = "25%";
            document.getElementById("detailsPanel").style.visibility = "visible";
            this.props.onSelectedCard(cardName);
        }
    }

    render() {
        const { cardList } = this.state;
        
        let displayList = this.formatListEntries(cardList);
        return (
            <div>
                <ul className='inventoryList'>
                    {displayList}
                </ul>
            </div>
        )
    }
 }