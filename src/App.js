import React, { Component } from "react";
import Header from "./components/Header/Header";
import Credits from "./components/Credits/Credits";
import Mapcontainer from "./components/MapContainer/Mapcontainer"
import axios from 'axios';


class App extends Component {
  state = {
    playgrounds: null
  }

  componentDidMount() {
    axios.get("http://localhost:8080/parks")
    .then((res) => {
      this.setState({
        playgrounds: res.data.playgrounds
      })
    });
  }

  render() {
    if (this.state.playgrounds === null) {
      return (
        <section>
          <h1>... This Page is Loading ...</h1>
        </section>
      )}
    return (
      <div>
        <Header />
        <main>
          <Mapcontainer playgrounds={this.state.playgrounds}/>
          <Credits />
        </main>
      </div>
    );
  }
}

export default App;


