import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>
      <h1>Noted <FontAwesomeIcon icon={faNoteSticky} size="lg"/></h1>
    </header>
  );
}

export default Header;
