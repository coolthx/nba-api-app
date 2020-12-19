import React from 'react';
import nba from 'nba';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      team: [] 
    }
  }
  componentDidMount() {
    let w = nba.players.filter(player => player.teamId == 1610612744);
    let warriors = w.map(warrior => warrior)
    
    this.setState({
      team: warriors
    })
  }
  render() {
    return (
      <div className="App">
        <h1>NBA API App</h1>
        <h2>2019 / 2020 Warriors Lineup</h2>
        <ul>
          {this.state.team.map(
            t => <li key={t.playerId} value={t.playerId}>{t.firstName} {t.lastName}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
