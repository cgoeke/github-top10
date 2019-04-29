import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    flex: "0 0 auto",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    padding: theme.spacing.unit * 2
  },
  logo: {
    marginBottom: theme.spacing.unit * 2
  }
});

const Header = ({ classes }) => (
  <Grid className={classes.container} component="header" container>
    <img
      className={classes.logo}
      src="./img/Octocat-md.png"
      alt="GitHub Logo"
    />
    <Typography variant="h3">GitHub Top 10</Typography>
  </Grid>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
