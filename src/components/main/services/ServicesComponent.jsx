import { Typography } from '@material-ui/core';
import  React  from 'react';
import "./Services.css";
import MemoryIcon from '@material-ui/icons/Memory';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import HelpIcon from '@material-ui/icons/Help';
import SettingsInputHdmiIcon from '@material-ui/icons/SettingsInputHdmi';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import StorageIcon from '@material-ui/icons/Storage';
import EcoIcon from '@material-ui/icons/Eco';

export default function ServicesComponent(){
    return(
        <>
        <div className="services">
            <div className="servces-container">
                <Typography variant="h6" className="colorGray bold" >SERVICES & OFFERINGS</Typography>
                <Typography variant="h5" className="bold paddingTop20">We create value and help your business grow. </Typography>
                <Typography className="bold paddingTop10">Quisque tincidunt ex volutpat lectus accumsan, at fermmentum quam facilisis. Aliquam erat volutpat. Aenean quis nibh ac purus faucibus rhoncus.</Typography>
                <div className="grid">
                    <div className="grid-element">
                        <MemoryIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold size18 paddingTop5">Compute</Typography>
                        <Typography className="paddingTop5">Quisque tincidunt ex volutpat lectus accumsan, at fermmentum quam facilisis.</Typography>
                    </div>
                    <div className="grid-element">
                        <AttachMoneyIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold size18 paddingTop5">Financing</Typography>
                        <Typography className="paddingTop5">Quisque tincidunt ex volutpat lectus accumsan, at fermmentum quam facilisis.</Typography>
                    </div>
                    <div className="grid-element">
                        <FlightTakeoffIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold size18 paddingTop5">Management and Deployment</Typography>
                        <Typography className="paddingTop5">Quisque tincidunt ex volutpat lectus accumsan, at fermmentum quam facilisis.</Typography>
                    </div>
                    <div className="grid-element">
                        <HelpIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold size18 paddingTop5">Support</Typography>
                        <Typography className="paddingTop5">Quisque tincidunt ex volutpat lectus accumsan, at fermmentum quam facilisis.</Typography>
                    </div>
                    <div className="grid-element">
                        <SettingsInputHdmiIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold size18 paddingTop5">Collaboration & Connectivity</Typography>
                        <Typography className="paddingTop5">Quisque tincidunt ex volutpat lectus accumsan, at fermmentum quam facilisis.</Typography>
                    </div>
                    <div className="grid-element">
                        <CloudDoneIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold size18 paddingTop5">Network & Scurity</Typography>
                        <Typography className="paddingTop5">Quisque tincidunt ex volutpat lectus accumsan, at fermmentum quam facilisis.</Typography>
                    </div>
                    <div className="grid-element">
                        <PhoneIphoneIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold size18 paddingTop5">ESS & App Development</Typography>
                        <Typography className="paddingTop5">Quisque tincidunt ex volutpat lectus accumsan, at fermmentum quam facilisis.</Typography>
                    </div>
                    <div className="grid-element">
                        <StorageIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold size18 paddingTop5">Data Centers & Services</Typography>
                        <Typography className="paddingTop5">Quisque tincidunt ex volutpat lectus accumsan, at fermmentum quam facilisis.</Typography>
                    </div>
                    <div className="grid-element">
                        <EcoIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold size18 paddingTop5">e-Waste Management
                        </Typography>
                        <Typography className="paddingTop5">Quisque tincidunt ex volutpat lectus accumsan, at fermmentum quam facilisis.</Typography>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
} 