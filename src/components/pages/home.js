import React from "react";
import styled from "styled-components";

import UiDescription from "../ui/description/default";
import UiCard from "../ui/card/default";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  width: 52rem;
  margin: 40px auto;
`;

function Home() {
  return (
    <>
      <UiDescription></UiDescription>
      <Grid>
        <UiCard></UiCard>
        <UiCard></UiCard>
        <UiCard></UiCard>
      </Grid>
    </>
  );
}

export default Home;
