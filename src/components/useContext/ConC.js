import React, {useContext} from 'react';
import { BioData } from "./ConA";

const ConC = ({name}) => {
  const channelName = useContext(BioData);
  return <h1>Hello ComC {channelName}</h1>
}

export default ConC
