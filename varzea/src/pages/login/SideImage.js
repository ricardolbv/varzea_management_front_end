import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import side from '../../imgs/FieldImg.png';


const useStyle = makeStyles({
    Img: {
        position: "fixed",
        top: "25%",
        right: "70%",
        width: "27%",
        height: "56%",
    }
})

function SideImage() {
    const classes = useStyle();
    return (
        <img src={side} className={classes.Img} alt=""/>
    )
}

export default SideImage;