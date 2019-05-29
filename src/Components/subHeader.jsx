import React, { Component } from "react";
import "./forSubHeader.css";
class subHeader extends Component {
  state = {};
  render() {
    return (
      <div className="mainSubHeaderConatiner">
        <div className="insideSubHederFlex forNameDisplay">Name</div>

        <div className="insideSubHederFlex">
          <i className="fa fa-star-o" />
        </div>
        <span className="pipeMargin">|</span>

        <div className="insideSubHederFlexLimited">
          <i className="fa fa-group" /> Team Visible
        </div>
        <span className="pipeMargin">|</span>
        <div className="insideSubHederFlexLimited">
          <button className="buttondes button5">F</button>
          <span>
            <button className="buttonInvite">Invite</button>
          </span>
        </div>

        <div className="insideLastFlex">
          <a href="#">
            <i className="fa fa-ellipsis-h" />
            <span className="lastContentMenu">Show Menu</span>
          </a>
        </div>
      </div>
    );
  }
}

export default subHeader;
