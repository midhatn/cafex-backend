import React, { Component } from "react";



export default class ViralDashBoard extends Component {
  render() {
    const card1 = {
      border: "3px solid white",
      borderRadius: "10px",
      height: "300px",
      width: "250px",
      margin: "0 auto",
      marginLeft: "200px",
      marginTop: "200px",
      marginRight: "200px",

      textAlign: "center",
      float: "left",
      align: "center"
    };
    const card2 = {
      border: "3px solid white",
      borderRadius: "10px",
      height: "330px",
      width: "280px",
      margin: "0 auto",
      marginLeft: "1px",
      marginTop: "200px",
      marginRight: "250px",
      textAlign: "center",
      float: "right",
      align: "center"
    };


    return (
      <div>
        <div style={{ fontSize: 34, textAlign: "center", color: "white" }}>
          <h1>Welcome To CafeX Page</h1>
          <br/>
          <br/>
      
        </div>
      
        <div style={card1}>
          <img
            src="https://ca.slack-edge.com/TA2AHQDQ8-UNF1GF9LM-d75732949c6f-512"
            alt=""
          />
          <a href="https://github.com/midhatn">
            <h1>Midhat</h1>
          </a>
        </div>
        <span style={{fontSize:400 ,color:"red"}}>&hearts;</span>         
        <div style={card2}>
          <img
            src="https://emoji.slack-edge.com/TA2AHQDQ8/anas2/46a1c8b3c962233d.png" 
            alt=""
            height="768" width="768"
          />
          
          <a href="https://github.com/Anas10895">
            <h1>Anas</h1>
          </a>
        </div>
        
      </div>
    );
  }
}
