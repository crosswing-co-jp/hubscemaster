import React from "react";
import { FormattedMessage } from "react-intl";
import { createAndRedirectToNewHub } from "../../utils/phoenix-utils";
import { Button } from "../input/Button";
import { useCssBreakpoints } from "react-use-css-breakpoints";
import styles from "./CreateRoomButton.scss";

export function CreateRoomButton() {
  const breakpoint = useCssBreakpoints();

  return (
    <Button
      thick={breakpoint === "sm" || breakpoint === "md"}
      xl={breakpoint !== "sm" && breakpoint !== "md"}
      preset="landing"
      onClick={e => {
        e.preventDefault();
        createAndRedirectToNewHub(null, null, false);
      }}
      className={styles.createRoomButton}
    >
      <FormattedMessage id="create-room-button" defaultMessage="Create Room" />
    </Button>
  );
}
