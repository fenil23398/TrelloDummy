import React, { Component } from "react";
import FirstCardDisplay from "./firstCardDisplay";
import Header from "./header";
import SubHeader from "./subHeader";
import  "./boardDisplay.css";

var list = require("../storeData");

class boardDisplay extends Component {
  state = {
    firstList: list.listFirst,
    secondList: list.listSecond,
    thirdList: list.listThird
  };
  render() {
    return (
        <div className="forBackgroundColor">
      <div>
        {/* <h2>{this.state.secondList[0].list.length}</h2> */}
        <Header />
        </div>
        <div>
        <SubHeader/>
        </div>
        <div className="boardDisplayContainer">
           <div  className="insideContainerB">
           <FirstCardDisplay
           
            data={this.state.firstList}
            title={"Lets'Do"}
          />
          </div>

          <div className="insideContainerB">
          <FirstCardDisplay
            
            data={this.state.secondList}
            title={"Pending"}
          />
          </div>

          <div  className="insideContainerB">
          <FirstCardDisplay
           
            data={this.state.thirdList}
            title={"Done"}
          />
          </div>
        </div>
        {/* <SecondCardDisplay data={this.state.secondList} /> */}
      </div>
    );
  }
}

export default boardDisplay;
