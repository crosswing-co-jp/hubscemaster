import React from "react";
import PropTypes from "prop-types";
import styles from "./LoadingScreenLayout.scss";
import { Column } from "../layout/Column";
import { AppLogo } from "../misc/AppLogo";
import classNames from "classnames";

export function LoadingScreenLayout({ center, bottom }) {
  return (
    <div className={styles.loadingScreenLayout}>
      <div className={classNames(styles.starWrapper)}>
        <div className={classNames(styles.smallStar)} />
        <div className={classNames(styles.mediumStars)} />
        <div className={classNames(styles.bigStars)} />
      </div>
      <Column center padding gap="lg" className={styles.center}>
        <AppLogo className={styles.logo} />
        {center}
      </Column>
      {bottom && (
        <Column center className={styles.bottom}>
          {bottom}
        </Column>
      )}
    </div>
  );
}

LoadingScreenLayout.propTypes = {
  center: PropTypes.node,
  bottom: PropTypes.node
};
