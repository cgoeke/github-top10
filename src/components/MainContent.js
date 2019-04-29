import React from "react";
import PropTypes from "prop-types";
import { Grid, withStyles } from "@material-ui/core";

const styles = theme => ({
  container: {
    alignItems: "center",
    justifyContent: "center",
    maxWidth: theme.breakpoints.values.md
  },
  item: {
    flex: "1 1 auto"
  }
});

const MainContent = ({ classes, children }) => (
  <Grid
    component="main"
    container
    item
    classes={{
      container: classes.container,
      item: classes.item
    }}
  >
    {children}
  </Grid>
);

MainContent.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withStyles(styles)(MainContent);
