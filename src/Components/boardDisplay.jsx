import React, { Component } from "react";
import FirstCardDisplay from "./firstCardDisplay";
import SecondCardDisplay from "./secondCardDisplay";
import ThirdCardDisplay from "./thirdCardDisplay";
import UpdateComponentDisplay from "./updateComponentDisplay";
import Header from "./header";
import SubHeader from "./subHeader";
import "./boardDisplay.css";

var list = require("../storeData");
var name, dataUpdate, typeArr;
class boardDisplay extends Component {
  state = {
    firstList: list.listFirst,
    secondList: list.listSecond,
    thirdList: list.listThird,
    updateFlag: 0
  };
  constructor() {
    super();
    this.updateFired = this.updateFired.bind(this);
    this.valueReset = this.valueReset.bind(this);
  }

  updateFired(valueName, updateData, arrType) {
    name = valueName;
    dataUpdate = updateData;
    typeArr = arrType;

    this.setState({
      updateFlag: 1
    });
  }

  valueReset(data1, data2, data3) {
    this.setState({
      firstList: data1,
      secondList: data2,
      thirdList: data3
    });
  }
  render() {
    return (
      <div className="forBackgroundColor">
        <div>
          <Header />
        </div>
        <div>
          <SubHeader />
        </div>
        <div className="boardDisplayContainer">
          <div className="insideContainerB">
            <FirstCardDisplay
              data={this.state.firstList}
              title={"Lets'Do"}
              updateFunction={this.updateFired}
            />
          </div>

          <div className="insideContainerB">
            <SecondCardDisplay
              data={this.state.secondList}
              title={"Pending"}
              updateFunction={this.updateFired}
            />
          </div>

          <div className="insideContainerB">
            <ThirdCardDisplay
              data={this.state.thirdList}
              title={"Done"}
              updateFunction={this.updateFired}
            />
          </div>
        </div>
        {this.state.updateFlag == 1
          ? ((this.state.updateFlag = 0),
            (
              <UpdateComponentDisplay
                valueName={name}
                arrType={typeArr}
                fulldata={dataUpdate}
                valueSetRender={this.valueReset}
              />
            ))
          : null}
      </div>
    );
  }
}

export default boardDisplay;
