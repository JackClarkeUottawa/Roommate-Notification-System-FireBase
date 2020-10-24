//returns a list of roommates
import React from 'react'
import {getRoommates, getDayOfTheWeekString } from '../func/Roommate'
import Chore from "../func/interfaces/Chore";
import Roommate from "../func/interfaces/Roommate";
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
interface RoommateCardProps {
  Chore: Chore;
}

function ChoreCard(props: RoommateCardProps) {
  let chore: Chore = props.Chore;

  return (
    <Paper elevation={4}>
      <Box  display="flex">
        <Box  display="flex">
          <p>
            Name: {chore.name} time: {chore.dateTime.Hour} day: {chore.dateTime.dayOfTheWeek}
         </p>
        </Box>

      </Box>
    </Paper>
  )
}


// will do the same as roommate list, needs sample data. 
export default function ChoreList(props: any) {
  return (<Paper><p> Not Implemented</p></Paper>)
}
