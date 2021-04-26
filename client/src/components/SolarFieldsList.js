import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import { display } from '@material-ui/system';
import axios from 'axios';
import SFContext from '../context.js';

const SolarFieldsList = () => {
  const context = useContext(SFContext);

  const displaySolarFieldsList = () => {
    const range = [...Array(16).keys()];
    return range.map((id) => {
      return (
        <ListItem
          button
          key={`${id}`}
          onClick={() => {
            fetchSolarField(id);
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={`Field ${id}`} />
        </ListItem>
      );
    });
  };

  const fetchSolarField = (solarFieldsID) => {
    axios
      .get(
        `http://localhost:3000/api/v1/solar_farms/${solarFieldsID}/technicians`
      )
      .then((data) => {
        console.log('data recieved:', data.data);
        context.changeSolarField(solarFieldsID);
        context.changeSolarFieldData(data.data);
      });
  };

  return <List>{displaySolarFieldsList()}</List>;
};

export default SolarFieldsList;
