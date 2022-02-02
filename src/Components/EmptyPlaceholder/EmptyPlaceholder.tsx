import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./emptyplaceholder.style.css";

interface EmptyPlaceholderProps {
  text: string;
}

const EmptyPlaceholder = ({ text }: EmptyPlaceholderProps) => {
  return (
    <>
      <Grid item xs={12}>
        <Box className="container">
          <Typography variant="h5" component="div">
            {text}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default EmptyPlaceholder;
