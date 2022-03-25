// Write your Character component here
import React from "react";
import styledComponents from "styled-components";

const StyledCharacter = styledComponents.div`
width: 100%;
display: flex;
justify-content: center;
padding: 8px;
color: white;
font-weight: bold;
background-color: 'crimson';

p {
  justify-content: space-between;
}
`

const Character = (props) => {
  return (
    <StyledCharacter>
      
      <p>{props.character.name} {props.character.birth_year}</p>
      
    </StyledCharacter>
  )
}

export default Character;