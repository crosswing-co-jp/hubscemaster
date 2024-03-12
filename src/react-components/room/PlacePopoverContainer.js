import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as PenIcon } from "../icons/Pen.svg";
// import { ReactComponent as TextIcon } from "../icons/Text.svg";
// import { ReactComponent as LinkIcon } from "../icons/Link.svg";
import { ReactComponent as GIFIcon } from "../icons/GIF.svg";
import { ReactComponent as ObjectIcon } from "../icons/Object.svg";
import { ReactComponent as UploadIcon } from "../icons/Upload.svg";
import { PlacePopoverButton } from "./PlacePopover";
import { ObjectUrlModalContainer } from "./ObjectUrlModalContainer";
import configs from "../../utils/configs";
import { FormattedMessage } from "react-intl";

export function PlacePopoverContainer({ scene, mediaSearchStore, showNonHistoriedDialog, hubChannel }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function updateItems() {
      const hasActivePen = !!scene.systems["pen-tools"].getMyPen();

      let nextItems = [];

      if (hubChannel.can("spawn_and_move_media")) {
        nextItems = [
          ...nextItems,
          // TODO: Create text/link dialog
          // { id: "text", icon: TextIcon, color: "blue", label: "Text" },
          // { id: "link", icon: LinkIcon, color: "blue", label: "Link" },
          {
            id: "upload",
            icon: UploadIcon,
            color: "accent3",
            label: <FormattedMessage id="place-popover.item-type.upload" defaultMessage="Upload" />,
            onSelect: () => showNonHistoriedDialog(ObjectUrlModalContainer, { scene })
          },
          configs.integration("sketchfab") && {
            id: "model",
            icon: ObjectIcon,
            color: "accent2",
            label: <FormattedMessage id="place-popover.item-type.model" defaultMessage="3D Model" />,
            onSelect: () => mediaSearchStore.sourceNavigate("sketchfab")
          },
          hubChannel.can("spawn_drawing") && {
            id: "pen",
            icon: PenIcon,
            color: "accent5",
            label: <FormattedMessage id="place-popover.item-type.pen" defaultMessage="Pen" />,
            onSelect: () => scene.emit("penButtonPressed"),
            selected: hasActivePen
          },
          configs.integration("tenor") && {
            id: "gif",
            icon: GIFIcon,
            color: "accent2",
            label: <FormattedMessage id="place-popover.item-type.gif" defaultMessage="GIF" />,
            onSelect: () => mediaSearchStore.sourceNavigate("gifs")
          }
          // TODO: Launch system file prompt directly
        ];
      }

      setItems(nextItems);
    }

    hubChannel.addEventListener("permissions_updated", updateItems);

    updateItems();

    function onSceneStateChange(event) {
      if (event.detail === "camera" || event.detail === "pen") {
        updateItems();
      }
    }

    scene.addEventListener("stateadded", onSceneStateChange);
    scene.addEventListener("stateremoved", onSceneStateChange);

    return () => {
      hubChannel.removeEventListener("permissions_updated", updateItems);
      scene.removeEventListener("stateadded", onSceneStateChange);
      scene.removeEventListener("stateremoved", onSceneStateChange);
    };
  }, [hubChannel, mediaSearchStore, showNonHistoriedDialog, scene]);

  return <PlacePopoverButton items={items} />;
}

PlacePopoverContainer.propTypes = {
  hubChannel: PropTypes.object.isRequired,
  scene: PropTypes.object.isRequired,
  mediaSearchStore: PropTypes.object.isRequired,
  showNonHistoriedDialog: PropTypes.func.isRequired
};
