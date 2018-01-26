import React, { Component } from 'react';

export default class StatLine extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: props.name,
            spd: props.spd,
            str: props.str,
            mat: props.mat,
            rat: props.rat,
            def: props.def,
            arm: props.arm,
            cmd: props.cmd,
            attributes: []
        }
    }

    render () {
        return ( 
            <div class="statline">
                <div class="statline-name">{this.state.name}</div>
                <ul class="statline-list">
                    <li class="statline-label spd">spd</li>
                    <li class="statline-label str">str</li>
                    <li class="statline-label mat">mat</li>
                    <li class="statline-label rat">rat</li>
                    <li class="statline-label def">def</li>
                    <li class="statline-label arm">arm</li>
                    <li class="statline-label cmd">cmd</li>
                    <li class="statline-stat spd"> {this.state.spd}</li>
                    <li class="statline-stat str">{this.state.str} </li>
                    <li class="statline-stat mat"> {this.state.mat}</li>
                    <li class="statline-stat rat">{this.state.rat} </li>
                    <li class="statline-stat def">{this.state.def} </li>
                    <li class="statline-stat arm">{this.state.arm} </li>
                    <li class="statline-stat cmd">{this.state.cmd} </li>
                </ul>
                <ul class="statline-attribute-list">
                    {this.state.attributes.map((attribute) => {
                        return (<li class="statline-attribute">{attribute}</li>)                    
                    })}
                    <li></li>
                </ul>
            </div>
        )
    }

}