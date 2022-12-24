import React, { createContext } from 'react';
import ComB from "./ConB";

const BioData = createContext();

const ConA = () => {
  return(
  <BioData.Provider value={"Sunny Rathaur"}>
    <ComB/>
  </BioData.Provider>
  )
}

export default ConA
export {BioData};
