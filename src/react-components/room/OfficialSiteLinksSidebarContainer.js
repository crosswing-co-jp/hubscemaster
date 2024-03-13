import React from "react";
import PropTypes from "prop-types";
import { OfficialSiteLinksSidebar } from "./OfficialSiteLinksSidebar";

export function OfficialSiteLinksSidebarContainer({ onClose, appName }) {
  const links = [
    { id: 1, name: "トップ", url: "https://" },
  ];

  return <OfficialSiteLinksSidebar links={links} onClose={onClose} appName={appName} />;
}

OfficialSiteLinksSidebarContainer.propTypes = {
  onClose: PropTypes.func,
  appName: PropTypes.string
};
