import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./OfficialSiteLinksButtonContainer.scss";
import { FormattedMessage } from "react-intl";
import { ReactComponent as ArrowDownIcon } from "../icons/ArrowDown.svg";

export const OfficialSiteLinksButtonContainer = ({ onClick, appName }) => {
  return (
    <button className={classNames(styles.officialSiteLinksButton)} onClick={onClick}>
      <p className={classNames(styles.officialSiteLinksButtonText)}>
        <FormattedMessage
          id="official-site-links.show-button"
          defaultMessage="Visit the {appName}\nofficial website"
          values={{ appName }}
        />
      </p>
      <ArrowDownIcon />
    </button>
  );
};

OfficialSiteLinksButtonContainer.propTypes = {
  onClick: PropTypes.func,
  appName: PropTypes.string
};
