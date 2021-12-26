import * as userReducer from './userReducer';
import * as locationReducer from './locationReducer';
import * as persistReducer from './persistReducer'
export default Object.assign(userReducer, locationReducer, persistReducer);
