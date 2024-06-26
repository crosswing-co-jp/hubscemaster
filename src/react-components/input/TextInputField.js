import React, { forwardRef, memo } from "react";
import PropTypes from "prop-types";
import { InputField } from "./InputField";
import { TextInput } from "./TextInput";
import { useId } from "./useId";

/* eslint-disable-next-line react/display-name */
export const TextInputField = memo(
  forwardRef(({ className, error, description, inputClassName, label, labelClassName, fullWidth, ...rest }, ref) => {
    const id = useId();
    const labelId = useId();

    return (
      <InputField
        id={labelId}
        htmlFor={id}
        className={className}
        label={label}
        labelClassName={labelClassName}
        error={error}
        description={description}
        fullWidth={fullWidth}
      >
        <TextInput id={id} ref={ref} className={inputClassName} {...rest} />
      </InputField>
    );
  })
);

TextInputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  error: PropTypes.node,
  description: PropTypes.node,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  fullWidth: PropTypes.bool
};
