//keep your seperate reducer files here
//CONSTANTS (ACTION TYPES) these are our descriptipors
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//ACTION CREATORS
export function increment(value) {
    return {
        type: INCREMENT,
        payload: value
    };
}

export function decrement(value){
    return {
        type: DECREMENT,
        payload: value
    };
}
//forestructure of our application
const initialState = {
    currentValue: 0
};


//reducer handles all the heavy lifting of our app
export default function counter(state = initialState, action){
    switch(action.type) {
        case INCREMENT:
        //object we are modifying, state, new
        //return acts a break
        return Object.assign({}, state, {
            currentValue: state.currentValue + action.payload
        });
        case DECREMENT:
        return Object.assign({}, state, {
            currentValue: state.currentValue - action.payload
        });
        default : 
        return state;
    }
}
