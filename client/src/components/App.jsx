import React from 'react';
import Channels from './Channels.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AFCEast: ['Buffalo Bills', 'Miami Dolphins', 'New England Patriots', 'New York Jets'],
      AFCNorth: ['Baltimore Ravens', 'Pittsburgh Steelers', 'Cleveland Browns', 'Cincinnati Bengals'],
      AFCSouth: ['Houson Texans', 'Tenessee Titans', 'Indianapolis Colts', 'Jacksonville Jaguars'],
      AFCWest: ['Las Vegas Raiders', 'Denver Broncos', 'Kansas City Chiefs', 'Los Angeles Chargers'],
      NFCEast: ['Washington Football Team', 'Dallas Cowboys', 'Philadelphia Eagles', 'New York Giants'],
      NFCNorth: ['Chicago Bears', 'Detroit Lions', 'Green Bay Packers', 'Minnesota Vikings'],
      NFCSouth: ['Carolina Panthers', 'Tampa Ba Buccaneers', 'New Orleans Saints', 'Atlanta Falcons'],
      NFCWest: ['San Francisco 49ers', 'Arizona Cardinals', 'Los Angeles Rams', 'Seattle Seahawks']
    };
  }

  componentDidMount() {
    axios.get('/')
    .then(res => console.log(res))
    .catch(err => console.error(err));
  };

  render() {
    return (
      <div>
        <div>Welcome to NFL Chat!</div>
        <br />
        <Channels division={'AFC East'} teams={this.state.AFCEast}/>
        <Channels division={'AFC North'} teams={this.state.AFCNorth}/>
        <Channels division={'AFC South'} teams={this.state.AFCSouth}/>
        <Channels division={'AFC West'} teams={this.state.AFCWest}/>
        <Channels division={'NFC East'} teams={this.state.NFCEast}/>
        <Channels division={'NFC North'} teams={this.state.NFCNorth}/>
        <Channels division={'NFC South'} teams={this.state.NFCSouth}/>
        <Channels division={'NFC West'} teams={this.state.NFCWest}/>
      </div>
    )
  };
}

export default App;
