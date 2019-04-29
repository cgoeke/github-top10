import React from "react";
import PropTypes from "prop-types";
import { Star } from "@material-ui/icons";
import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  paper: {
    [theme.breakpoints.up("sm")]: {
      margin: `${theme.spacing.unit * 3}px 0px`
    }
  },
  itemTextRoot: {
    overflowWrap: "break-word"
  },
  itemTextPrimary: {
    color: theme.palette.secondary.main,
    fontSize: "20px",
    fontWeight: 600
  },
  itemTextSecondary: {
    color: "#586069"
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "auto"
  }
});

const RepoList = ({ classes, repos }) => (
  <Grid item sm={10}>
    <Paper className={classes.paper}>
      <List disablePadding>
        {repos.map((repo, i) => (
          <ListItem key={repo.id} divider>
            <Typography variant="h5">{i + 1}.</Typography>
            <ListItemText
              classes={{
                root: classes.itemTextRoot,
                primary: classes.itemTextPrimary,
                secondary: classes.itemTextSecondary
              }}
              primary={repo.name}
              primaryTypographyProps={{
                component: Link,
                href: repo.link
              }}
              secondary={repo.description}
            />
            <Grid className={classes.iconContainer} container item>
              <Star nativeColor="yellow" />
              <Typography component="i" variant="caption">
                {repo.starCount}
              </Typography>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Paper>
  </Grid>
);

RepoList.propTypes = {
  classes: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired
};

export default withStyles(styles)(RepoList);
