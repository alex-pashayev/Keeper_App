import React from "react";

function Note(props) {
  function onDelete() {
    props.Del(props.index);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={onDelete}>DELETE</button>
    </div>
  );
}

export default Note;
