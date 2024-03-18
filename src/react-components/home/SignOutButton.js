import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import styles from "./SignOutButton.scss";

export function SignOutButton({ onSignOut }) {
  return (
    <a href="#" onClick={onSignOut} className={styles.signOutButton}>
      <FormattedMessage id="header.sign-out" defaultMessage="Sign Out" />
    </a>
  );
}

SignOutButton.propTypes = {
  onSignOut: PropTypes.func
};
