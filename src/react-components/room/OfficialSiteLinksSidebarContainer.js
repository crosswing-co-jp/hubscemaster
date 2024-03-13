import React from "react";
import PropTypes from "prop-types";
import { OfficialSiteLinksSidebar } from "./OfficialSiteLinksSidebar";

export function OfficialSiteLinksSidebarContainer({ onClose, appName }) {
  const links = [
    { id: 1, name: "TOP", url: "https://info.voice-doujin.space" },
    { id: 2, name: "メタホ", url: "https://info.voice-doujin.space/metaho" },
    { id: 3, name: "プラットフォーム", url: "https://platform.voice-doujin.space" },
    { id: 4, name: "操作方法", url: "https://note.com/voice_engi/m/m43d746841ed6" },
    { id: 5, name: "支援ページ", url: "https://info.voice-doujin.space/ticket" },
    { id: 6, name: "NEWS", url: "https://info.voice-doujin.space/archive" },
    { id: 7, name: "お問い合わせ", url: "https://info.voice-doujin.space/contact/inquiry" },
    { id: 8, name: "お客様の声", url: "https://info.voice-doujin.space/reviews" }
  ];

  return <OfficialSiteLinksSidebar links={links} onClose={onClose} appName={appName} />;
}

OfficialSiteLinksSidebarContainer.propTypes = {
  onClose: PropTypes.func,
  appName: PropTypes.string
};
