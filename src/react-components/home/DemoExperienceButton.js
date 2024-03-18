import React from "react";
import { FormattedMessage } from "react-intl";
import { Button } from "../input/Button";
import { useCssBreakpoints } from "react-use-css-breakpoints";
import styles from "./DemoExperienceButton.scss";

export function DemoExperienceButton() {
  const breakpoint = useCssBreakpoints();

  return (
    <Button
      className={styles.demoExperienceButton}
      thick={breakpoint === "sm" || breakpoint === "md"}
      xl={breakpoint !== "sm" && breakpoint !== "md"}
      as="a"
      href="#demo-experience"
    >
      <FormattedMessage id="home-page.demo-experience-button" defaultMessage="Try the demo experience" />
    </Button>
  );
}
