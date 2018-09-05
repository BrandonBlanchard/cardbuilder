import React, { Component } from 'react';


export default class Weapon extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: props.name,
            rof: props.rof,
            rng: props.rng,
            pow: props.pow,
            ps: 0 + props.parentStr
        };
    }

    render () {
        return (
            <div className="weapon">
                <div className="weapon-name">{ this.state.name }</div>
                <ul className="weapon-stats">
                    <li className="weapon-label rng" style={ this.state.attacks > 1 ? 'display: none;' : null }>rof</li>
                    <li className="weapon-label rng">rng</li>
                    <li className="weapon-label pow">pow</li>
                    <li className="weapon-label ps">p+s</li>
                    <li className="weapon-stat rng" style={ this.state.attacks > 1 ? 'display: none;' : null }>{this.state.rof}</li>
                    <li className="weapon-stat rng">{this.state.rng}</li>
                    <li className="weapon-stat pow">{this.state.pow}</li>
                    <li className="weapon-stat ps">{this.state.ps}</li>
                </ul>
            </div>
        )
    }
}