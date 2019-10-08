import React from "react";

import UiDescription from "../ui/description/default";
import UiCard from "../ui/card/default";
import UiGrid from "../ui/grid/dafult";

import { Container } from "../styled/layout";

function Categories() {
  return (
    <Container>
      <UiDescription
        {...{
          title: "Arquitectura de software",
          subtitle:
            "En esta sección te recomiendo libros relacionados con la arquitectura de software, muchos de estos libros te ayudan a desarrollar una estructura modular y mantenible a lo largo del desarrollo de un software",
          image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        }}
      />
      <UiGrid>
        <UiCard
          {...{
            image:
              "https://images-na.ssl-images-amazon.com/images/I/61RRViAYqdL.jpg",
            link: "/book",
            title: "Código limpio"
          }}
        />
      </UiGrid>
    </Container>
  );
}

Categories.label = "Categoría";

export default Categories;
