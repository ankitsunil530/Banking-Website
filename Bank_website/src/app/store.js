import configureStore from './configureStore';
import authReducer from '../features/auth/authSlice';
export const store=configureStore({
         auth:authReducer
});



