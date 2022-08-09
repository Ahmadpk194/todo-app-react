import React from "react";

const date = new Date();

function Footer() {
  return (
    <footer>
      <p>&copy; Ahmad khan {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
