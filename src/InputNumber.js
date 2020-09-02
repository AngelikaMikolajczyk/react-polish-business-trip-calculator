import React from "react";

export function InputNumber(props) {
  return (
    <>
      <input
        className="InputNumber"
        type="number"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      {props.unit ? ` ${props.unit}` : null}
    </>
  );
}
