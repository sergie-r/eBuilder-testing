import { createStore } from 'redux';
import registerReducer from '../reducers/registerReducer';

export default function configureStore(initial) {
  return createStore(registerReducer, initial);
};
