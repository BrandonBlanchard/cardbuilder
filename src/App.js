import React, { Component } from 'react';
import './App.css';
import SoloCard from './components/solo-card';
import Weapon from './components/weapon';
import StatLine from './components/stat-line';
import ModelDamage from './components/model-damage';

class App extends Component {
  constructor (props) {
    super(props);
    this.fields = {
      card: null,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">War Builder</h1>
        </header>
        <SoloCard name={"Grotesque Assasin"} classification="Legion Solo" ref={card => this.fields.card = card}>
          <StatLine name={"Assasin"} spd={7} str={7} mat={7} rat={5} def={14} arm={13} cmd={7} />
          <Weapon name="Assassin's Blade" isMelee={false} rof={1}  pow={4} rng={0.5} parentStr={this.fields.card}/>
          <Weapon name="Assassin's Blade" isMelee={false} rof={1}  pow={4} rng={0.5} parentStr={this.fields.card}/>
          <ModelDamage boxes={5} models={2}></ModelDamage>
        </SoloCard>
      </div>
    );
  }
}

export default App;
