/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.shrivitthal.com/terms-of-service"
                className={classes.block}
                target="_blank"
              >
                TERMS OF SERVICE
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.shrivitthal.com/privacy-policy"
                className={classes.block}
                target="_blank"
              >
                PRIVACY POLICY
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.shrivitthal.com/cookie-policy"
                className={classes.block}
                target="_blank"
              >
                COOKIE POLICY
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          (c) {1900 + new Date().getYear()} - {1901 + new Date().getYear()} Shri Vitthal Hindu Mandir Temple Toronto Inc.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
