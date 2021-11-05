import { createStore, combineReducers } from "redux";
import notesReducer from "./notes/notesReducer";
import selectedReducer from "./notes/selectedReducer";
import settingsReducer from "./settings/settingsReducer";

const rootReducer = combineReducers({
    notesReducer,
    selectedReducer,
    settingsReducer,
});

const store = createStore(rootReducer);

export default store;
