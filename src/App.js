import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// const list = ["Apples", "Bananas", "Peaches"]

class App extends React.Component {
  state = {
    filter: "",
    fruit: [
      {
        name: "Apple",

      },
      {
        name: "Peach",

      },
      {
        name: "Pear",
      },
      {
        name: "Banana",
      }
    ]
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, fruit } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredFruit = fruit.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      <div>
        <h1 className="h1">Search for the fruits</h1>
        <input className="inputStyle" value={filter} onChange={this.handleChange} />
        {filteredFruit.map(item => (
          <div>
            <div className="p">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;