import React from "react";
import PropTypes from "prop-types";
import { AppBar, Grid, Link, withStyles } from "@material-ui/core";
import { GithubCircle } from "mdi-material-ui";

const styles = theme => ({
  footer: {
    alignItems: "center"
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  link: {
    paddingLeft: theme.spacing.unit
  }
});

const Footer = ({ classes }) => (
  <AppBar
    className={classes.footer}
    color="primary"
    component="footer"
    position="static"
  >
    <Grid className={classes.container} container>
      <GithubCircle />
      <Link
        className={classes.link}
        color="inherit"
        href="https://github.com/cgoeke/github-top10"
        variant="subtitle1"
      >
        github
      </Link>
    </Grid>
  </AppBar>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
