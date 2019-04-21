import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import initialState from "./helper/initialState";
import "./index.css";
import Ranges from "./components/ranges/ranges";
import Blob from "./components/blob/blob";

class App extends Component {
  state = { ...initialState };

  updateBorderValue = event => {
    const rangeId = event.target.id;
    const rangeValue = Number(event.target.value);
    this.setState({
      [rangeId]: rangeValue,
      copyStatus: false
    });
  };

  copyToClipboard = event => {
    event.preventDefault();
    const copyCSS = document.getElementById("copyCSS");
    copyCSS.select();
    document.execCommand("copy");
    this.setState({
      copyStatus: true
    });
  };

  render() {
    const {
      topLeftRadius,
      topRightRadius,
      bottomLeftRadius,
      bottomRightRadius,
      copyStatus
    } = this.state;
    const { updateBorderValue, copyToClipboard } = this;
    const rangeInputs = [
      {
        id: "topLeftRadius",
        value: topLeftRadius,
        name: "Top Left Radius"
      },
      {
        id: "topRightRadius",
        value: topRightRadius,
        name: "Top Right Radius"
      },
      {
        id: "bottomRightRadius",
        value: bottomRightRadius,
        name: "Bottom Right Radius"
      },
      {
        id: "bottomLeftRadius",
        value: bottomLeftRadius,
        name: "Bottom Left Radius"
      }
    ];

    return (
      <>
        <Blob radius={rangeInputs} copyStatus={copyStatus} copyToClipboard={copyToClipboard} />
        <Ranges ranges={rangeInputs} handleChange={updateBorderValue} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
