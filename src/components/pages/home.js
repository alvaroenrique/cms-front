import React from "react";

import UiDescription from "../ui/description/default";
import UiCard from "../ui/card/default";
import UiGrid from "../ui/grid/dafult";

import { Container } from "../styled/layout";

function Home() {
  return (
    <Container>
      <UiDescription
        {...{
          title: "Recomendaciones de libros online",
          subtitle:
            "Bookstore.com es una página que te recomienda libros y te ayuda a encontrar los mejores precios en internet."
        }}
      />
      <UiGrid>
        <UiCard
          {...{
            image:
              "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            link: "/categories",
            title: "Arquitectura de software"
          }}
        />
      </UiGrid>
    </Container>
  );
}

Home.label = "Homepage";

export default Home;
