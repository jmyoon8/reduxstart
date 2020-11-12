import React, { Component } from 'react';
import pt from 'prop-types'


class value extends Component {
    constructor(p){
        super(p)
        this.state={

        }
    }
  
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

value.propTypes={
    number : pt.number
}
value.defaultProps={
    number : -1
}



export default value; 