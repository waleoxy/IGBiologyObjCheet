import React from 'react';
import {useHistory} from "react-router";
import { Link } from 'react-router-dom';
import { linkData } from '../context/linkData';
import logo from "../images/biosmartlogo.png";
import "./Navbar.css"

function Navbar() {

    const history = useHistory();

    return (
        <div className="nav">
            <div className="nav__content">
                <div className="nav__logo__container">
                <img
                    onClick={() => history.push("/")}
                    className="nav__logo"
                    src={logo}
                    alt="Biosmart logo"/>
                </div>
                <div  className="nav__links">
                {linkData.map(link => (
                   
                    <li key={link.id} className="nav__link">
                        <Link to={link.path}>
                            {link.text}
                        </Link>

                    </li>
                   
                ))}
                </div>
                <div className="nav__avatar__container">
                <button>Sign up</button>
                <button>Log in</button>
                <img
                    onClick = {()=>history.push("/profile")}
                    className="nav__avatar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c7906d33850498.56ba69ac353e1.png"
                    alt="avatar" />
                </div>
            </div>
        </div>
    )
}

export default Navbar