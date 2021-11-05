import React, {useState, useEffect} from "react";
import "./MainArea.css";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../redux/actions/actions";
import {v4 as uuidv4} from "uuid";

export default function MainArea() {
  // State & redux
  const [inpInfo, setInpInfo] = useState({
    title: "",
    subtitle: "",
    body: "",
  });
  const [inpModify, setInpModify] = useState({
    title: "",
    subtitle: "",
    body: "",
  })
  const [validation, setValidation] = useState(true);
  const dispatch = useDispatch();
  const selected = useSelector(state => state.selectedReducer.selectedNote);
  useEffect(() => {
    setInpModify(selected);
  }, [selected])

  //Function
  const handleForm = e => {
    e.preventDefault();

    // Modification d'une note
    if (selected.toggle){
      if (selected.title.length < 1){
        setValidation(false);
        return;
      }

      setValidation(true);

      dispatch({
        type : types.UPDATE_NOTE,
        payload : inpModify
      })

      dispatch({
        type : types.RESET_NOTE
      });

      setInpModify({
        title: "",
        subtitle: "",
        body: "",
      })
    }else if (selected.toggle === false){
      //Ajouter une nouvelle note
      if (inpInfo.title.length < 1){
        setValidation(false);
        return;
      }
      setValidation(true);
      dispatch({
        type: types.ADD_NOTE,
        payload:{
          ...inpInfo,
          id: uuidv4()
        }
      })
      setInpInfo({
        title: "",
        subtitle: "",
        body: "",
      })
    }
    }


  const updateInput = e => {
    if (selected.toggle){
      // si une note est sélectionné
      const actualInput = e.target.getAttribute("id");
      const newObjectState = {...inpModify, [actualInput] : e.target.value};
      setInpModify(newObjectState);
    }else if (selected.toggle === false){
      // si on créer une nouvelle note
      const actualInput = e.target.getAttribute("id");
      const newObjectState = {...inpInfo, [actualInput] : e.target.value};
      setInpInfo(newObjectState);
    }
  }

  return (
    <div className="container-content">
      <h2>Votre plume</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="title">Titre</label>
        <input
            type="text"
            value={selected.toggle ? inpModify.title : inpInfo.title}
            onChange={updateInput}
            id="title"
            placeholder="Votre titre"
        />
        {!validation && (<span className="info-validation">Veuillez renseigner un titre</span>)}
        <label htmlFor="subtitle">Sous-titre</label>
        <input
            type="text"
            value={selected.toggle ? inpModify.subtitle : inpInfo.subtitle}
            onChange={updateInput}
            id="subtitle"
            placeholder="Votre sous-titre"
        />
        <label htmlFor="body">Votre texte</label>
        <input
            type="text-area"
            value={selected.toggle ? inpModify.body : inpInfo.body}
            onChange={updateInput}
            id="body"
            placeholder="Votre texte"
        />
        <button>Enregistrer</button>
      </form>
    </div>
  );
}
