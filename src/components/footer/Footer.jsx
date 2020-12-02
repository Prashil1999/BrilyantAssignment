import React from "react";
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';

export default function Footer(props){
 return(
     <>
        <div className="footer">
            <div className="footer-content">
                <div className="one-fifth-footer">
                    <ul className="footer-menu">
                        <li className="menu-heading"><a>MANAGED SERVICE</a></li>
                        <li className="menu-item">Collaboration Services</li>
                        <li className="menu-item">Digital Transformation</li>
                        <li className="menu-item">Enterprise Security Services</li>
                        <li className="menu-item">Network As A Platform</li>
                        <li className="menu-item">Next Gen Datacentre Services</li>
                    </ul>
                </div>
                <div className="one-fifth-footer">
                    <ul className="footer-menu">
                        <li className="menu-heading">ENTERPRISE SOLUTIONS</li>
                        <li className="menu-item">Apple at work</li> 
                        <li className="menu-item">AV Solutions</li>
                        <li className="menu-item">Enterprise Networking and Security</li>
                        <li className="menu-item">Network As A Platform</li>
                        <li className="menu-item">End User Computing and Mobility</li>
                        <li className="menu-item">MDM Solutions</li>
                    </ul>
                </div>
                <div className="one-fifth-footer small-container">
                    <ul className="footer-menu">
                        <li className="menu-heading">EDUCATION</li>
                        <li className="menu-item">Apple</li> 
                        <li className="menu-item">Samsung</li>
                        <li className="menu-item">Adobe</li>
                    </ul>
                </div>
                <div className="one-fifth-footer">
                    <ul className="footer-menu">
                        <li className="menu-heading">SERVICES</li>
                        <li  className="menu-item">Apple Authorized Service Provider</li> 
                        <li className="menu-item">Remote Diagnostics</li>
                        <li className="menu-item">Resident Engineer Services</li>
                    </ul>
                </div>
                <div className="one-fifth-footer">
                <ul className="footer-menu">
                        <li className="main-item">BRILYANT</li>
                        <li className="menu-item">#915 & 916, 8th Floor, Oxford Towers, New Municipal No.139, Opp. Leela Palace, HAL Airport Road, Bangalore-560008</li>
                        <li>
                            <ul className="footer-inner-menu">
                                <li className="menu-item"><FacebookIcon /></li>
                                <li className="menu-item"><TwitterIcon /></li>
                                <li className="menu-item"><GitHubIcon /></li>
                                <li className="menu-item"><TelegramIcon /></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
            &#169; Brilyant IT Solution Pvt.Ltd. 2020 - All Rights Reserved

            </div>
        </div>
     
     </>
 );
}