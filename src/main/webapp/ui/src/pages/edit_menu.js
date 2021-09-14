import { Component } from "react";
import "../styles/commonThemes.css";
import "../styles/inventory.css";
import StockList from '../components/inventory/StockList';
import EditModal from '../components/modal/EditModal';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masterList: [],
            cardList: [],
            condensedList: [],
            selectedType: "All",
            selectedCard: "",
            show: false
        }
    }

    componentDidMount() {
        this.getCardList();
    }

    async getCardList() {
        /*ELEPHANT: {cardType} is case sensitive. need to fix that in the AddCard endpoint 
            and then for the existing entries in repository 
        */
        let endpoint = `${window.location.origin}/inventory`;
        let request = await fetch(endpoint);
        let response = await request.json();

        this.setState({
            masterList: response,
            cardList: response
        });
        this.condenseCardList(response);
    }

    updateCardList(filterParam) {
        const { masterList } = this.state;

        let filteredList = (filterParam === "All") ? masterList : masterList.filter((item) => item.cardType === filterParam)
        this.setState({
            selectedType: filterParam,
            cardList: filteredList
        });
        this.condenseCardList(filteredList);
    }

    condenseCardList(cardList) {
        cardList.sort((a,b) => a.cardName > b.cardName ? 1 : -1);

        let condensedList = {};
        cardList.map((item) => {
            condensedList[item.cardName] ? (condensedList[item.cardName].push(item)) : (condensedList[item.cardName] = [item])
        });

        this.setState({
            condensedList: condensedList
        });
    }

    onClick = (e) => {
        document.getElementsByClassName("selected")[0].classList.remove("selected");
        document.getElementById(e.target.id).classList.add("selected");
        document.getElementsByClassName("inventoryList")[0].style.left = "40%";
        if (document.getElementById("detailsPanel")) { document.getElementById("detailsPanel").style.visibility = "hidden"; }
        this.updateCardList(e.target.innerText);
    }

    handleSelectionChange = (e) => {
        this.setState({
            selectedCard: e,
            show: true
        });
    }

    combineAttributeValues(array, attr, symbol) {
        let valueList = [];
        let result = [];

        for(let i = 0; i < array.length; i++) {
            valueList = valueList.concat(array[i][attr]);
        }

        result.push(valueList[0]);
        for(let i = 1; i < valueList.length; i++) {
            if (!result.includes(valueList[i])) {
                result.push(valueList[i]);
            }
        }

        return (result.length > 1 ? result.join(symbol) : result[0]);
    }

    combineCardNo(array) {
        // CardNo is the primary key and should be unique across the database
        let result = [];
        for (let i = 0; i < array.length; i++) {
            result.push(array[i].cardNo);
        }
        return (result.length > 1 ? result.join(" / ") : result[0]);
    }

    onEdit = (e) => {
        console.log("update repository");
    }

    onDelete = (e) => {
        console.log("update repository");
    }

    onCancel = () => {
        this.setState({
            show: false
        });
    }

    render() {
        const { condensedList, selectedCard, show } = this.state;

        console.log("edit");
        console.log(selectedCard);

        return (
            <div className="contentWrapper">
                <div style={{margin: "200px auto 0 auto", width: "850px"}}>
                    <button id="allBtn" className="sortButton selected" onClick={this.onClick}>All</button>
                    <button id="monsterBtn" className="sortButton" onClick={this.onClick}>Monster</button>
                    <button id="spellBtn" className="sortButton" onClick={this.onClick}>Spell</button>
                    <button id="trapBtn" className="sortButton" onClick={this.onClick}>Trap</button>
                    <button id="pendulumBtn" className="sortButton" onClick={this.onClick} disabled>Pendulum</button>
                    <button id="fusionBtn" className="sortButton" onClick={this.onClick}>Fusion</button>
                    <button id="xyzBtn" className="sortButton" onClick={this.onClick} disabled>Xyz</button>
                    <button id="synchroBtn" className="sortButton" onClick={this.onClick} disabled>Synchro</button>
                    <button id="linkBtn" className="sortButton" onClick={this.onClick}disabled>Link</button>
                </div>
                <StockList cardList={condensedList} edit={true} onSelectedCard={this.handleSelectionChange}/>
                <EditModal cardInfo={selectedCard} show={show} onEdit={this.onEdit} onConfirm={this.onDelete} onCancel={this.onCancel}/>
            </div>
        )
    }
}