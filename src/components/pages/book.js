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

function Book() {
  return (
    <>
      <UiDescription
        {...{
          title:
            "Código Limpio: Manual de estilo para el desarrollo ágil de software",
          subtitle:
            "Cada año, se invierten innumerables horas y se pierden numerosos recursos debido a código mal escrito, ralentizando el desarrollo, disminuyendo la productividad, generando graves fallos e incluso pudiendo acabar con la organización o empresa. El reconocido experto de software Robert C. Martin, junto con sus colegas de Object Mentor, nos presentan sus óptimas técnicas y metodologías ágiles para limpiar el código sobre la marcha y crearlo de forma correcta, de este modo mejorará como programador. Esta obra se divide en tres partes. La primera describe los principios, patrones y prácticas para crear código limpio. La segunda incluye varios casos de estudio cuya complejidad va aumentando. Cada ejemplo es un ejercicio de limpieza y transformación de código con problemas. La tercera parte del libro contiene una lista de heurística y síntomas de código erróneo (smells) confeccionada al crear los casos prácticos. El resultado es una base de conocimientos que describe cómo pensamos cuando creamos, leemos y limpiamos código. Imprescindible para cualquier desarrollador, ingeniero de software, director de proyectos, jefe de equipo o analista de sistemas interesado en crear código de mejor calidad. ¡El libro que todo programador debe leer!",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/61RRViAYqdL.jpg"
        }}
      ></UiDescription>
      <Grid>
        <UiCard
          {...{
            image:
              "https://images-na.ssl-images-amazon.com/images/G/01/rainier/available_at_amazon_1200x600_Nvz5h2M.png",
            link: "/",
            title: "Comprar"
          }}
        ></UiCard>
      </Grid>
    </>
  );
}

export default Book;
