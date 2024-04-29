import React from "react";
import PropTypes from "prop-types";
import styles from "./AvatarSettingsSidebar.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { BackButton } from "../input/BackButton";
import { AvatarSettingsContent } from "./AvatarSettingsContent";
import { FormattedMessage } from "react-intl";

export function AvatarSettingsSidebar({ showBackButton, onBack, onClose, ...rest }) {
  return (
    <Sidebar
      title={<FormattedMessage id="avatar-settings-sidebar.title" defaultMessage="Avatar Settings" />}
      beforeTitle={showBackButton ? <BackButton onClick={onBack} /> : <CloseButton onClick={onClose} />}
      className={styles.avatarSettingsSidebar}
    >
      <AvatarSettingsContent {...rest} />
    </Sidebar>
  );
}

AvatarSettingsSidebar.propTypes = {
  showBackButton: PropTypes.bool,
  onBack: PropTypes.func,
  onClose: PropTypes.func
};
