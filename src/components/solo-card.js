import React, { Component } from 'react';
import Template from './../assets/grotesque.jpg';

export default class SoloCard extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            name: props.name || 'name missing',
            classification:  props.classification || 'classification missing',
            weapons: []
        }
    }

    render () {
        return (
            <div className="card">
            <img src={Template} className="card-template"/>
                <div className="nameplate">
                    <div className="nameplate-name"> { this.state.name }</div>
                    <div className="nameplate-classification">{ this.state.classification } </div>
                </div>
                {this.props.children}
            </div>
        )
    }

    registerWeapon (weapon) {
        if(this.state.weapons.indexOf(weapon) === -1 ){
            this.state.weapons.push(weapon);
        }
    }

    registerStatline (statline) {
        this.fields.statline = statline;
    }
}