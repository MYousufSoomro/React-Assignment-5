import React, { Component } from 'react';
import { BulbOff, BulbOn } from './components/Bulb';
import BulbBroken from './components/BulbBroken';
import SwitchOn from './components/SwitchOn';
import SwitchOff from './components/SwitchOff';
import BreakBtn from './components/BreakBtn';
import NavBar from './components/NavBar';
import AlertDialog from './components/ModelDialog'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      broken: false,
    }
  }

  changeStatus() {
    const { status } = this.state;
    this.setState({ status: !status, broken: false })
  }

  beakBulb() {
    this.setState({ status: false, broken: true })
  }

  render() {
    const { status, broken } = this.state;
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <AlertDialog />
          {!status && !broken && <BulbOff />}
          {status && !broken && <BulbOn />}
          {broken && <BulbBroken />}
          {!status ? <SwitchOn onClick={() => { this.changeStatus() }} /> : <SwitchOff onClick={() => { this.changeStatus() }} />}
          {!broken ? <BreakBtn onClick={() => { this.beakBulb() }} /> : true}
        </header>
      </div>
    );
  }
}

export default App;
