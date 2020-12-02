import { Divider, Fab, Typography } from '@material-ui/core';
import  React  from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import "./MainBanner.css";

export default function MainBanner(){
    return(
        <>
        <div className="main-banner">
            <div className="main-content">
                <div className="main-heading">
                    <Typography variant="h3" className="bold">Build your IT for Growth</Typography>
                </div>
                <div className="main-heading">
                    <Typography variant="subtitle1" className="bold paddingTop15">India's Leading Managed Services Provider</Typography>
                    <Typography variant="caption" className="size14" >Meacenas libero mauris,sodales cursus quam sed, consectetur rutrum orci.</Typography>
                </div>
                <div className="main-label">
                    <Fab size="medium" color="secondary" aria-label="go" >
                        <ArrowRightAltIcon />
                    </Fab>
                    <Typography color="secondary" style={{paddingLeft:"10px",cursor:"pointer",fontWeight:"bolder"}} >KNOW MORE ABOUT OUR SERVICES</Typography>
                </div>
                <div className="main-info">
                    <div className="one-fifth help-customers" >
                    <Typography className="size16" style={{width:"140px"}}>Helping Customers across  <span className="bold size18"> India</span></Typography>
                    </div>
                    <div className="one-fifth">
                        <span className="size22 bold">8+</span>
                        <span className="size14 bold paddingTop5">LOCATIONS</span>  
                        <div class="underline width10 marginTop5"></div>                   
                    </div>
                    <div className="one-fifth">
                        <span className="size22 bold">50+</span>
                        <span className="size14 bold paddingTop5">PARTNERS</span>
                        <div class="underline width20 marginTop5"></div>                         
                    </div>
                    <div className="one-fifth">
                        <span className="size22 bold">1000+</span>
                        <span className="size14 bold paddingTop5">CUSTOMERS</span>
                        <div class="underline width30 marginTop5"></div>                      
                    </div>
                    <div className="one-fifth">
                        <span className="size22 bold ">5000+</span>
                        <span className="size14 bold paddingTop5">PROJECTS</span>
                        <div class="underline width40 marginTop5"></div>               
                    </div>
                </div>
                <div className="main-heading">
                    <div>
                        <Typography className="bold size14">OUR CUSTOMERS</Typography>
                    </div>
                    <div className="main-customers">
                        <div className="equal9">
                        <img src="https://www.bestdesigns.co/uploads/inspiration_images/4350/990__1511457498_404_walmart.png" width="100px" alt="Walmart" height="50px"/>
                        </div>
                        <div className="equal9">
                        <img src="https://lh3.googleusercontent.com/proxy/K_UUGF8H4DJar4EQIh16VYwcL1yx73204qcrr0Ubgx_j5ZU1ZfbrXWHXugTN5RBY50VMXOOVf7voYWPNnKyRTSPins4IUGQz2xhFVh86rxRw0eFZchh-a-Gef7HLei_m" width="100px" alt="clut.fit" height="50px" />
                        </div>
                        <div className="equal9">
                        <img src="https://pbs.twimg.com/profile_images/1300834212912803840/-V1Rz461.jpg" height="50px" width="100px" alt="paytm"/>
                        </div>
                        <div className="equal9">
                        <img src="https://www.businessinsider.in/thumb/msid-64612179,width-600,resizemode-4,imgsize-19073/tech/heres-how-swiggys-customer-service-lies-to-you/swiggy.jpg" height="50px" width="100px" alt="Swiggy"/>
                        </div>
                        <div className="equal9">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4o1tvW2xTgu-Bxowv9Nj6vpumSgYlDESyZg&usqp=CAU"  height="50px" width="100px" alt="Visa"/>
                        </div>
                        <div className="equal9">
                        <img src="https://www.sciencemag.org/sites/default/files/styles/logo_250w/public/LillyLogo.png?itok=QEDnHPi7" height="50px" width="100px" alt="Lilly"/>
                        </div>
                        <Fab size="small"  aria-label="go" className="equal9">
                            <ArrowRightAltIcon />
                        </Fab>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
} 