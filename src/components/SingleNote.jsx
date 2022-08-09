import React from "react";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function SingleNote(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="single-note">
      <section className="content">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </section>
      <Button onClick={handleClick}>
        <DeleteForeverIcon style={{ color: "#f5ba13" }} />
      </Button>
    </div>
  );
}

export default SingleNote;
