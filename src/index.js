import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);
//index 파일은 폴더에 접근만해도 자동으로 불러온다.
//store안에 리듀서index.js(모든 리듀서를 가지고있는 파일)을 인수로 넣어준다.
//subcribe(listener) 상태가 바뀔때마다 실행될 함수등록(listener는 실행될 함수를 등록한것)
store.subscribe(()=>console.log("바뀐현재상태 : ",store.getState()));

ReactDOM.render(
    <Provider store={store}>
      
      <App />
      
    </Provider>
    ,
  document.getElementById('root')
);


