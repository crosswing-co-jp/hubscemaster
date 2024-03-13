import React, { useRef } from "react";
import PropTypes from "prop-types";
import styles from "./OfficialSiteLinksSidebar.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { List, ButtonListItem } from "../layout/List";
import { FormattedMessage } from "react-intl";
import { ReactComponent as DoorIcon } from "../icons/Door.svg";

function OfficialSiteLinksSidebarItem({ link, ...rest }) {
  return (
    <ButtonListItem {...rest} type="button" className={styles.officialSiteLinksSidebarButtonListItem}>
      <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.officialSiteLinksSidebarLink}>
        <DoorIcon />
        {link.name}
      </a>
    </ButtonListItem>
  );
}

OfficialSiteLinksSidebarItem.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};

export function OfficialSiteLinksSidebar({ links, onClose, appName }) {
  const listRef = useRef();

  return (
    <Sidebar
      title={
        <FormattedMessage
          id="official-site-links.sidebar-title"
          defaultMessage="{appName} official website"
          values={{ appName }}
        />
      }
      beforeTitle={<CloseButton onClick={onClose} />}
      className={styles.officialSiteLinksSidebar}
    >
      <List ref={listRef}>{links.map(link => <OfficialSiteLinksSidebarItem link={link} key={link.id} />)}</List>
    </Sidebar>
  );
}

OfficialSiteLinksSidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  onClose: PropTypes.func,
  appName: PropTypes.string
};
