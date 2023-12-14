import React, { memo } from "react";
import UpperHeader from "./upperHeader/UpperHeader";
import LowerHeader from "./lowerHeader/LowerHeader";

const Header = () => {
  return (
    <>
      <div id="home">
        <UpperHeader />
      </div>
      <LowerHeader />
    </>
  );
};

export default memo(Header);
