import { FETCH_WEATHER } from '../action/weatherQuery';

const weatherInitialState = [];


export default (state = weatherInitialState,action)=> {
    switch(action.type){ 
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
        default:
        return state;
    }
    return state;
}