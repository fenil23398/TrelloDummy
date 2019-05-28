import React, { Component } from "react";
import "./cardDisplay.css";

class firstClass extends Component {
  state = {
    i: 0
  };

  constructor(props) {
    super(props);
    this.list = this.props.data;
  }

  changeFlag = () => {
    this.setState({
      i: 1
    });
  };

  addToArr = () => {
      var tmp=document.getElementById("myTextarea").value;
      if(tmp!=='')
     this. list[0].list.push({name:tmp,key:9});
      this.setState({
          i:0
      })
  };

  render() {
  
    let buttondisplay;

    return (
      <div className="mianContainer">
        <p className="forTitle">{this.props.title}</p>
        {this.list[0].list.map(name => (
          <div className="insideContent makebox">
            <p>{name.name} </p>
          </div>
        ))}
        {this.state.i == 1 ? (
          ((this.state.i = 0),
          (
            <div>
              <textarea id="myTextarea"
                className="insideArea"
                placeholder="Enter name for this card"
              />
              <button
                onClick={() => this.addToArr()}
                className="insidebuttonToAdd"
              >
                + ADD Card
              </button>
              <button onClick={() => this.addToArr()} className="crossDesign"><i className="fa fa-close"></i></button>
            </div>
          ))
        ) : (
          <div>
            <button className="insidebutton" onClick={() => this.changeFlag()}>
              + Add Another Card
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default firstClass;
