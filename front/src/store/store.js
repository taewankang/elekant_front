import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import rootReducer from '../reducer/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import {createStore, applyMiddleware} from 'redux';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
); // 스토어를 만듭니다.

sagaMiddleware.run(rootSaga);
export default store;