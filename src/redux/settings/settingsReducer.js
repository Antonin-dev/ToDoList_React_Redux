import * as actions from "../actions/actions";

const INITIAL_STATE = {
    darkmode: false
}

export default function settingsReducer (state = INITIAL_STATE, action){
    switch (action.type) {
        case actions.CHANGE_DARK_MODE : {
            return {
                darkmode: !state.darkmode
            }
        }
        default: {
            return state;
        }
    }
}
