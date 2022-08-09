import { useState } from "react";
import Header from "./components/Header";
import "./styles.css";
import CreateArea from "./components/CreateArea";
import SingleNote from "./components/SingleNote";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  // console.log(notes);
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, i) => {
        return i !== id;
      });
    });
  }

  return (
    <div className="">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, i) => {
        return (
          <SingleNote
            key={i}
            id={i}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
