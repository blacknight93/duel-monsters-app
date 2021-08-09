import React from "react";

const AddModal = props => {
    if (!props.show) {
        return null;
    }

    let cardType = props.cardType;
    let name = props.name;
    let number = props.number;
    // let level = props.level;
    // let attr = props.attribute;
    // let type = props.type;
    // let ability = props.ability;
    // let monsterClass = props.monsterClass;
    // let desc = props.description;
    // let atk = props.atk;
    // let def = props.def;
    // let deck = props.deck;
    // let count = props.count;
    // let tag = props.tag;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Confirm Submission</h4>
                </div>
                <div className="modal-body">
                    <div>{"Card Type: " + cardType}</div>
                    <div>{"Card Name: " + name}</div>
                    <div>{"Card Number: " + number}</div>
                </div>
                <div className="modal-footer">
                    <button>Confirm</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )

}

export default AddModal