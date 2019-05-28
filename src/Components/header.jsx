import React, { Component } from "react";
import "./headerDesign.css";
class header extends Component {
  state = {};
  render() {
    let styles = {
      backgroundImage: "url('/images/search.svg')",
        // backgroundPosition: "8px 12px",
      backgroundRepeat: "no-repeat",
      padding: "15px 20px 12px 40px",
      border: "1px solid #ddd",
      height: "5px",
      marginBottom: "2px"
      //   marginTop:"10px",
    };
    return (
      <div className="mainHeaderConatiner">
        <div className="insideHederFlex">
          <button className="homeIcon">
            <i class="fa fa-home" aria-hidden="true" />
          </button>
        </div>
        <div className="insideHederFlex">
          <button className="boardIcon">
            <i class="fa fa-calendar-times-o" aria-hidden="true" />{" "}
            <span class="buttonletter">Boards</span>
          </button>
        </div>
        <div className="insideHederFlex">
          <input
            type="text"
            style={styles}
            id="myInput"
            onKeyUp={() => this.myfunction()}
            placeholder="Search for names.."
            title="Type in a name"
          />
        </div>
        <div className="insideHeaderBetween">
          <span>
            <i class="fa fa-calendar-times-o" aria-hidden="true" />
          </span>
          Trello
        </div>

        <div className="insideHederFlexRight">
          <button className="homeIcon">
            <i class="fa fa-plus" aria-hidden="true" />
          </button>
        </div>
        <div className="insideHederFlexRightNext">
          <button className="homeIcon">
            <i class="fa fa-info-circle" aria-hidden="true" />
          </button>
        </div>
        <div className="insideHederFlexRightNext">
          <button className="homeIcon">
            <i class="fa fa-bell" aria-hidden="true" />
          </button>
        </div>
        <div className="insideHederFlexRightNext">
          <button class="button button5">F</button>
        </div>
      </div>
    );
  }
}

export default header;
