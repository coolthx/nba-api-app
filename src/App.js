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
  showTeamId() {}
  render() {
    return (
      <div className="App">
        <h1>NBA API App</h1>
        <h2>2019 / 2020 Warriors Lineup</h2>
        <ul>
          {this.state.warriors.map((w) => (
            <li key={w.playerId} value={w.playerId}>
              {w.firstName} {w.lastName}
            </li>
          ))}
        </ul>
        <h2>Teams</h2>
        <ul>
          <li>
            {this.state.teams.map((t) => (
              <li value={t.teamId}>
                {t.teamId}{" "}
                <a href="" onclick={this.showTeamId}>
                  {t.teamName}
                </a>
              </li>
            ))}
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
