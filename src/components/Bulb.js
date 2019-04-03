import React, { Component } from 'react';
import bulbOffImg from "../images/bulb_off.png";
import bulbOnImg from "../images/bulb_on.png";

class BulbOff extends Component {
    render() {
        return (
            <div>
                <img src={bulbOffImg} alt="Bulb is Off" />
            </div>
        )
    }
}

class BulbOn extends Component {
    render() {
        return (
            <div>
                <img src={bulbOnImg} alt="Bulb is On" />
            </div>
        )
    }
}

export {
    BulbOff,
    BulbOn
}