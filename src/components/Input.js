import React from "react";
import { InputText, InputUser, InputContent } from "../styles/component";

const Input = ({ label, type, value, onChange, onKeyDown, placeholder }) => {
  return (
    <InputUser
      name={label}
      id={label}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
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
  placeholder,
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
          placeholder={placeholder}
        ></Input>
      </WithLabel>
    </InputContent>
  );
};

export default InputWithLabel;
