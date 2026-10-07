import {createStore} from 'redux'
import useReducer from './Reducer';

const storeData = createStore(useReducer);

export default storeData;