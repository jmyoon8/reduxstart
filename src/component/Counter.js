import React, { Component } from 'react';
import Value from './value'
import Control from'./Controls'


class Counter extends Component {
    render() {
        return (
            <div>
                <Value/>
                <Control/>
            </div>
        );
    }
}

Counter.propTypes = {

};

export default Counter;