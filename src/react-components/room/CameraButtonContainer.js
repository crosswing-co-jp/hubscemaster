import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as CameraIcon } from "../icons/Camera.svg";
import { FormattedMessage, useIntl } from "react-intl";
import { anyEntityWith } from "../../utils/bit-utils";
import { MyCameraTool } from "../../bit-components";
import { ToolbarButton } from "../input/ToolbarButton";
import { ToolTip } from "@mozilla/lilypad-ui";

export function CameraButtonContainer({ scene, hubChannel }) {
  const [item, setItem] = useState({});
  const intl = useIntl();

  const description = intl.formatMessage({
    id: "camera-tooltip.description",
    defaultMessage: "Take photos and videos with the camera"
  });

  useEffect(
    () => {
      function updateItem() {
        const hasActiveCamera = !!anyEntityWith(APP.world, MyCameraTool);

        const nextItem = {
          id: "camera",
          icon: <CameraIcon />,
          color: "accent5",
          label: <FormattedMessage id="place-popover.item-type.camera" defaultMessage="Camera" />,
          onSelect: () => scene.emit("action_toggle_camera"),
          selected: hasActiveCamera
        };

        setItem(nextItem);
      }

      hubChannel.addEventListener("permissions_updated", updateItem);

      updateItem();

      function onSceneStateChange(event) {
        if (event.detail === "camera") {
          updateItem();
        }
      }

      scene.addEventListener("stateadded", onSceneStateChange);
      scene.addEventListener("stateremoved", onSceneStateChange);

      return () => {
        hubChannel.removeEventListener("permissions_updated", updateItem);
        scene.removeEventListener("stateadded", onSceneStateChange);
        scene.removeEventListener("stateremoved", onSceneStateChange);
      };
    },
    [hubChannel, scene]
  );

  return (
    <ToolTip description={description}>
      <ToolbarButton
        icon={item?.icon}
        selected={item?.selected}
        onClick={item?.onSelect}
        label={item?.label}
        preset={item?.color}
      />
    </ToolTip>
  );
}

CameraButtonContainer.propTypes = {
  hubChannel: PropTypes.object.isRequired,
  scene: PropTypes.object.isRequired
};