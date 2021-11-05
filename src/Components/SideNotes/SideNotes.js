import React, { useState, useEffect } from "react";
import "./SideNotes.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Note from "./Note/Note";
export default function SideNotes() {
  // State
  const { notes } = useSelector((state) => state.notesReducer);
  const [notesList, setNotesList] = useState(notes);

  // Function
  const preventForm = (e) => e.preventDefault();
  const handleFilter = (e) => {
    const stateCopy = [...notes];
    const filterArray = stateCopy.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setNotesList(filterArray);
  };

  useEffect(() => {
    setNotesList(notes);
  }, [notes]);

  return (
    <div className="notes-display">
      <h2>Mes notes</h2>
      <form onSubmit={preventForm}>
        <input
          onChange={handleFilter}
          type="text"
          id="search-notes"
          placeholder="Rechercher"
        />
      </form>
      <ul className="notes-list">
        {notesList.map((item) => (
          <Note
            key={item.id}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            body={item.body}
          />
        ))}
      </ul>
    </div>
  );
}
