import React, { Component } from 'react';


export default class Weapon extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: 'Claws',
            rof: props.rof,
            rng: props.rng,
            pow: props.pow,
            ps: 0 + props.parentStr
        };
    }

    render () {
        return (
            <ul class="weapon-stats">
                <li class="weapon-label rng" style={ this.state.attacks > 1 ? 'display: none;' : null }>rof</li>
                <li class="weapon-label rng">rng</li>
                <li class="weapon-label pow">pow</li>
                <li class="weapon-label ps">p+s</li>
                <li class="weapon-stat rng" style={ this.state.attacks > 1 ? 'display: none;' : null }>{this.state.rof}</li>
                <li class="weapon-stat rng">{this.state.rng}</li>
                <li class="weapon-stat pow">{this.state.pow}</li>
                <li class="weapon-stat ps">{this.state.ps}</li>
            </ul>
        )
    }
}