import React, { useState } from "react";
import styled from "styled-components";

const InputText = styled.label`
  color: #f4f4f4;
  font-size: 0.9rem;
  font-weight: 500;
  margin: calc(var(--spacing) * 1) 0 0.3rem 0.5rem;
  text-align: left;
`;

const InputUser = styled.input`
  background: rgba(1, 24, 39, 0.95);
  color: #f4f4f4;
  height: 60px;
  width: calc(260px - var(--spacing));
  padding-left: var(--spacing);
  border-radius: 15px;
  box-shadow: 4px 4px 8px rgba(1, 24, 39, 0.35),
    inset 5px 4px 4px rgba(255, 146, 51, 0.15);
`;

const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = ({ label, type, initialValue = "" }) => {
  const [value, setState] = useState(initialValue);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <InputUser
      name={label}
      id={label}
      type={type}
      onChange={handleChange}
      value={value}
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

const InputWithLabel = ({ label = "input", type = "text", text }) => {
  return (
    <InputContent>
      <WithLabel label={label} text={text}>
        <Input label={label} type={type}></Input>
      </WithLabel>
    </InputContent>
  );
};

export default InputWithLabel;
