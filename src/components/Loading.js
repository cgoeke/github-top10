import React from "react";
import { CircularProgress, Grid, Typography } from "@material-ui/core";

const Loading = () => (
  <Grid container direction="column" alignItems="center" justify="center">
    <Typography gutterBottom variant="h3">
      Loading...
    </Typography>
    <CircularProgress color="secondary" />
  </Grid>
);
export default Loading;
