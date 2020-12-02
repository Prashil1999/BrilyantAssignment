import {  Avatar, Card, CardActions, CardContent, CardMedia, Fab, Typography } from '@material-ui/core';
import React  from 'react';
import "./Customers.css";
import ArrowRightAltIcon  from '@material-ui/icons/ArrowRightAlt';
export default function CustomersComponent(){
    return(
        <>
        <div className="customers">
            <div className="customer-container">
                <Typography variant="h6" className="colorGray bold">WHAT OUR CUSTOMERS SAY</Typography>
                <div className="cards">
                <Card className="card">
                    <CardContent>
                    <CardActions disableSpacing>
                        <Avatar aria-label="recipe" className="">
                        J
                        </Avatar>
                        <div style={{paddingLeft:'10px'}}>
                            <Typography className="bold">JENNY</Typography>
                            <Typography className="bold colorGray">CEO ZOMATO</Typography>
                         </div>   
                         </CardActions>
                         <Typography>
                             Fusce rutrum pretium lorem eu congue. Curabitur nisl sem, vehicula non tellus vitae, posuere lacinia orci. In et fermentum libro.
                         </Typography>
                    </CardContent>
                </Card>
                <Card className="card">
                    <CardContent>
                    <CardActions disableSpacing>
                        <Avatar aria-label="recipe" className="">
                        K
                        </Avatar>
                        <div style={{paddingLeft:'10px'}}>
                            <Typography className="bold">KENNY</Typography>
                            <Typography className="bold colorGray">ENGINEER FACEBOOK</Typography>
                         </div>   
                         </CardActions>
                         <Typography>
                             Fusce rutrum pretium lorem eu congue. Curabitur nisl sem, vehicula non tellus vitae, posuere lacinia orci. In et fermentum libro.
                         </Typography>
                    </CardContent>
                </Card>
                <Fab size="medium"  aria-label="go" className="fab marginTop20">
                            <ArrowRightAltIcon />
                </Fab>
                </div>
            </div>
        </div>
        </>);
}