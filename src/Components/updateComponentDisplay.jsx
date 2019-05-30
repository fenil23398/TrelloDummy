import React, { Component } from "react";
import "./updateCompo.css";

var list = require("../storeData");
var value, data, arrid, tmpArr, commentArr, descArr;
class updateComponent extends Component {
  state = {
    firstList: list.listFirst,
    secondList: list.listSecond,
    thirdList: list.listThird,
    flagComment: 0,
    flagDescription: 0
  };

  //arr id is typeof array do=1 done=2 pending=3
  //value has value of element which will be moved
  //data is array passed by updated values
  callParent() {
    //this function further calling parent & update parent cards
    this.props.valueSetRender(
      this.state.firstList,
      this.state.secondList,
      this.state.thirdList
    );
  }
  reSetArrays(newArr) {
    //this function is to change all arrays to set state further
    if (arrid == 1) this.state.firstList[0].list = newArr;
    else if (arrid == 2) this.state.secondList[0].list = newArr;
    else this.state.thirdList[0].list = newArr;
  }
  handleChange = e => {
    var selectedValue = e.target.value;
    console.log("Inside Update");
    if (arrid == selectedValue || selectedValue == 0) {
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
    this.callParent();
  };
  onClickComment = () => {
    this.setState({
      flagComment: 1
    });
  };

  onClickDescription = e => {
    console.log("Inside OnClickdescription");
    this.setState({
      flagDescription: 1
    });
  };

  removeFromList = id => {
    if (id == 1) {
      document.getElementById("insideDesc").value = "";
      document.getElementById("insideComment");
      this.setState({
        flagDescription: 0
      });
    } else {
      document.getElementById("insideComment").value = "";
      this.setState({
        flagComment: 0
      });
    }
  };
  addComment = () => {
    var arrToInsert = {
      name: value,
      key: 10,
      comment: document.getElementById("insideComment").value
    };
    tmpArr = data[0].list;
    var newArr = tmpArr.filter(
      arrName => arrName.name.toLowerCase() !== value.toLowerCase()
    );
    newArr.push(arrToInsert);
    this.reSetArrays(newArr);
    this.callParent();
  };

  addDesc = () => {
    console.log("Inside Add to Desc");
    var descToInsert = {
      name: value,
      key: 10,
      desciption: document.getElementById("insideDesc").value
    };
    tmpArr = data[0].list;
    var newArr = tmpArr.filter(
      arrName => arrName.name.toLowerCase() !== value.toLowerCase()
    );
    newArr.push(descToInsert);
    this.reSetArrays(newArr);
    this.callParent();
  };

  getContent = () => {
    // var index=data[0].list.name.indexOf(value.toLowerCase());
    var index = data[0].list.findIndex(
      i => i.name.toLowerCase() === value.toLowerCase()
    );

    console.log("index is", index);
    if (data[0].list[index].comment) commentArr = data[0].list[index].comment;
    if (data[0].list[index].desciption)
      descArr = data[0].list[index].desciption;
  };
  render() {
    value = this.props.valueName;
    data = this.props.fulldata;
    arrid = this.props.arrType;
    this.getContent();
    console.log(data[0].list);
    return (
      <div className="popup">
        <div className="popupinner">
          <div className="bodyContainerUpdate">
            <div className="setWidthInside">
              <h3 className="alignCenter">Selected Element {value}</h3>
              <div>
                <select onChange={this.handleChange} className="insideWrapping">
                  <option value="0">Select Status For List</option>
                  <option value="1">Lets Do</option>
                  <option value="2">Pending</option>
                  <option value="3"> Done</option>
                </select>
              </div>
            </div>

            <div className="setWidthInside">
              <h3 className="alignCenter"> Description</h3>
              <div>
                <textarea
                  className="insideWrapping"
                  placeholder="Here Enter Description"
                  id="insideDesc"
                  onChange={event => this.onClickDescription(event)}
                />
              </div>
              {this.state.flagDescription === 1 ? (
                <div>
                  <button className="descButton" onClick={() => this.addDesc()}>
                    Add{" "}
                  </button>
                  <button
                    onClick={() => this.removeFromList(1)}
                    className="crossDesign"
                  >
                    <i className="fa fa-close" />
                  </button>
                </div>
              ) : null}
            </div>

            <div className="setWidthInside">
              <h3 className="alignCenter"> Comment</h3>
              <div>
                <textarea
                  className="insideWrapping"
                  placeholder="Here Enter Comment"
                  id="insideComment"
                  onChange={event => this.onClickComment(event)}
                />
              </div>
              {this.state.flagComment === 1 ? (
                <div>
                  <button
                    className="descButton"
                    onClick={() => this.addComment()}
                  >
                    ADD{" "}
                  </button>
                  <button
                    onClick={() => this.removeFromList(2)}
                    className="crossDesign"
                  >
                    <i className="fa fa-close" />
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <br />

            <h3 className="alignCenter">Comment To {value} Card</h3>
            {commentArr ? (
              ( <p className="makeboxUpdate"> {commentArr}</p>)
            ) : (
              <p className="makeboxUpdate">Sorry, No Comments</p>
            )}
            <h3 className="alignCenter">Description to {value} card</h3>
            {descArr ? (
              ( <p className="makeboxUpdate">{descArr}</p>)
            ) : (
              <p className="makeboxUpdate">Sorry, No Description</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default updateComponent;
