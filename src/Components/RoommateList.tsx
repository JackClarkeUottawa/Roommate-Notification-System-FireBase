//returns a list of roommates
import React from "react";
import {
  getRoommates,
  getDayOfTheWeekString,
} from "../func/Roommate";
import Roommate from '../func/interfaces/Roommate';
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
interface RoommateCardProps {
  roommate: Roommate;
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function RoommateCard(props: RoommateCardProps) {
  let roommate: Roommate = props.roommate;

  return (
    <Paper elevation={4}>
      <Box display="flex">
        <Box display="flex">
          <p>{roommate.name}</p>
        </Box>
        <Box display="flex">
          <p>
            {roommate.chores.map((chore, index) => (
              <p>
                {chore.name}{" "}
                { "Day:"}
                {getDayOfTheWeekString(chore.dateTime.dayOfTheWeek)}{" "}
                {chore.dateTime.Hour}{" "}
                
              </p>
            ))}
          </p>
        </Box>
      </Box>
    </Paper>
  );
}

export default function RoommateList(props: any) {
  let roommatesPromise: Promise<Roommate[]> = getRoommates();
  let roommateList: Roommate[] = [];
  const [values, setValues] = React.useState({
    loading: true,
    roommateList: roommateList,
    error: false,
  });
  roommatesPromise.then(
    (roommates) => {
      setValues({
        loading: false,
        roommateList: roommates,
        error: false,
      });
    },
    (error) => {
      setValues({
        error: true,
        roommateList: [],
        loading: false,
      });
    }
  );

  return (
    <>
      {values.loading && <h1> Loading Roommates</h1>}
      {!values.loading && !values.error && (
        <Paper>
          {values.roommateList.map((roommate) => (
            <RoommateCard roommate={roommate} />
          ))}
        </Paper>
      )}

      {values.error && <h1> error</h1>}
    </>
  );
}
