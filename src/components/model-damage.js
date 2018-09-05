import React from 'react';

export default class ModelDamage extends React.Component {
    constructor (props) {
        super(props);


    }

    buildModels () {
        let models = [];
        
        for(let modelCount = 0;  modelCount < this.props.models; modelCount += 1) {    
            let boxes = [];
            
            for(let boxCount = 0; boxCount < this.props.boxes; boxCount += 1) {
                boxes.push(<li className="model-box"></li>)
            }

            models.push(
                <div className="model">
                    <li className="model-letter">Model A's Damage</li>
                    {boxes}
                </div>);
        }

        return (<div className="models">{models}</div>);
    }
    
    render () {
        
        return (
            <div className="model-damage">
                    { this.buildModels() }
            </div>
        )
    }
}