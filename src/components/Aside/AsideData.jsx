import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { RiSendPlaneFill, RiVerifiedBadgeFill } from "react-icons/ri";

function AsideData() {
  const [typeWriter] = useTypewriter({
    words: ["Frontend Web Developer", "UI/UX Designer", "Graphic Artist"],
    typeSpeed: 100,
    deleteSpeed: 40,
    loop: true,
  });

  return (
    <div className="aside-data">
      <h1 className="aside-title">Jay Estoquia</h1>
      <h3 className="aside-subtitle">
        {typeWriter}
        <Cursor cursorStyle=";" />
      </h3>
    </div>
  );
}

export default AsideData;
