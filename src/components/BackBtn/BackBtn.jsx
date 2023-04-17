import { GiGuitar } from "react-icons/gi";

import * as SC from "./BackBtn.styled";

export const BackBtn = () => {
  return (
    <SC.ButtonBox>
      <SC.Link to="/">
        <GiGuitar size={15} style={{ transform: "rotate(224deg)" }} />
        Back
      </SC.Link>
    </SC.ButtonBox>
  );
};
