import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon style={{ fontSize: "2.2rem" }} />
        ToDo List
      </h1>
    </header>
  );
}

export default Header;
