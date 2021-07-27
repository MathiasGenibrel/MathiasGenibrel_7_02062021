import React from "react";
import {InputText, InputUser, InputContent} from "../styles/component"

const Input = ({ label, type, value, onChange, onKeyDown }) => {
  return (
    <InputUser
      name={label}
      id={label}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

const WithLabel = (component) => {
  return (
    <>
      <InputText htmlFor={component.label}>{component.text}</InputText>
      {component.children}
    </>
  );
};

const InputWithLabel = ({
  label = "input",
  type = "text",
  text,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <InputContent>
      <WithLabel label={label} text={text}>
        <Input
          label={label}
          type={type}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        ></Input>
      </WithLabel>
    </InputContent>
  );
};

export default InputWithLabel;
