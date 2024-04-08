import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as AvatarIcon } from "../icons/Avatar.svg";
import { FormattedMessage, useIntl } from "react-intl";
import { ToolbarButton } from "../input/ToolbarButton";
import { ToolTip } from "@mozilla/lilypad-ui";

export function AvatarButtonContainer({ mediaSearchStore }) {
  const intl = useIntl();

  const description = intl.formatMessage({
    id: "avatar-tooltip.description",
    defaultMessage: "Change avatar"
  });

  return (
    <ToolTip description={description} location="left" category="tertiary">
      <ToolbarButton
        icon={<AvatarIcon />}
        onClick={() => mediaSearchStore.sourceNavigate("avatars")}
        label={<FormattedMessage id="place-popover.item-type.avatar" defaultMessage="Avatar" />}
        preset={"accent1"}
      />
    </ToolTip>
  );
}

AvatarButtonContainer.propTypes = {
  mediaSearchStore: PropTypes.object.isRequired
};
