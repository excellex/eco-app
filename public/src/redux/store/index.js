import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../sagas';
import { rootReducer } from '../reducers';

const saga = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)))

saga.run(mySaga)



// import { createStore } from 'redux';
// import { applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { rootReducer } from '../reducers';


// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
// // export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));


