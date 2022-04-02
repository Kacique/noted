import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Note({ title, content, onDelete, id }) {
  function handleClick() {
    onDelete(id);
  }

  return ( 
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}><FontAwesomeIcon icon={faTrashAlt} size="lg"/></button>
    </div>
  );
}

export default Note;
