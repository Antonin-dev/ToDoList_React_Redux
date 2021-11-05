import React from 'react';
import "./Settings.css";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../redux/actions/actions"


export default function Settings(){
    const dispatch = useDispatch();
    const {darkmode} = useSelector(state => state.settingsReducer);
    const handleChange = () => {
        console.log(darkmode);
        console.log("je clique");
        dispatch({
            type: actions.CHANGE_DARK_MODE
        });
    }
    return (
        <div>
            <div className={`display-txt-zone ${darkmode && 'dark-mode'}`}>
                <div className="container-settings">
                    <label className="switch">
                        <input type="checkbox" onChange={handleChange}/>
                        <span className="slider round"></span>
                    </label>
                    <div>Dark-mode</div>
                </div>
            </div>
        </div>
    );
};
