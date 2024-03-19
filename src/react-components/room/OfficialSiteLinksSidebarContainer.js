import React from "react";
import PropTypes from "prop-types";
import { OfficialSiteLinksSidebar } from "./OfficialSiteLinksSidebar";

export function OfficialSiteLinksSidebarContainer({ onClose, appName }) {
  const links = [
    { id: 1, name: "トップ", url: "https://metabox.s-oyama.me/" },
    { id: 2, name: "メタぼっくすとは", url: "https://metabox.s-oyama.me/about/" },
    { id: 3, name: "サービス・機能", url: "https://metabox.s-oyama.me/service/" },
    { id: 4, name: "デモ体験", url: "https://metabox.s-oyama.me/demo/" },
    { id: 5, name: "事例紹介", url: "https://metabox.s-oyama.me/case-study/" },
    { id: 6, name: "コラム", url: "https://metabox.s-oyama.me/column/" },
    { id: 7, name: "ニュース", url: "https://metabox.s-oyama.me/news/" },
    { id: 8, name: "よくあるご質問", url: "https://metabox.s-oyama.me/faq/" },
    { id: 9, name: "資料ダウンロード", url: "https://metabox.s-oyama.me/download/" },
    { id: 10, name: "お問い合わせ", url: "https://metabox.s-oyama.me/contact/" }
  ];

  return <OfficialSiteLinksSidebar links={links} onClose={onClose} appName={appName} />;
}

OfficialSiteLinksSidebarContainer.propTypes = {
  onClose: PropTypes.func,
  appName: PropTypes.string
};
