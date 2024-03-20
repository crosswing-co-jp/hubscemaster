import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import styles from "./RoomSettingsSidebar.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { InputField } from "../input/InputField";
import { FormattedMessage, useIntl } from "react-intl";
import { ApplyButton } from "../input/Button";
import { TextInputField } from "../input/TextInputField";
import { TextAreaInputField } from "../input/TextAreaInputField";
import { ToggleInput } from "../input/ToggleInput";
import { RadioInputField, RadioInputOption } from "../input/RadioInputField";
import { NumericInputField } from "../input/NumericInputField";
import { BackButton } from "../input/BackButton";
import { SceneInfo } from "./RoomSidebar";
import { Column } from "../layout/Column";
import { InviteLinkInputField } from "./InviteLinkInputField";

export function RoomSettingsSidebar({
  showBackButton,
  accountId,
  room,
  fetchingInvite,
  inviteUrl,
  onRevokeInvite,
  maxRoomSize,
  showPublicRoomSetting,
  onSubmit,
  onClose,
  canChangeScene,
  onChangeScene
}) {
  const intl = useIntl();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    setValue
  } = useForm({
    defaultValues: room
  });

  const entryMode = watch("entry_mode");
  const spawnAndMoveMedia = watch("member_permissions.spawn_and_move_media");

  useEffect(() => {
    if (!spawnAndMoveMedia) {
      setValue("member_permissions.spawn_camera", false, { shouldDirty: true });
      setValue("member_permissions.pin_objects", false, { shouldDirty: true });
    }
  }, [spawnAndMoveMedia, setValue]);

  return (
    <Sidebar
      title={<FormattedMessage id="room-settings-sidebar.title" defaultMessage="Room Settings" />}
      beforeTitle={showBackButton ? <BackButton onClick={onClose} /> : <CloseButton onClick={onClose} />}
    >
      <Column padding as="form" onSubmit={handleSubmit(onSubmit)}>
        <SceneInfo
          accountId={accountId}
          scene={room.scene}
          canChangeScene={canChangeScene}
          onChangeScene={onChangeScene}
        />
        <TextInputField
          type="text"
          required
          autoComplete="off"
          placeholder={intl.formatMessage({
            id: "room-settings-sidebar.name-placeholder",
            defaultMessage: "Room name"
          })}
          minLength={1}
          maxLength={64}
          label={<FormattedMessage id="room-settings-sidebar.name" defaultMessage="Room Name" />}
          error={errors?.name?.message}
          fullWidth
          labelClassName={styles.label}
          {...register("name")}
        />
        <TextAreaInputField
          autoComplete="off"
          placeholder={intl.formatMessage({
            id: "room-settings-sidebar.description-placeholder",
            defaultMessage: "Room Description"
          })}
          label={<FormattedMessage id="room-settings-sidebar.description" defaultMessage="Room Description" />}
          minRows={3}
          error={errors?.description?.message}
          fullWidth
          labelClassName={styles.label}
          {...register("description")}
        />
        <NumericInputField
          required
          min={0}
          max={maxRoomSize}
          placeholder={intl.formatMessage({
            id: "room-settings-sidebar.room-size-placeholder",
            defaultMessage: "Member Limit"
          })}
          label={<FormattedMessage id="room-settings-sidebar.room-size" defaultMessage="Room Size" />}
          error={errors?.room_size?.message}
          fullWidth
          {...register("room_size")}
          labelClassName={styles.label}
        />
        <RadioInputField
          label={<FormattedMessage id="room-settings-sidebar.room-access" defaultMessage="Room Access" />}
          fullWidth
          labelClassName={styles.label}
        >
          <RadioInputOption
            value="allow"
            label={<FormattedMessage id="room-settings-sidebar.access-shared-link" defaultMessage="Shared link" />}
            description={
              <FormattedMessage
                id="room-settings-sidebar.access-shared-link-description"
                defaultMessage="Only those with the link can join"
              />
            }
            error={errors?.entry_mode?.message}
            {...register("entry_mode")}
          />
          <RadioInputOption
            value="invite"
            label={<FormattedMessage id="room-settings-sidebar.access-invite" defaultMessage="Invite only" />}
            description={
              <FormattedMessage
                id="room-settings-sidebar.access-invite-description"
                defaultMessage="Invite people with a link that can be revoked"
              />
            }
            error={errors?.entry_mode?.message}
            {...register("entry_mode")}
          />
        </RadioInputField>
        {entryMode === "invite" && (
          <InviteLinkInputField
            fetchingInvite={fetchingInvite}
            inviteUrl={inviteUrl}
            onRevokeInvite={onRevokeInvite}
            labelClassName={styles.label}
          />
        )}
        {showPublicRoomSetting && (
          <ToggleInput
            label={<FormattedMessage id="room-settings-sidebar.access-public" defaultMessage="Public" />}
            labelClassName={styles.toggleInputLabel}
            description={
              <FormattedMessage
                id="room-settings-sidebar.access-public-description"
                defaultMessage="Listed on the homepage"
              />
            }
            {...register("allow_promotion")}
          />
        )}
        <InputField
          label={<FormattedMessage id="room-settings-sidebar.permissions" defaultMessage="Room Member Permissions" />}
          fullWidth
          labelClassName={styles.label}
        >
          <div className={styles.roomPermissions}>
            <ToggleInput
              label={<FormattedMessage id="room-settings-sidebar.voice-chat" defaultMessage="Voice chat" />}
              labelClassName={styles.toggleInputLabel}
              {...register("member_permissions.voice_chat")}
            />
            <ToggleInput
              label={<FormattedMessage id="room-settings-sidebar.text-chat" defaultMessage="Text chat" />}
              labelClassName={styles.toggleInputLabel}
              {...register("member_permissions.text_chat")}
            />
            <ToggleInput
              label={
                <FormattedMessage
                  id="room-settings-sidebar.spawn-and-move-media"
                  defaultMessage="Create and move objects"
                />
              }
              labelClassName={styles.toggleInputLabel}
              {...register("member_permissions.spawn_and_move_media")}
            />
            <div className={styles.permissionsGroup}>
              <ToggleInput
                label={<FormattedMessage id="room-settings-sidebar.spawn-camera" defaultMessage="Create cameras" />}
                disabled={!spawnAndMoveMedia}
                labelClassName={styles.toggleInputLabel}
                {...register("member_permissions.spawn_camera")}
              />
              <ToggleInput
                label={<FormattedMessage id="room-settings-sidebar.pin-objects" defaultMessage="Pin objects" />}
                disabled={!spawnAndMoveMedia}
                labelClassName={styles.toggleInputLabel}
                {...register("member_permissions.pin_objects")}
              />
            </div>
            <ToggleInput
              label={<FormattedMessage id="room-settings-sidebar.spawn-drawing" defaultMessage="Create drawings" />}
              labelClassName={styles.toggleInputLabel}
              {...register("member_permissions.spawn_drawing")}
            />
            <ToggleInput
              label={<FormattedMessage id="room-settings-sidebar.spawn-emoji" defaultMessage="Create emoji" />}
              labelClassName={styles.toggleInputLabel}
              {...register("member_permissions.spawn_emoji")}
            />
            <ToggleInput
              label={<FormattedMessage id="room-settings-sidebar.fly" defaultMessage="Allow flying" />}
              labelClassName={styles.toggleInputLabel}
              {...register("member_permissions.fly")}
            />
          </div>
        </InputField>
        <InputField
          label={<FormattedMessage id="room-settings-sidebar.bitecs-client" defaultMessage="bitECS based Client" />}
          fullWidth
          labelClassName={styles.label}
        >
          <ToggleInput
            label={
              <FormattedMessage
                id="room-settings-sidebar.bitecs-client-activation"
                defaultMessage="Enable bitECS based Client"
              />
            }
            description={
              <FormattedMessage
                id="room-settings-sidebar.bitecs-client-activation-description"
                defaultMessage="Enable or disable the new Client, which is implemented with bitECS for simplicity and extensibility."
              />
            }
            labelClassName={styles.toggleInputLabel}
            {...register("user_data.hubs_use_bitecs_based_client")}
          />
        </InputField>
        <ApplyButton type="submit" />
      </Column>
    </Sidebar>
  );
}

RoomSettingsSidebar.propTypes = {
  accountId: PropTypes.string,
  showBackButton: PropTypes.bool,
  room: PropTypes.object.isRequired,
  fetchingInvite: PropTypes.bool,
  inviteUrl: PropTypes.string,
  onRevokeInvite: PropTypes.func,
  roomSize: PropTypes.number,
  maxRoomSize: PropTypes.number,
  showPublicRoomSetting: PropTypes.bool,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  canChangeScene: PropTypes.bool,
  onChangeScene: PropTypes.func
};
