import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { RiSendPlaneFill, RiVerifiedBadgeFill } from "react-icons/ri";
import { RiRadioButtonLine } from "react-icons/ri";

import Data from "../../assets/json/Data.json";

function AsideData() {
  const [typeWriter] = useTypewriter(Data.typewriter);

  return (
    <div className="asid__data">
      <h1 className="aside__title">Jay Estoquia</h1>
      <h3 className="aside__subtitle">
        {typeWriter}
        <Cursor cursorStyle=";" />
      </h3>
    </div>
  );
}

export default AsideData;
