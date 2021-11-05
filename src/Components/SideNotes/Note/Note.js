import React from "react";
import "./Note.css";
import DelIcon from "./remove.svg";
import Edit from "./edit.svg";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../redux/actions/actions";

export default function Note({ body, title, subtitle, id }) {
  // Redux
  const dispatch = useDispatch();
  const {darkmode} = useSelector(state => state.settingsReducer);
  // Function
  const deleteNote = () => {
    dispatch({
      type: actions.DELETE_NOTE,
      payload: id,
    });
  };
  const modifyNote = () => {
    dispatch({
      type: actions.VISUALIZE_NOTE,
      payload: {
        title: title,
        subtitle: subtitle,
        body: body,
        id: id,
      }
    })
  }

  return (
    <li className={darkmode ? "txt-note-prev dark-mode" : "txt-note-prev" }>
      <Link to={{pathname:`/displayNote/${title}`}}>
      <div className={darkmode ? "bloc-note-left dark-mode" : "bloc-note-left" }>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      </Link>
      <div className="bloc-note-right">
        <button onClick={deleteNote}>
          <img src={DelIcon} alt="icone supprimer" />
        </button>
        <Link to="/edit">
        <button onClick={modifyNote}>
          <img src={Edit} alt="icone modifier" />
        </button>
        </Link>
      </div>

    </li>
  );
}
