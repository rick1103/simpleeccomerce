import {MdHome} from 'react-icons/md';
import {FaUserPlus} from 'react-icons/fa'
import {IoMdHand} from 'react-icons/io'

import {NavLink} from 'react-router-dom';

import "./Footer.css";
const Footer =() =>{
    return(
        <footer>
            <nav>
                <ul>
                    <li><NavLink to="/"><MdHome size="2em"/></NavLink></li>
                    <li><NavLink to="/login"><FaUserPlus size="2em" /></NavLink></li>
                    <li><NavLink to="/signin"><IoMdHand size="2em"/></NavLink></li>
                    <li><NavLink to="/productos"><IoMdHand size="2em"/></NavLink></li>
                </ul>
            </nav>
        </footer>
    )
}
export default Footer;