//returns a list of roommates
import React from 'react'
import { Roommate, Chore, getRoommates, getDayOfTheWeekString } from '../func/Roommate'
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
interface RoommateCardProps {
  roommate: Roommate;
}

function RoommateCard(props: RoommateCardProps) {
  let roommate: Roommate = props.roommate;
  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <p>{roommate.name}</p>
        </Grid>
        <Grid item xs={2}>
          <p>{roommate.chores.map((chore, index) => (
            <p>{chore.name} {typeof chore.frequency === undefined ? "Next Day:" : "Day:"}{getDayOfTheWeekString(chore.time)} {chore.frequency === undefined ? "" : "frequency: " + chore.frequency} </p>

          )
          )
          }</p> <br />
        </Grid>

      </Grid>
    </Paper>
  )
}



export default function RoommateList(props: any) {
  let roommatesPromise: Promise<Roommate[]> = getRoommates();
  let roommateList: Roommate[] = []
  const [values, setValues] = React.useState({
    loading: true,
    roommateList: roommateList,
    error: false
  })
  roommatesPromise.then((roommates) => {

    setValues({
      loading: false,
      roommateList: roommates,
      error: false
    })

  },
    (error) => {
      setValues({
        error: true,
        roommateList: [],
        loading: false
      });
    })


  return (
    <>
      {
        values.loading && (

          <h1> Loading Roommates</h1>

        )}
      {!values.loading && !values.error && (

        <Paper>
          {values.roommateList.map((roommate) => (
            <RoommateCard roommate={roommate} />
          ))}
          
        </Paper>

      )}

      {values.error && (
        <h1> error</h1>
      )}
    </>
  )
}