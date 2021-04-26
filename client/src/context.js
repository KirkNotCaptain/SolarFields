import React, { createContext } from 'react';

const SFContext = React.createContext({
  solarFieldID: 0,
  changeSolarField: (solarFieldsID) => {},
  solarFieldData: {},
  changeSolarFieldData: (data) => {},
});

export default SFContext;
