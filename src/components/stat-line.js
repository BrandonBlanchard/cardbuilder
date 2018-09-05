import React, { Component } from 'react';
import AttributeHelper from './../classes/attribute-helper';

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
            attributes: ['flight', 'stealth', 'base30']
        }
    }

    render () {
        return ( 
            <div className="statline">
                <div className="statline-name">{this.state.name}</div>
                <ul className="statline-list">
                    <li className="statline-label spd">spd</li>
                    <li className="statline-label str">str</li>
                    <li className="statline-label mat">mat</li>
                    <li className="statline-label rat">rat</li>
                    <li className="statline-label def">def</li>
                    <li className="statline-label arm">arm</li>
                    <li className="statline-label cmd">cmd</li>
                    <li className="statline-stat spd"> {this.state.spd}</li>
                    <li className="statline-stat str">{this.state.str} </li>
                    <li className="statline-stat mat"> {this.state.mat}</li>
                    <li className="statline-stat rat">{this.state.rat} </li>
                    <li className="statline-stat def">{this.state.def} </li>
                    <li className="statline-stat arm">{this.state.arm} </li>
                    <li className="statline-stat cmd">{this.state.cmd} </li>
                </ul>
                <ul className="statline-attribute-list">
                    {this.state.attributes.map((attribute, i) => {
                        return (<li key={i} className="statline-attribute"><img className="statline-attribute-icon" src={ AttributeHelper.GetAttributeImage(attribute) } /></li>)                    
                    })}
                </ul>
            </div>
        )
    }

}