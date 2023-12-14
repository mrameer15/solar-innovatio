import React from "react";
import { memo } from "react";
import Hero from "./hero/Hero";
import ChiSiamo from "./chi siamo/ChiSiamo";
import Sire from "./sire/Sire";
import Connesso from "./connesso-intelligente/Connesso";
import Perche from "./Perche/Perche";
import Benefit from "./benefit/Benefit";
import Scegli from "./Scegli/Scegli";
import Connettiti from "./connettiti/Connettiti";
import AskQuestion from "./ask question/AskQuestion";
import Contattaci from "./contattaci/Contattaci";
import Subscribe from "./subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <Hero />
      <div id="chi-siamo">
        <ChiSiamo />
      </div>
      <div id="sire">
        <Sire />
      </div>
      <div id="features">
        <Connesso />
      </div>
      <div id="why">
        <Perche />
      </div>
      <Benefit />
      <div id="scegli">
        <Scegli />
      </div>
      <div id="connettiti">
        <Connettiti />
      </div>
      <AskQuestion />
      <div id="contattaci">
        <Contattaci />
      </div>
      <Subscribe />
    </>
  );
};

export default memo(Home);
