import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));


