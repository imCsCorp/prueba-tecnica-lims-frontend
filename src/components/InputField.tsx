import React, { FC } from "react";

interface Props {
  placeholder?: string;
  name?: string;
  type?: "text" | "email" | "password";
  id: string;
  label: string;
  value: string;
  handleChange: any;
  handleBlur: any;
  errors: any;
  touched: any;
}

const InputField: FC<Props> = ({
  type = "text",
  id,
  name,
  placeholder = "",
  label,
  value,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  return (
    <React.Fragment>
      <div className="form-floating mb-3">
        <input
          type={type}
          className={`form-control is-${
            touched[id] ? (errors[id] ? "invalid" : "valid") : ""
          }`}
          id={id}
          name={name ? name : id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </React.Fragment>
  );
};

export default InputField;
