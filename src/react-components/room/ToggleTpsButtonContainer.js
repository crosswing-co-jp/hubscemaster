import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ReactComponent as EyeIcon } from "../icons/Eye.svg";
import { ToolbarButton } from "../input/ToolbarButton";
import { FormattedMessage, useIntl } from "react-intl";
import { CAMERA_MODE_THIRD_PERSON_VIEW, CAMERA_MODE_FIRST_PERSON } from "../../systems/camera-system";
import { ToolTip } from "@mozilla/lilypad-ui";

export function ToggleTpsButtonContainer({ store, scene }) {
  const intl = useIntl();

  const description = intl.formatMessage({
    id: "third-person-tooltip.description",
    defaultMessage: "Switch between first-person and third-person views"
  });

  const storeKey = "enableThirdPersonView";
  const value = store.state.preferences[storeKey];

  const setValue = v => {
    store.update({ preferences: { [storeKey]: v } });
  };

  const storeUpdated = () => {
    const { enableThirdPersonView } = store.state.preferences;
    scene.systems["hubs-systems"].cameraSystem.setMode(
      enableThirdPersonView ? CAMERA_MODE_THIRD_PERSON_VIEW : CAMERA_MODE_FIRST_PERSON
    );
  };

  useEffect(
    () => {
      store.addEventListener("statechanged", storeUpdated);

      return () => {
        store.removeEventListener("statechanged", storeUpdated);
      };
    },
    [store, scene]
  );

  return (
    <ToolTip description={description} location="left" category="tertiary">
      <ToolbarButton
        icon={<EyeIcon />}
        label={<FormattedMessage id="third-person-button-container" defaultMessage="Third Person" />}
        preset={"accent1"}
        onClick={() => {
          setValue(!value);
        }}
      />
    </ToolTip>
  );
}

ToggleTpsButtonContainer.propTypes = {
  store: PropTypes.object.isRequired,
  scene: PropTypes.object.isRequired
};
