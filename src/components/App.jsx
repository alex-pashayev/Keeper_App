import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function add(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function del(toDelete) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteitem, index) => {
        return index !== toDelete;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea Add={add} />
      {notes.map((n, index) => {
        return (
          <Note
            key={index}
            Del={del}
            index={index}
            title={n.title}
            content={n.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
