import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import styles from "./SignInButton.scss";
import { Button } from "../input/Button";

export function SignInButton({ mobile }) {
  return (
    <Button className={mobile ? styles.mobileSignIn : styles.signInButton} thick preset="signin" as="a" href="/signin">
      <FormattedMessage id="header.sign-in-sign-up" defaultMessage="Sign in/Sign up" />
    </Button>
  );
}

SignInButton.propTypes = {
  mobile: PropTypes.bool
};
