import {v4 as uuidv4} from "uuid";
import * as actions from "../actions/actions"
const INITIAL_STATE = {
    selectedNote: {
        title: "",
        subtitle: "",
        body: "",
        id: "",
        toggle: false
    }
};

export default function selectedReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case actions.VISUALIZE_NOTE :
            return {
                selectedNote: {
                    ...action.payload,
                    toggle: true
                }
            };
            case actions.RESET_NOTE :
                return {
                    selectedNote: {
                        title : "",
                        subtitle: "",
                        body: "",
                        id: "",
                        toggle: false
                    }
                }
            default:
            return state;
    }
}
