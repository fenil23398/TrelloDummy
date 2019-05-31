import React, { Component } from "react";
import "./cardDisplay.css";
import { withRouter } from 'react-router-dom';

var name, id;
class firstClass extends Component {
  state = {
    i: 0,
    updateFlag: 0
  };

  constructor(props) {
    super(props);
    this.list = this.props.data;
    this.showDetail = this.showDetail.bind(this)
  }

  changeFlag = () => {
    this.setState({
      i: 1
    });
  };

  updateList = na => {
    name = na;
    id = 1;
    this.props.updateFunction(name,this.list,id);
  };
  addToArr = () => {
    var tmp = document.getElementById("myTextarea").value;
    if (tmp !== "") this.list[0].list.push({ name: tmp, key: 9 });
    this.setState({
      i: 0
    });
  };
  showDetail=(name)=>{
    console.log(name);
    this.props.history.push('/detailCardDisplay/'+name);
   
  }
  deleteList = name => {
    console.log("gfg", name);
    var tmpArr = this.list[0].list.filter(
      arrName => arrName.name.toLowerCase() != name.toLowerCase()
    );
    this.list[0].list = tmpArr;
    this.setState({
      i: 0
    });
  };

  render() {
    return (
      <div className="mianContainer">
        <p className="forTitle">{this.props.title}</p>
        {this.list[0].list.map(name => (
          <div className="insideContent makebox" onClick={()=>this.showDetail(name.name)}>
            <p>{name.name} </p>
            <button
              onClick={() => this.deleteList(name.name)}
              className="hoverButton"
            >
              <i className="fa fa-trash" aria-hidden="true" />
            </button>
            <button
              onClick={() => this.updateList(name.name)}
              className="hoverUpdate"
            >
              <i className="fa fa-pencil-square-o" aria-hidden="true" />
            </button>
          </div>
        ))}
        {this.state.i == 1 ? (
          ((this.state.i = 0),
          (
            <div>
              <textarea
                id="myTextarea"
                className="insideArea"
                placeholder="Enter name for this card"
              />
              <button
                onClick={() => this.addToArr()}
                className="insidebuttonToAdd"
              >
                + ADD Card
              </button>
              <button onClick={() => this.addToArr()} className="crossDesign">
                <i className="fa fa-close" />
              </button>
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

export default withRouter(firstClass);
