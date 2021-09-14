import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MilleniumEye from '../assets/images/millenium_eye_trnp_1.png';
import '../styles/home.css';
import '../styles/commonThemes.css';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'None'
        }
    }

    render() {

        /* ELEPHANT: Come back and vertically align li text */
        return(
            <div className="contentWrapper">
                <div style={{width: "350px", margin: "150px auto"}}>
                        <Link className="menuLink" to="/add">
                            <div style={{display: "flex"}}>
                                <img src={MilleniumEye} alt="Add Card" height="40px" width="75px" style={{margin: "auto 10px"}}/>
                                <div className="menuOptionText">Add Card</div>
                            </div>
                        </Link>
                        <Link className="menuLink" to="/inventory">
                            <div style={{display: "flex"}}>
                                <img src={MilleniumEye} alt="Inventory" height="40px" width="75px" style={{margin: "auto 10px"}}/>
                                <div className="menuOptionText">Inventory</div>
                            </div>
                        </Link>
                        <Link className="menuLink" to="/decks">
                            <div style={{display: "flex"}}>
                                <img src={MilleniumEye} alt="Decks" height="40px" width="75px" style={{margin: "auto 10px"}}/>
                                <div className="menuOptionText">Decks</div>
                            </div>
                        </Link>
                        {/* <Link className="menuLink" to="/edit_menu">
                            <div style={{display: "flex"}}>
                                <img src={MilleniumEye} alt="Edit Card" height="40px" width="75px" style={{margin: "auto 10px"}}/>
                                <div className="menuOptionText">Edit Card</div>
                            </div>
                        </Link> */}
                </div>
                 {/* <ul id='menuOptions' className="menuOptions">
                     <li>
                        <Link className="menuLink" to="/add">
                                <img src={MilleniumEye} alt="Add Card" height="40px" width="75px"/>
                                Add Card
                        </Link>
                     </li>
                     <li>
                        <Link className="menuLink" to="/inventory">
                            <img src={MilleniumEye} alt="Inventory" height="40px" width="75px"/>
                            Inventory
                        </Link>
                     </li>
                     <li>Second Card</li>
                     <li>Third Card</li>
                     <li>Fourth Card</li>
                 </ul>
                 */}
            </div>
        )
    }
}