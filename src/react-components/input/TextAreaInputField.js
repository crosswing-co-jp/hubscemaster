import React, { forwardRef, memo } from "react";
import PropTypes from "prop-types";
import { InputField } from "./InputField";
import { useId } from "./useId";
import { TextAreaInput } from "./TextAreaInput";

/* eslint-disable-next-line react/display-name */
export const TextAreaInputField = memo(
  forwardRef(({ className, error, description, labelClassName, inputClassName, label, fullWidth, ...rest }, ref) => {
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
        <TextAreaInput id={id} ref={ref} className={inputClassName} {...rest} />
      </InputField>
    );
  })
);

TextAreaInputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  error: PropTypes.node,
  description: PropTypes.node,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  fullWidth: PropTypes.bool
};
