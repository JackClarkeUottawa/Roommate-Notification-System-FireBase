import React from "react";
import {
  TextField,
  Paper,
  Button,
  Container,
  FormControl,
  Grid,
  Box,
} from "@material-ui/core";
import { flexbox } from "@material-ui/system";
import PhoneTextInput from "./PhoneInputField";
import RoommateList from "./RoommateList";
import DayDropDownSelector from "./DayDropDownSelector";
import ChoreList from "./ChoreList";
import firebase from "firebase";
import Chore from "../func/interfaces/Chore";
import Roommate from "../func/interfaces/Roommate";
import { SettingsSystemDaydreamTwoTone } from "@material-ui/icons";
import { getHouseHoldID } from "../func/HouseHold";

interface SettingsState {
  addRoommate: Roommate;
  addChore: Chore;
  RoommateList: Roommate[];
  ChoreList: Chore[];
  houseHoldID: string;
}

export default class Settings extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      addRoommate: {
        name: "",
        chores: [],
        phoneNumber: "",
        houseHoldID: getHouseHoldID(),
      },
      addChore: {
        name: "",
        dateTime: {
          dayOfTheWeek: 0, // 0 is sunday, 7 is Saturday
          Hour: 0,
        },
        roommates: [],
        houseHoldID: "",
      },
      RoommateList: [],
      ChoreList: [],
      houseHoldID: [],
    };
  }

  handleSignout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    firebase.auth().signOut();
  };

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Box flexWrap="wrap" display="flex">
          <Box flexWrap="wrap" display="flex" width="30em">
            <h2> Add Roommate</h2>
          </Box>

          <Box flexWrap="wrap" display="flex" width="30em">
            <form noValidate autoComplete="off">
              <TextField label="Name" />
              <PhoneTextInput />
              <Button variant="contained"> Add Roommate </Button>
            </form>
          </Box>
          <Box width="100%">
            <br />
          </Box>
          <Box display="flex" flexWrap="wrap" width="30em">
            <h2> Roommate List </h2>
          </Box>
          <Box display="flex" flexWrap="wrap" width="30em">
            <Paper>
              <RoommateList />
            </Paper>
          </Box>

          <Box flexWrap="wrap" display="flex" width="30em">
            <h2> Add Chore </h2>
          </Box>
          <FormControl>
            <Box flexWrap="wrap" display="flex" width="40em">
              <TextField label="Name" />
            </Box>
            <Box flexWrap="wrap" display="flex" width="40em">
              <DayDropDownSelector />
            </Box>
          </FormControl>
          <Box flexWrap="wrap" display="flex" width="30em" />
          <Box flexWrap="wrap" display="flex">
            <ChoreList />
          </Box>
          <Box flexWrap="wrap" display="flex" width="30em" />
          <Box flexWrap="wrap" display="flex" width="30em" />
          <Box flexWrap="wrap" display="flex" width="30em">
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleSignout}
            >
              Sign out
            </Button>
          </Box>
        </Box>
      </Container>
    );
  }
}
