import { combineReducers } from 'redux';

// STATE
const initialState = {
    name: "Milla",
    activity: "drool"
}

// ACTION + ACTION CREATORS
const ACTION_NAME = "name";
const ACTION_ACTIVITY = "activity";

export function changeName(name) {
    return {
        type: ACTION_NAME,
        payload: {
            name
        }
    }
}

export function changeActivity(activity) {
    return {
        type: ACTION_ACTIVITY,
        payload: {
            activity
        }
    }
}

window.changeName = changeName;
window.changeActivity = changeActivity;

// REDUCER
function name(state=initialState.name, action={type: ''}) {
    switch(action.type) {
        case ACTION_NAME:
        console.log(action.payload.name);
            return (
                action.payload.name
            )
        break;
        default:
            return state;
    }
}

function activity(state=initialState.activity, action={type: ''}) {
    switch(action.type) {
        case ACTION_ACTIVITY:
        console.log(action.payload.activity);
            return (
                action.payload.activity
            )
            break;
            default:
                return state
            break;
    }
}


export const rootReducer = combineReducers({
    name,
    activity
});