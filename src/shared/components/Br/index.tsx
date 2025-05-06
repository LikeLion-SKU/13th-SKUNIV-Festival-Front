import { Fragment } from "react/jsx-runtime";

interface BrProps {
  content: string | undefined;
}

const Br = ({ content }: BrProps) => {
  return content?.split("<br>").map((line, idx) => (
    <Fragment key={idx}>
      {line}
      <br />
    </Fragment>
  ));
};

export default Br;
