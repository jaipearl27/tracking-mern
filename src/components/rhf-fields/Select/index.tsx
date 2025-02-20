import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import "../common-styles.scss";

type Props = {
  options: {
    label: string;
    value: string;
  }[];
  label: string;
  helperText?: string;
  id: string;
};

const RhfSelect = ({ id, label, options, helperText = "" }: Props) => {
  const { formState, control } = useFormContext();

  const error = formState?.errors?.[id];

  return (
    <Controller
      name={id}
      defaultValue={undefined}
      render={({ field: { value, name, onChange, ref } }) => {
        console.log(value, name, "");
        return (
          <div className="form-field-wrapper">
            <label htmlFor={id} className="field-label">
              {label}
            </label>
            <Select
              value={options.find((c) => c.value === value) || undefined}
              name={name}
              onChange={(p) => {
                console.log(p?.value);
                onChange?.(p?.value);
              }}
              ref={ref}
              options={options}
              styles={{
                control: () => ({
                  fontSize: "0.75rem",
                  display: "flex",
                  border: "1px solid hsl(220, 13%, 91%)",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  ouline: "none",
                }),
                indicatorsContainer() {
                  return {
                    color: "hsl(220, 13%, 91%)",
                    ":hover": {
                      color: "hsl(220, 13%, 91%)",
                    },
                  };
                },
                option: (styles, p) => ({
                  ...styles,
                  borderRadius: 4,
                  marginBottom: 5,
                  ...(p?.isSelected
                    ? {
                        backgroundColor: "#e16449",
                      }
                    : {
                        backgroundColor: "transparent",
                        ":hover": {
                          backgroundColor: "hsl(220, 13%, 91%)",
                        },
                      }),
                  ":last-of-type": {
                    marginBottom: 0,
                  },
                }),
                menu: (styles) => ({
                  ...styles,
                  borderRadius: 4,
                  padding: 5,
                }),
              }}
            />
            {!error && helperText && (
              <p className="field-helper-text">{helperText}</p>
            )}
            {error && (
              <p className="field-error-text">{error?.message as string}</p>
            )}
          </div>
        );
      }}
      control={control}
    />
  );
};

export default RhfSelect;
