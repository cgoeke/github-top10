import React from "react";
import PropTypes from "prop-types";
import { AppBar, Tabs, Tab } from "@material-ui/core";

const Navigation = ({ languages, selected, handleChange }) => (
  <AppBar color="primary" component="nav" position="static">
    <Tabs centered onChange={handleChange} value={selected}>
      {languages.map(language => (
        <Tab key={language} label={language} value={language} />
      ))}
    </Tabs>
  </AppBar>
);

Navigation.propTypes = {
  languages: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Navigation;
