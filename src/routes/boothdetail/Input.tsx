import styled from "@emotion/styled";
import { ComponentProps, ReactNode } from "react";

interface InputProps {
  label: ReactNode;
  trailing?: string;
  errorMessage?: string;
}

const Input = ({
  label,
  trailing,
  errorMessage,
  ...props
}: InputProps & ComponentProps<"input">) => {
  return (
    <Wrapper>
      <InputWrapper>
        <Label>{label}</Label>
        <TextInput {...props} />
        {trailing && <Trailing>{trailing}</Trailing>}
      </InputWrapper>
      {errorMessage && <Error>{errorMessage}</Error>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
`;

const Error = styled.span`
  color: #ff2f2f;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const InputWrapper = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: #eaeaea;
  border-radius: 10px;
`;

const Label = styled.span`
  color: #7d7d7d;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const TextInput = styled.input`
  all: unset;
  flex: 1;
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const Trailing = styled.span`
  margin-right: auto;
  color: #7d7d7d;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export default Input;
