import React, { Component } from 'react';
import Value from './value'
import Control from'./Controls'
import * as actions from '../actions'
import {connect} from 'react-redux'
//영민한 컴폰넌트에서 redux와 연결시켜준다.

class Counter extends Component {
    constructor(props){
        super(props)
        this.setRandomColor=this.setRandomColor.bind(this)
    }
    setRandomColor(){
        const color=[
            Math.floor((Math.random()*55)+200),
            Math.floor((Math.random()*55)+200),
            Math.floor((Math.random()*55)+200)
        ]
        this.props.handleSetColor(color);
    }
    
    render() {
        const color =this.props.color
        const style={
            background : `rgb( ${color[0]}, ${color[1]}, ${color[2]} )`
        }
        return (
            <div style={style}>
                <Value number={this.props.number}/>
                <Control 
                    onPlus={this.props.handleIncrement}
                    onSubstract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>
        );
    }
}

//값을 전달할 매소드를 실행시키는 함수
const mapDispatchToProps =(dispatch)=>{
   
    return{
        handleIncrement : ()=>{dispatch(actions.increment())},
        handleDecrement : ()=>{dispatch(actions.decrement())},
        handleSetColor : (color)=>{dispatch(actions.setColor(color))}
    }
};

//props을 redux와 매핑시켜주는 펑션
const mapStateToProps=(state)=>{
    //redux의 state를 칭한다

    //redux의 상태값을 key값으로 하고 연결시켜줄 값을 value로 연결시켜준다.
    return{
        number: state.counter.number,
        color : state.ui.color
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);