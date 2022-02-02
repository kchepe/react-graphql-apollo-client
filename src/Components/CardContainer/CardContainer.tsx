import { useQuery } from "@apollo/client";
import { Grid, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllCharacters } from "../../GraphQL/Querries/characters";
import { toLowerCase } from "../../helpers/toLowerCase";
import { ICharacters } from "../../Interface/Character";
import Cards from "../Cards/Cards";
import EmptyPlaceholder from "../EmptyPlaceholder/EmptyPlaceholder";
import SearchField from "../SeachField/SearchField";

const CardContainer = () => {
  const { error, loading, data } = useQuery(getAllCharacters);
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [showError, setShowError] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>("");

  const filteredCharacters = characters.filter((value) => {
    if (
      toLowerCase(value.name).includes(toLowerCase(filterText)) ||
      toLowerCase(value.species).includes(toLowerCase(filterText))
    )
      return value;
  });

  useEffect(() => {
    if (!error) {
      setShowError(false);
      if (data) setCharacters(data?.characters.results);
    } else {
      setShowError(true);
    }
  }, [data, error]);

  const handleOnChange = (event: any) => {
    setFilterText(event.target.value);
  };

  if (showError) return <EmptyPlaceholder text="Server error." />;

  return (
    <>
      <Container maxWidth="xl" sx={{ padding: "50px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SearchField handleOnChange={handleOnChange} value={filterText} />
          </Grid>
          {loading ? (
            <EmptyPlaceholder text="Loading..." />
          ) : (
            <Cards characters={filteredCharacters} />
          )}
        </Grid>
      </Container>
    </>
  );
};

export default CardContainer;
