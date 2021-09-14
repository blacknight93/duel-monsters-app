import { Component } from "react";
import "../../styles/commonThemes.css";
import { Link } from 'react-router-dom';

export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            cardInfo: props.cardInfo,
            editCardInfo: []
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
                cardInfo: this.props.cardInfo
            });
        }
    }

    handleClearModal = () => {
        this.props.onCancel();
    }

    handleEditModal = () => {
        const { cardInfo } = this.state;

        console.log("handleEditModal");

        //make edit card form visible, then
        this.getCardByName(cardInfo);
        this.props.onCancel();
    }

    render() {
        const { show, cardInfo } = this.state

        console.log("cardInfo");
        console.log(cardInfo);

        let bodyText = "Do you want to edit information for all cards with this name, or delete one or more instances of cards with this card number?"

        return (
            show ? 
            (<div className="modal">
                <div className="modal-content">
                    <div className="modal-header" style={{background: "light grey"}}>
                        <h4 className="modal-title">{"Edit or Delete?"}</h4>
                    </div>
                    <div className="modal-body">
                        {bodyText}
                    </div>
                    <div className="modal-footer modal-button-wrapper" style={{width: "225px", margin: "0 auto"}}>
                        <Link to={{ pathname: "/edit", query: {cardInfo} }} style={{width: "75px", height: "30px"}}>
                            <button id="modalEditBtn" className="modal-button okBtn">Edit</button>
                        </Link>
                        <button id="modalDeleteBtn" className="modal-button ccBtn" onClick={this.handleDeleteModal}>Delete</button>
                        <button id="modalCancelBtn" className="modal-button" style={{marginLeft: "15px", background: "grey"}} onClick={this.handleClearModal}>Cancel</button>
                    </div>
                </div>
            </div>) : null
        )
    }
}