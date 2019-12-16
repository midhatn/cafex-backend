import React, { Component } from "react";

export default class ViralDashBoard extends Component {
  render() {
    const card = {
      border: "3px solid white",
      borderRadius: "10px",
      height: "150px",
      width: "120px",
      margin: "0 auto",
      marginLeft: "90px",
      marginTop: "120px",
      textAlign: "center",
      float: "left",
      align: "center"
    };

    return (
      <div>
        <div style={{ fontSize: 34, textAlign: "center", color: "white" }}>
          <h1>Welcome To CafeX Page</h1>
          <br/>
          <br/>
          <h2>Dev Team : </h2>
        </div>
        <div style={card}>
          <img
            src="https://avatars1.githubusercontent.com/u/35053211?s=460&v=4"
            alt=""
          />
          <a href="https://github.com/midhatn">
            <h1>Midhat</h1>
          </a>
        </div>
        <div style={card}>
          <img
            src="https://avatars0.githubusercontent.com/u/24430074?s=460&v=4"
            alt=""
          />
          <a href="https://github.com/HishamBS">
            <h1>Anas</h1>
          </a>
        </div>
        <div style={{ height: "200px", width: "300px", margin: "0 auto" }}>
          <img
            src="https://drive.google.com/uc?id=1cet9VR9euTe1TjQWzVySTQhKDqdaleaI"
            alt=""
          />
        </div>
      </div>
    );
  }
}
