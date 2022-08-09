import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import React, { useState } from "react";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function inputHandler(e) {
    setNote((prev) => {
      return { ...prev, title: e.target.value };
    });
  }
  function areaHandler(e) {
    setNote((prev) => {
      return { ...prev, content: e.target.value };
    });
  }

  function submitNote(e) {
    e.preventDefault();
    if (note.title.trim().length > 0 || note.content.length > 0) {
      props.onAdd(note);
    }
    setNote({
      title: "",
      content: "",
    });
  }

  function expanded() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={inputHandler}
            //   value={note.title}
            //   onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          rows="3"
          placeholder="Take a note..."
          value={note.content}
          onChange={areaHandler}
          //   value={note.content}
          //   onChange={handleChange}
          onClick={expanded}
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
