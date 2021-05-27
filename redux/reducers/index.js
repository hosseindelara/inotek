import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";


export const baceUrlreducer = (baseurl = 'http://localhost:3000/api', action) => baseurl
   

export const reducers = combineReducers({

    baseUrl: baceUrlreducer,
    Login:loginReducer
})