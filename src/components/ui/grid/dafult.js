import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
`;

function UiGrid(props) {
  return <Grid>{props.children}</Grid>;
}

UiGrid.label = "Grid";

export default UiGrid;
