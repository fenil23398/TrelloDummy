import React, { Component } from 'react';
class detailCard extends Component {
    state = {  }
    render() { 
        const { params } = this.props.match;
        return <h1>{params.id}</h1>;
    }
}
 
export default detailCard;