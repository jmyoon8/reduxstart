const { INCRESMENT, DECREAMENT, SET_COLOR } = require("./ActionTypes");

export function increment(){
    return {
        type : INCRESMENT
    }
}
export function decrement(){
    return{
        type : DECREAMENT
    }
}

export function setColor(color) {
    return{
        type:SET_COLOR,
        color
    }
}