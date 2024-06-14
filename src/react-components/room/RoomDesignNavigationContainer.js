import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./RoomDesignNavigationContainer.scss";
import { FormattedMessage } from "react-intl";
// import { usePublicRooms } from "../home/usePublicRooms";
import { MediaGrid } from "./MediaGrid";
import { MediaTile } from "./MediaTiles";
import { scaledThumbnailUrlFor } from "../../utils/media-url-utils";

const TILE_WIDTH = 230;

export const RoomDesignNavigationContainer = ({ showRoomDesignNavigation, onClick }) => {
  const [containerWidth, setContainerWidth] = useState(0);

  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  // const { results: publicRooms } = usePublicRooms();
  // const sortedPublicRooms = Array.from(publicRooms).sort((a, b) => b.member_count - a.member_count);
  const sortedPublicRooms = [
      {
          "description": null,
          "id": "X5ZrKaQ",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/545918e5-ac32-4b96-bf5a-22580b87818a.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Tempting Thirsty Room",
          "room_size": 24,
          "scene_id": "Fa9fgw8",
          "type": "room",
          "url": "https://dev.reticulum.io/X5ZrKaQ/tempting-thirsty-room",
          "user_data": null
      },
      {
          "description": null,
          "id": "aPZKXEF",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/d033c4e4-2174-4c6a-8a42-70b52708044f.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Elaborate Vibrant World",
          "room_size": 24,
          "scene_id": "2upDByq",
          "type": "room",
          "url": "https://dev.reticulum.io/aPZKXEF/elaborate-vibrant-world",
          "user_data": null
      },
      {
          "description": null,
          "id": "X5ZrKaQ",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/545918e5-ac32-4b96-bf5a-22580b87818a.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Tempting Thirsty Room",
          "room_size": 24,
          "scene_id": "Fa9fgw8",
          "type": "room",
          "url": "https://dev.reticulum.io/X5ZrKaQ/tempting-thirsty-room",
          "user_data": null
      },
      {
          "description": null,
          "id": "aPZKXEF",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/d033c4e4-2174-4c6a-8a42-70b52708044f.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Elaborate Vibrant World",
          "room_size": 24,
          "scene_id": "2upDByq",
          "type": "room",
          "url": "https://dev.reticulum.io/aPZKXEF/elaborate-vibrant-world",
          "user_data": null
      },
      {
          "description": null,
          "id": "X5ZrKaQ",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/545918e5-ac32-4b96-bf5a-22580b87818a.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Tempting Thirsty Room",
          "room_size": 24,
          "scene_id": "Fa9fgw8",
          "type": "room",
          "url": "https://dev.reticulum.io/X5ZrKaQ/tempting-thirsty-room",
          "user_data": null
      },
      {
          "description": null,
          "id": "aPZKXEF",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/d033c4e4-2174-4c6a-8a42-70b52708044f.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Elaborate Vibrant World",
          "room_size": 24,
          "scene_id": "2upDByq",
          "type": "room",
          "url": "https://dev.reticulum.io/aPZKXEF/elaborate-vibrant-world",
          "user_data": null
      },
      {
          "description": null,
          "id": "X5ZrKaQ",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/545918e5-ac32-4b96-bf5a-22580b87818a.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Tempting Thirsty Room",
          "room_size": 24,
          "scene_id": "Fa9fgw8",
          "type": "room",
          "url": "https://dev.reticulum.io/X5ZrKaQ/tempting-thirsty-room",
          "user_data": null
      },
      {
          "description": null,
          "id": "aPZKXEF",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/d033c4e4-2174-4c6a-8a42-70b52708044f.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Elaborate Vibrant World",
          "room_size": 24,
          "scene_id": "2upDByq",
          "type": "room",
          "url": "https://dev.reticulum.io/aPZKXEF/elaborate-vibrant-world",
          "user_data": null
      },
      {
          "description": null,
          "id": "X5ZrKaQ",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/545918e5-ac32-4b96-bf5a-22580b87818a.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Tempting Thirsty Room",
          "room_size": 24,
          "scene_id": "Fa9fgw8",
          "type": "room",
          "url": "https://dev.reticulum.io/X5ZrKaQ/tempting-thirsty-room",
          "user_data": null
      },
      {
          "description": null,
          "id": "aPZKXEF",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/d033c4e4-2174-4c6a-8a42-70b52708044f.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Elaborate Vibrant World",
          "room_size": 24,
          "scene_id": "2upDByq",
          "type": "room",
          "url": "https://dev.reticulum.io/aPZKXEF/elaborate-vibrant-world",
          "user_data": null
      }
      ,
      {
          "description": null,
          "id": "X5ZrKaQ",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/545918e5-ac32-4b96-bf5a-22580b87818a.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Tempting Thirsty Room",
          "room_size": 24,
          "scene_id": "Fa9fgw8",
          "type": "room",
          "url": "https://dev.reticulum.io/X5ZrKaQ/tempting-thirsty-room",
          "user_data": null
      },
      {
          "description": null,
          "id": "aPZKXEF",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/d033c4e4-2174-4c6a-8a42-70b52708044f.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Elaborate Vibrant World",
          "room_size": 24,
          "scene_id": "2upDByq",
          "type": "room",
          "url": "https://dev.reticulum.io/aPZKXEF/elaborate-vibrant-world",
          "user_data": null
      },
      {
          "description": null,
          "id": "X5ZrKaQ",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/545918e5-ac32-4b96-bf5a-22580b87818a.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Tempting Thirsty Room",
          "room_size": 24,
          "scene_id": "Fa9fgw8",
          "type": "room",
          "url": "https://dev.reticulum.io/X5ZrKaQ/tempting-thirsty-room",
          "user_data": null
      },
      {
          "description": null,
          "id": "aPZKXEF",
          "images": {
              "preview": {
                  "url": "https://dev.reticulum.io/files/d033c4e4-2174-4c6a-8a42-70b52708044f.jpg"
              }
          },
          "lobby_count": 0,
          "member_count": 0,
          "name": "Elaborate Vibrant World",
          "room_size": 24,
          "scene_id": "2upDByq",
          "type": "room",
          "url": "https://dev.reticulum.io/aPZKXEF/elaborate-vibrant-world",
          "user_data": null
      }
  ];
  console.log(sortedPublicRooms);

  useEffect(() => {
    const width = sortedPublicRooms.length * TILE_WIDTH;
    setContainerWidth(width);
  }, [sortedPublicRooms]);

  return (
    <>
      {sortedPublicRooms.length > 0 && (
        <div>
          <button
            className={classNames(styles.button, showRoomDesignNavigation && styles.navigationContainerOpenPosition)}
            onClick={onClick}
          >
            <p className={classNames(styles.buttonText)}>
              <FormattedMessage id="room-design-navigation.button" defaultMessage="See rooms with other designs" />
            </p>
          </button>
          {showRoomDesignNavigation && 
            <div className={classNames(styles.navigationContainer)}>
              <MediaGrid md style={{ width: containerWidth }}>
                {sortedPublicRooms.map(room => {
                  return (
                    <div className={styles.mediaTileContainer} key={room.id}>
                      <MediaTile
                        key={room.id}
                        entry={room}
                        processThumbnailUrl={(entry, width, height) =>
                          scaledThumbnailUrlFor(entry.images.preview.url, width, height)
                        }
                        style={{ backgroundColor: "#faf4ef" }}
                        isHomePage
                        showMoveButton
                      />
                    </div>
                  );
                })}
              </MediaGrid>
            </div>
          }
        </div>
      )}
    </>
  );
};

RoomDesignNavigationContainer.propTypes = {
  showRoomDesignNavigation: PropTypes.bool,
  onClick: PropTypes.func
};
