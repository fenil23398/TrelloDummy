import React, { Component } from "react";
import "./headerDesign.css";
class header extends Component {
  state = {};
  render() {
   
    return (
      <div className="mainHeaderConatiner">
        <div className="insideHederFlex">
          <button className="homeIcon">
            <i className="fa fa-home" aria-hidden="true" />
          </button>
        </div>
        <div className="insideHederFlex">
          <button className="boardIcon">
            <i className="fa fa-calendar-times-o" aria-hidden="true" />{" "}
            <span className="buttonletter">Boards</span>
          </button>
        </div>
        <div className="insideHederFlex">
          <input
            type="text"
            className="serachDesign"
            id="myInput"
            onKeyUp={() => this.myfunction()}
            placeholder="Search for names.."
            title="Type in a name"
          />
        </div>
        <div className="insideHeaderBetween">
          <span>
            <i className="fa fa-calendar-times-o" aria-hidden="true" />
          </span>
          Trello
        </div>

        <div className="insideHederFlexRight">
          <button className="homeIcon">
            <i className="fa fa-plus" aria-hidden="true" />
          </button>
        </div>
        <div className="insideHederFlexRightNext">
          <button className="homeIcon">
            <i className="fa fa-info-circle" aria-hidden="true" />
          </button>
        </div>
        <div className="insideHederFlexRightNext">
          <button className="homeIcon">
            <i className="fa fa-bell" aria-hidden="true" />
          </button>
        </div>
        <div className="insideHederFlexRightNext">
          <button className="button button5">F</button>
        </div>
      </div>
    );
  }
}

export default header;
