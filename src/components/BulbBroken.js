import React, { Component } from 'react';
import bulbBrokenImg from "../images/bulb_broken.png";

class BulbBroken extends Component{
    render(){
        return (
            <div>
                <img src={bulbBrokenImg} alt="Bulb is Broken"/>
            </div>
        )
    }
}

export default BulbBroken;