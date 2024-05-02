import React, { FC } from "react";

interface Props {
  name?: string;
  id: string;
  label: string;
  value: boolean;
  handleChange: any;
  handleBlur: any;
  errors: any;
  touched: any;
}

const CheckboxField: FC<Props> = ({
  id,
  name,
  label,
  value,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  return (
    <React.Fragment>
      <div className="mb-3 form-check">
        <input
          className={`form-check-input is-${
            touched[id] ? (errors[id] ? "invalid" : "valid") : ""
          }`}
          type="checkbox"
          id={id}
          name={name ? name : id}
          checked={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </React.Fragment>
  );
};

export default CheckboxField;
