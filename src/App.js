import React from "react";
import nba from "nba";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      warriors: [],
      currentTeamId: "",
      showId: false,
    };
    // One-Way Binding
    this.showTeamId = this.showTeamId.bind(this);
  }
  componentDidMount() {
    // Filtering all players that play for the Warriors
    let w = nba.players.filter((player) => player.teamId === 1610612744);
    let teamData = nba.teams;

    this.setState({
      teams: teamData,
      warriors: w,
    });
  }
  showTeamId() {
    this.setState({
      showId: !this.state.showId,
    });
  }
  render() {
    return (
      <div className="App">
        <h1>NBA API App</h1>
        <h2>Filtering players per team (Ex: Warriors)</h2>
        <h4>Example: Warriors</h4>
        <ul>
          {this.state.warriors.map((w) => (
            <li key={w.playerId} value={w.playerId}>
              {w.firstName} {w.lastName}
            </li>
          ))}
        </ul>
        <h2>Team Iteration</h2>
        <button onClick={this.showTeamId}>Show Team IDs</button>
        <ul>
          {this.state.teams.map((t) => (
            <li key={t.teamId} value={t.teamId}>
              {this.state.showId ? t.teamId + " - " : ""} {t.teamName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
