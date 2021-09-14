import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header>
        <nav>
        <ul>
          <li><a href="http://" target="_blank" rel="noopener noreferrer" className="nav-btn">File</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer" className="nav-btn">Edit</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer" className="nav-btn">View</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer" className="nav-btn">Help</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer" className="nav-btn">Home</a></li>
        </ul>
        </nav>
      </header>
      <main>
        <Toggle />
      </main>
      <footer>
        <Clock />
      </footer>
    </div>
  );
}

//////////////////////////////////////////////

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState(
      {date: new Date()}
    );
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

/////////////////////////////////////

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Red: ON' : 'Red: OFF'}
      </button>
    )
  }
}


//////////////////////////////////////
export default App;
