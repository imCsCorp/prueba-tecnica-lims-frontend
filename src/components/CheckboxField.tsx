import React, { FC } from "react";

interface Props {
  name?: string;
  id: string;
  label: string;
}

const CheckboxField: FC<Props> = ({ id, name, label }) => {
  return (
    <React.Fragment>
      <div className="mb-3 form-check">
        <input
          className={`form-check-input`}
          type="checkbox"
          value=""
          id={id}
          name={name ? name : id}
        />
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </React.Fragment>
  );
};

export default CheckboxField;
