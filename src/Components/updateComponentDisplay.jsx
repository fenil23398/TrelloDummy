import React, { Component } from "react";
import "./updateCompo.css";

var list = require("../storeData");
var value, data, arrid, tmpArr;
class updateComponent extends Component {
  state = {
    firstList: list.listFirst,
    secondList: list.listSecond,
    thirdList: list.listThird
  };

  //arr id is typeof array do=1 done=2 pending=3
  //value has value of element which will be moved
  //data is array passed by updated values

  handleChange = e => {
    var selectedValue = e.target.value;
    console.log("Inside Update");
    if (arrid == selectedValue) {
      this.props.valueSetRender(
        this.state.firstList,
        this.state.secondList,
        this.state.thirdList
      );
    } else {
      tmpArr = data[0].list;
      var newArr = tmpArr.filter(
        arrName => arrName.name.toLowerCase() !== value.toLowerCase()
      );
      var arrToMove = tmpArr.filter(
        arrName => arrName.name.toLowerCase() === value.toLowerCase()
      );

      //now put the newArr back to its place inside array
      if (arrid == 1) this.state.firstList[0].list = newArr;
      else if (arrid == 2) this.state.secondList[0].list = newArr;
      else this.state.thirdList[0].list = newArr;

      //now this logic is to move selected row to new selected array from dropdown

      if (selectedValue == 1) this.state.firstList[0].list.push(arrToMove[0]);
      else if (selectedValue == 2)
        this.state.secondList[0].list.push(arrToMove[0]);
      else this.state.thirdList[0].list.push(arrToMove[0]);
    }
    this.props.valueSetRender(this.state.firstList,this.state.secondList,this.state.thirdList)
  };

  render() {
    value = this.props.valueName;
    data = this.props.fulldata;
    arrid = this.props.arrType;
    console.log("array received",data[0].list);
    return (
      <div className="popup">
        <div className="popupinner">
          <div className="col-md-4">
            <h3> Selected Element "{value}" </h3>
            <div>
              <select onChange={this.handleChange}>
                <option value="0">Select Status For List</option>
                <option value="1">Lets Do</option>
                <option value="2">Pending</option>
                <option value="3"> Done</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default updateComponent;
