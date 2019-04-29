import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const Error = ({ error }) => (
  <Typography color="error" variant="h3">
    {error}
  </Typography>
);

Error.propTypes = {
  error: PropTypes.string.isRequired
};

export default Error;
