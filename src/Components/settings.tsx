
import React from 'react'
import { TextField, Paper, InputLabel, Input, FormHelperText, Button, Container, FormControl, Grid } from '@material-ui/core'
import PhoneTextInput from './PhoneInputField'
import RoommateList from './RoommateList'

function PhoneNumberInput(props: any) {
  return (

    <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />

  )
}




export default class Settings extends React.Component {
  render() {
    return (

      <Container>
        <Paper>
          <Grid container spacing={3}>

            <Grid item xs={6}>
            <h2> Add Roommate</h2>

            <form noValidate autoComplete="off">

              <TextField label="Name" />
              <PhoneTextInput />
              <Button variant="contained"> Add Roommate </Button>
              
              </form>
            </Grid>
            <Grid item xs={6}>
              <h2> Roommate List </h2>
              <Paper>
                <RoommateList />
              </Paper>
            </Grid>
            
          </Grid>
        </Paper>
      </Container>
    )
  }
}


