const { INCREMENT, DECREMENT, SET_COLOR } = require("../actions/ActionTypes");

//초기값 설정
const initialState={
    
    number:0,
    dumbObject :{
        d:0,
        u:1,
        m:2,
        b:3
    }
}

export default function counter(state = initialState,actions){
    //초기 상태값을 받을경우엔 언디파인드므로 에러처리를 한다.
    // if(typeof state==='undefined'){
    //     return initialState;
    // }
    //혹은 ES6의 문법은 디폴트아규먼트 문법을 이용하여 에러처리를한다.
    //state = initialState 은 state의 값이 undifined일경우 자동으로 initailState 객체를 입력한다.
    switch (actions.type) {
        //case INCREMENT : return {number : state.number + 1} 이런경우 initialSate 객체가 통체로 변하므로 spread 문법을 사용하자(특정 변수만 변하도록함)
        case INCREMENT : return {...state,
                                number : state.number +1,
                                //객체안에 객체를 바꿀떄
                                dumbObject :{...state.dumbObject, u:0}
                                }
        case DECREMENT : return {...state,
                                 number : state.number -1}
        default : return state;
    }
}