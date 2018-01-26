import React, { Component } from 'react';
import './App.css';
import SoloCard from './components/solo-card';
import Weapon from './components/weapon';
import StatLine from './components/stat-line';

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
          <Weapon isMelee={false} rof={1} rng={0.5} pow={4} rng={0.5} parentStr={this.fields.card}/>
          <Weapon isMelee={false} rof={1} rng={0.5} pow={4} rng={0.5} parentStr={this.fields.card}/>
        </SoloCard>
      </div>
    );
  }
}

export default App;
