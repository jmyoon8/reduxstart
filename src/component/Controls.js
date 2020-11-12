import React, { Component } from 'react';
import pt from'prop-types';


function createWarning(funcName) {
    return ()=>console.warn(funcName + "is not defined")
}
class Controls extends Component {
    constructor(p){
        super(p)
    }
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}> -</button>
                <button onClick={this.props.onRandomizeColor}> color random</button>
            </div>
        );
    }
}
Controls.propTypes={
    onplus: pt.func,
    onSubtract : pt.func,
    onRandomizeColor : pt.func
}

Controls.defaultProps={
    onPlus : createWarning('onPlus'),
    onSubtract : createWarning('onSubstact'),
    onRandomizeColor : createWarning('onRanmonizeColor')
}
export default Controls;