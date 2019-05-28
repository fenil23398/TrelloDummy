import React, { Component } from "react";
import "./forSubHeader.css";
class subHeader extends Component {
  state = {};
  render() {
    return (
      <div className="mainSubHeaderConatiner">
        <div className="insideSubHederFlex forNameDisplay">Name</div>

        <div className="insideSubHederFlex">
          <i class="fa fa-star-o" />
        </div>
        <span className="pipeMargin">|</span>

        <div className="insideSubHederFlexLimited">
          <i class="fa fa-group" /> Team Visible
        </div>
        <span className="pipeMargin">|</span>
        <div className="insideSubHederFlexLimited">
          <button class="buttondes button5">F</button>
          <span>
            <button class="buttonInvite">Invite</button>
          </span>
        </div>

        <div className="insideLastFlex">
          <a href="#">
            <i class="fa fa-ellipsis-h" />
            <span class="lastContentMenu">Show Menu</span>
          </a>
        </div>
      </div>
    );
  }
}

export default subHeader;
