import { applyMiddleware, createStore} from 'redux';
import reducer from './reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk'

const middleware = [reduxThunk];

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store;