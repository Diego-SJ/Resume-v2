import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducers
import appReducer from './app.duck';

const rootReducer = combineReducers({
  app: appReducer,
});

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const generateStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhacers(applyMiddleware(thunk)),
  );

  return store;
};

export default generateStore;
