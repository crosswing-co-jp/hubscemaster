import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import styles from "./Footer.scss";
import discordLogoUrl from "../../assets/images/discord-logo-small.png";
import { Container } from "./Container";
import classNames from "classnames";

export function Footer({
  hidePoweredBy,
  showWhatsNewLink,
  showTerms,
  termsUrl,
  showPrivacy,
  privacyUrl,
  showCompanyLogo,
  companyLogoUrl,
  showDiscordBotLink,
  appName,
  isHmc
}) {
  let companyLogoBackgroundColorWhite = null;
  if (companyLogoUrl === "https://hubs.meta-box.space/files/3bd6d514-b472-4f5f-abe1-34dd01d6c522.png") {
    companyLogoBackgroundColorWhite = styles.companyLogoBackgroundColorWhite;
  }
  
  return (
    <footer>
      <Container as="div" className={styles.container}>
        <div className={styles.poweredBy}>
          {!hidePoweredBy && (
            <FormattedMessage
              id="footer.powered-by"
              defaultMessage="Powered by <a>Mozilla Hubs</a>"
              values={{
                // eslint-disable-next-line react/display-name
                a: chunks => (
                  <a className={styles.poweredByLink} href="https://hubs.mozilla.com/cloud">
                    {chunks}
                  </a>
                )
              }}
            />
          )}
        </div>
        <nav>
          <ul>
            {showDiscordBotLink && (
              <li>
                <img className={styles.discordLogo} src={discordLogoUrl} />
                <a href="/discord">
                  <FormattedMessage
                    id="home-page.add-to-discord"
                    defaultMessage="Add the {appName} Bot to Discord"
                    values={{
                      appName
                    }}
                  />
                </a>
              </li>
            )}
            {showWhatsNewLink && (
              <li>
                <a href="/whats-new">
                  <FormattedMessage id="footer.whats-new" defaultMessage="What's New" />
                </a>
              </li>
            )}
            {isHmc && (
              <li>
                <a target="_blank" rel="noopener noreferrer" href={"https://shop.spreadshirt.com/mozillaMR/"}>
                  <FormattedMessage id="footer.hubs-merch" defaultMessage="Hubs Merch" />
                </a>
              </li>
            )}
            {isHmc && (
              <li>
                <a target="_blank" rel="noopener noreferrer" href={"https://hubs.mozilla.com/docs/hubs-faq.html"}>
                  <FormattedMessage id="footer.FAQ" defaultMessage="FAQ" />
                </a>
              </li>
            )}
            {showTerms && (
              <li>
                <a target="_blank" rel="noopener noreferrer" href={termsUrl}>
                  <FormattedMessage id="footer.terms-of-use" defaultMessage="Terms of Use" />
                </a>
              </li>
            )}
            {showPrivacy && (
              <li>
                <a className={styles.link} target="_blank" rel="noopener noreferrer" href={privacyUrl}>
                  <FormattedMessage id="footer.privacy-notice" defaultMessage="Privacy Notice" />
                </a>
              </li>
            )}
            {showCompanyLogo && (
              <li>
                <img
                  className={classNames(styles.companyLogo, companyLogoBackgroundColorWhite)}
                  src={companyLogoUrl}
                  alt={<FormattedMessage id="footer.logo-alt" defaultMessage="Logo" />}
                />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  hidePoweredBy: PropTypes.bool,
  showWhatsNewLink: PropTypes.bool,
  showTerms: PropTypes.bool,
  termsUrl: PropTypes.string,
  showPrivacy: PropTypes.bool,
  privacyUrl: PropTypes.string,
  showCompanyLogo: PropTypes.bool,
  companyLogoUrl: PropTypes.string,
  showDiscordBotLink: PropTypes.bool,
  appName: PropTypes.string,
  isHmc: PropTypes.bool
};
