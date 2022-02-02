import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { ICharacters } from "../../Interface/Character";
import EmptyPlaceholder from "../EmptyPlaceholder/EmptyPlaceholder";
import "./cards.style.css";

interface CardProps {
  characters: ICharacters[];
}

const Cards = ({ characters }: CardProps) => {
  return (
    <>
      {characters.length !== 0 ? (
        characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
            <Card className="cardContainer">
              <CardMedia component="img" image={character.image} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {character.name}
                </Typography>
                <Typography variant="subtitle2" component="div">
                  Status: {character.status}
                </Typography>
                <Typography variant="subtitle2" component="div">
                  Species: {character.species}
                </Typography>
                <Typography variant="subtitle2" component="div">
                  Gender: {character.gender}
                </Typography>
                <Typography variant="subtitle2" component="div">
                  Type: {!character.type ? "Not available" : character.type}
                </Typography>
                <Typography variant="subtitle2" component="div">
                  Origin: {character.origin.name}
                </Typography>
                <Typography variant="subtitle2" component="div">
                  Location: {character.location.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <EmptyPlaceholder text="No results found." />
      )}
    </>
  );
};

export default Cards;
