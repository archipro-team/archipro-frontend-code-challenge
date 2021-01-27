import React from 'react'
import { Grid } from '@material-ui/core'

import {useStyles} from './userInfoPanel.style'
import './userInfoPanel.style.js'
// import UserMap from '../googleMaps/googleMaps';

export default function InfoPanel(props) {

    /*
    Infomation panel to display information on a user given a user object.
    */

    const {person} = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container justify='center' className={classes.parent}>
                <Grid item xs={12} md={3}>
                    <img className={classes.profileImg} src={person.picture} alt='profile for the user'/>
                </Grid>
                <Grid item container xs={12} md={9} className={classes.infoTextPanel}>
                    <Grid item xs={12} md={6}>
                        <h1 className={classes.label}>Name:</h1>
                        <h2 className={classes.detailValue}>{person.name}</h2>
                        <h1 className={classes.label}>Age:</h1>
                        <h2 className={classes.detailValue}>{person.age}</h2>
                        <h1 className={classes.label}>Gender:</h1>
                        <h2 className={classes.detailValue}>{person.gender}</h2>
                        <h1 className={classes.label}>Email:</h1>
                        <h2 className={classes.detailValue}>{person.email}</h2>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h1 className={classes.label}>Company:</h1>
                        <h2 className={classes.detailValue}>{person.company}</h2>
                        <h1 className={classes.label}>Address:</h1>
                        <h2 className={classes.detailValue}>{person.address}</h2>
                        <h1 className={classes.label}>Phone:</h1>
                        <h2 className={classes.detailValue}>{person.phone}</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <h1 className={classes.label}>About:</h1>
                        <h2 className={classes.detailValue}>{person.about}</h2>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3} className={classes.mapPanel}>
                    {/* <UserMap latitude={person.latitude} longitude={person.longitude} /> */}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}