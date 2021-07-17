import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MilleniumEye from '../assets/images/millenium_eye_trnp_1.png';
import '../styles/home.css';

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
            <div className="menu">
                 <ul id='menuOptions' className="menuOptions">
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
                
                {/* <span id="removeCard" className="menuItem" style={{marginTop: "50px", background: "red"}}>
                    <img src={MilleniumEye} alt="Remove Card" height="40px" width="75px"></img>
                    <div className="menuItem" style={{paddingRight: '65px'}}>Remove Card</div>
                </span> */}
                {/* <span className="menuItem">
                    <img src={MilleniumEye} alt="Edit Card" height="40px" width="75px"></img>
                    <div className="menuItem" style={{paddingRight: '109px'}}>Edit Card</div>
                </span> */}
                {/* <span className="menuItem">
                    <img src={MilleniumEye} alt="Decks" height="40px" width="75px"></img>
                    <div className="menuItem" style={{paddingRight: '150px'}}>Decks</div>
                </span> */}
                {/* <Link to="/inventory">
                    <span id="inventory" className="menuItem" style={{marginTop: "50px", background: "red"}}>
                        <img src={MilleniumEye} alt="Inventory" height="40px" width="75px"></img>
                        <div className="menuItem" style={{paddingRight: '109px'}}>Inventory</div>
                    </span>
                </Link> */}
            </div>
        )
    }
}