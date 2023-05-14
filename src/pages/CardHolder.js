import React from "react";
import Card from "../components/Card";
import { Grid } from "@mui/material";

const cards = [
  {
    name: "aribaskar-jb",
    location: "tn",
    datetime: "20/5/2023",
    Problemstatement: "bhjbfjdsfbdjfbdjfbdj",
  },
  {
    name: "aribaskar-jb",
    location: "tn",
    datetime: "20/5/2023",
    Problemstatement: "bhjbfjdsfbdjfbdjfbdj",
  },
  {
    name: "aribaskar-jb",
    location: "tn",
    datetime: "20/5/2023",
    Problemstatement: "bhjbfjdsfbdjfbdjfbdj",
  },
  {
    name: "aribaskar-jb",
    location: "tn",
    datetime: "20/5/2023",
    Problemstatement: "bhjbfjdsfbdjfbdjfbdj",
  },
  {
    name: "aribaskar-jb",
    location: "tn",
    datetime: "20/5/2023",
    Problemstatement: "bhjbfjdsfbdjfbdjfbdj",
  },
  {
    name: "aribaskar-jb",
    location: "tn",
    datetime: "20/5/2023",
    Problemstatement: "bhjbfjdsfbdjfbdjfbdj",
  },
  {
    name: "aribaskar-jb",
    location: "tn",
    datetime: "20/5/2023",
    Problemstatement: "bhjbfjdsfbdjfbdjfbdj",
  },
];

function CardHolder() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="center"
    >
      {cards.map((card) => (
        <Grid item xs={2} sm={4} md={4} key={card.name}>
          <Card
            name={card.name}
            location={card.location}
            datetime={card.datetime}
            Problemstatement={card.Problemstatement}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardHolder;
