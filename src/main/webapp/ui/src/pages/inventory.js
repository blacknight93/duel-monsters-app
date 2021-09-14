import { Component } from 'react';
import StockList from '../components/inventory/StockList';
import DetailsPanel from '../components/inventory/DetailsPanel'

export default class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masterList: [],
            cardList: [],
            condensedList: [],
            selectedType: "All",
            selectedCard: ""
        }
    }

    /* ELEPHANT: Add api mapping for inventory?=[cardType], where cardType is monster, spell, trap, etc */

    componentDidMount() {
        this.getCardList();
        // this.getCardList("Monster");
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
            selectedCard: e
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
    

    render() {
        const { cardList, condensedList, selectedCard } = this.state;

        //TODO: HOW THE FORK DID I FORGET ABOUT RITUAL MONSTERS?!?!?!?!?
        //TODO: AND TOKENS!!! --CRIES--
        let chosenOne = condensedList[selectedCard];
        let cardName, attr, level,
            desc, atk, def, 
            count, formattedCardNo, formattedModifiers, 
            formattedMaterials, formattedDecks, formattedTags;

        if (chosenOne !== undefined) {
            console.log("chosenOne");
            console.log(chosenOne);
            cardName = chosenOne[0].cardName;
            attr = chosenOne[0].attribute;
            level = chosenOne[0].level === 0 ? null : chosenOne[0].level;
            desc = chosenOne[0].description;
            atk = chosenOne[0].atk;
            def = chosenOne[0].def;
            count = chosenOne.reduce(((accumulator,val) => accumulator + val.count), 0);
            formattedCardNo = this.combineCardNo(chosenOne);
            formattedDecks = this.combineAttributeValues(chosenOne, "deck", " / ");
            if (chosenOne[0].cardType === "Spell" || chosenOne[0].cardType === "Trap") {
                formattedModifiers = chosenOne[0].type;
            } else if (chosenOne[0].cardType !== "Spell" && chosenOne[0].cardType !== "Trap" && chosenOne[0].ability) {
                formattedModifiers = chosenOne[0].type + " / " + chosenOne[0].ability + " / " + chosenOne[0].classification;
            } else {
                formattedModifiers = chosenOne[0].type + " / " + chosenOne[0].classification;
            }
            let materials = chosenOne[0].materials;
            if (materials) { formattedMaterials = "(" + (materials.length > 1 ? materials.join(" + ") : materials[0]) + ")";}
            formattedTags = this.combineAttributeValues(chosenOne, "tag", " / ");
        }

        return (
            <div style={{position: "relative"}}>
                <span style={{position: "absolute", width: "100%", marginTop: "10%", marginLeft: "25%"/*, left: "30%"*/}}>
                    <button id="allBtn" className="sortButton selected" onClick={this.onClick}>All</button>
                    <button id="monsterBtn" className="sortButton" onClick={this.onClick}>Monster</button>
                    <button id="spellBtn" className="sortButton" onClick={this.onClick}>Spell</button>
                    <button id="trapBtn" className="sortButton" onClick={this.onClick}>Trap</button>
                    <button id="pendulumBtn" className="sortButton" onClick={this.onClick} disabled>Pendulum</button>
                    <button id="fusionBtn" className="sortButton" onClick={this.onClick}>Fusion</button>
                    <button id="xyzBtn" className="sortButton" onClick={this.onClick} disabled>Xyz</button>
                    <button id="synchroBtn" className="sortButton" onClick={this.onClick} disabled>Synchro</button>
                    <button id="linkBtn" className="sortButton" onClick={this.onClick}disabled>Link</button>
                </span>
                <StockList cardList={condensedList} edit={false} onSelectedCard={this.handleSelectionChange}/>
                {cardList ? 
                    <div>
                        <DetailsPanel 
                            cardInfo={cardList[cardList.length - 1]} 
                            cardName={cardName}
                            attr={attr}
                            level={level}
                            desc={desc}
                            atk={atk}
                            def={def}
                            formattedCardNo={formattedCardNo}
                            formattedModifiers={formattedModifiers} 
                            formattedMaterials={formattedMaterials}
                            formattedDecks={formattedDecks} 
                            formattedTags={formattedTags}
                            count={count}>
                        </DetailsPanel>
                    </div>
                    : <div/>
                }
            </div>
        )
    }
}