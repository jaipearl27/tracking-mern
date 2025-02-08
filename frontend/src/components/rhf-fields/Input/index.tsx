import React from "react";
import { useFormContext } from "react-hook-form";

import "./styles.scss";
import "../common-styles.scss";

type Props = {
  id: string;
  label?: string;
  helperText?: string;
  placeholder?: string;
  inputType?: "text" | "password" | "email" | "number";
};

const RhfInput = ({
  id,
  helperText,
  inputType = "text",
  label = "",
  placeholder = "",
}: Props) => {
  const { register, formState } = useFormContext();

  const error = formState?.errors?.[id];

  return (
    <div className="form-field-wrapper">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        className="form-field"
        {...register(id)}
      />
      {!error ? (
        <p className="field-helper-text">{helperText}</p>
      ) : (
        <p className="field-error-text">{error?.message as string}</p>
      )}
    </div>
  );
};

export default RhfInput;
