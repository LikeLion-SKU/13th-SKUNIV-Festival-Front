import styled from "@emotion/styled";

export type ActionProps = {
  actionData: {
    title: string;
    variant: "outline" | "confirm" | "destructive";
    action: () => void;
    disabled?: boolean;
  };
};

const Action = (props: ActionProps) => {
  return (
    <Button
      variant={props.actionData.variant}
      onClick={props.actionData.action}
      disabled={props.actionData.disabled}
    >
      {props.actionData.title}
    </Button>
  );
};

const Button = styled.button<{ variant: ActionProps["actionData"]["variant"]; disabled?: boolean }>`
  all: unset;
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props?.disabled
      ? "#919191"
      : props.variant === "confirm"
      ? "#4AA3FF"
      : props.variant === "destructive"
      ? "#FF6370"
      : undefined};
  border: ${(props) => (props.variant === "outline" ? "1.5px solid rgb(227,227,227)" : undefined)};
  border-radius: 5px;
  color: ${(props) => (props.variant === "outline" ? "#aaa" : "#fff")};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 17.69px;
  letter-spacing: -0.3px;
  white-space: nowrap;
  cursor: ${(props) => (props?.disabled ? "not-allowed" : "pointer")};
`;

export default Action;
