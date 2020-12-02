import { Button, TextField, Typography } from '@material-ui/core';
import  React  from 'react';
import "./GetInTouch.css";
export default function GetInTouchComponent(){
    return(
        <>
        <div className="get-in-touch">
         <div className="container">
            <Typography variant="h5"className="bold">Get in Touch</Typography>
            <div>
            <Typography className="paddingTop20 length">Quisque tincsidunt ex volutpat lectus accumsan, at fermentum quam fasilisis. Aliquam erat volutpat. Aenean quis nibh ac purus faucibus rhoncus.</Typography>
            </div>
            <div className="form">
                <div className="input">
                    <label className="bold">Full name</label>
                    <TextField id="filled-basic" className="field"  variant="filled" />
                </div>
                <div className="input">
                    <label className="bold">Email</label>
                    <TextField id="filled-basic" className="field" variant="filled" />
                </div>
                <div>
                    <Button variant="outlined" color="primary" className="btn">Reach out</Button>
                </div>
            </div>
         </div>
        </div>
        </>
    );
} 