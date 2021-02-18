import React from "react";
import { Toolbar, Typography } from "@material-ui/core";

const Header = (props) => {
  return (
    <div>
      <Toolbar>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          color="inherit"
          noWrap
        >
          {props.title}
        </Typography>
      </Toolbar>
    </div>
  );
};

export default Header;
