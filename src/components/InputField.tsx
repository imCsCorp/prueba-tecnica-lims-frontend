import React, { FC } from "react";

interface Props {
  placeholder?: string;
  name?: string;
  type?: "text" | "email" | "password";
  id: string;
  label: string;
}

const InputField: FC<Props> = ({
  type = "text",
  id,
  name,
  placeholder = "",
  label,
}) => {
  return (
    <React.Fragment>
      <div className="form-floating mb-3">
        <input
          type={type}
          className={`form-control`}
          id={id}
          name={name ? name : id}
          placeholder={placeholder}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </React.Fragment>
  );
};

export default InputField;
