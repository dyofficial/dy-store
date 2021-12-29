import React from "react";
import {
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  AppBar,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/Logo.png";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";

function Navbar({ totalItems }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appbar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="DYShop"
              height="55px"
              className={classes.image}
            />
            DY GAMING STORE
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
                backgroundColor="red"
                // style={{ border: "1px solid red" }}
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
