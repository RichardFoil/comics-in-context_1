import React, { useContext } from "react";
import StylesContext from "./Context/StylesContext";


export default function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext)


  return (
    <div>
      <button  style={buttonStyling}>
        Submit!
      </button>

    </div>
  );
}
