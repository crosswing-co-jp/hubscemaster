import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as AvatarIcon } from "../icons/Avatar.svg";
import { FormattedMessage } from "react-intl";
import { ToolbarButton } from "../input/ToolbarButton";

export function AvatarButtonContainer({ mediaSearchStore }) {
  return (
    <ToolbarButton
      icon={<AvatarIcon />}
      onClick={() => mediaSearchStore.sourceNavigate("avatars")}
      label={<FormattedMessage id="place-popover.item-type.avatar" defaultMessage="Avatar" />}
      preset={"accent1"}
    />
  );
}

AvatarButtonContainer.propTypes = {
  mediaSearchStore: PropTypes.object.isRequired
};
