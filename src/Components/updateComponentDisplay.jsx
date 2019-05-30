import React, { Component } from "react";
import "./updateCompo.css";

var list = require("../storeData");
var value, data, arrid, tmpArr;
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

  handleChange = e => {
    var selectedValue = e.target.value;
    console.log("Inside Update");
    if (arrid == selectedValue || selectedValue==0) {
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
    this.props.valueSetRender(
      this.state.firstList,
      this.state.secondList,
      this.state.thirdList
    );
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

  removeFromList=(id)=>{
      if(id==1){
        document.getElementById("insideDesc").value="";
        document.getElementById("insideComment")
        this.setState({
          flagDescription:0
        })
      }
      else{
        document.getElementById("insideComment").value="";
        this.setState({
          flagComment:0
        })
      }
  } 
  addList=()=>{
    console.log("Inside Add to List");
    var arrtoInsert = {name : name,
                      key : 10,
                      comment :document.getElementById("insideComment").value};
    // console.log(arrtoInsert.comment);
    // new object successfully created now delete the existing row fromarray
    // and dn push arrtoInsert to Array
  }

  addDesc=()=>{
    console.log("Inside Add to Desc");
  }
  render() {
    value = this.props.valueName;
    data = this.props.fulldata;
    arrid = this.props.arrType;
    console.log(data[0].list);
    return (
      <div className="popup">
        <div className="popupinner">
          <div className="bodyContainerUpdate">
            <div className="setWidthInside">
              <h3>Selected Element {value}</h3>
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
              <h3> Description</h3>
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
                  <button className="descButton" onClick={()=> this.addDesc()}>Add </button>
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
              <h3> Comment</h3>
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
                  <button className="descButton" onClick={()=>this.addList()} >ADD </button>
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
        </div>
      </div>
    );
  }
}

export default updateComponent;
