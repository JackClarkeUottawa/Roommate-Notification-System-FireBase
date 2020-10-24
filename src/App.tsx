import React from "react";
import "./App.css";

import "fontsource-roboto";

import { CenteredTabs, TabPanel } from "./Components/Tabs";
import SignInScreen from "./Components/LoginPage";
import firebase from "firebase";
import Footer from "./Components/Footer";

const theme = {
  spacing: 4,
  palette: {
    primary: "#007bff",
  },
};
const firebaseConfig = {
  apiKey: "AIzaSyDUZ7zHylROQMcz_m8YJpI0JYY9DmQfmDo",
  authDomain: "roommatechoretracker.firebaseapp.com",
  databaseURL: "https://roommatechoretracker.firebaseio.com",
  projectId: "roommatechoretracker",
  storageBucket: "roommatechoretracker.appspot.com",
  messagingSenderId: "28877405799",
  appId: "1:28877405799:web:f7c72e6543e5247d811ec2",
  measurementId: "G-8ZR3L73M7G",
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  loggedIn: boolean;
  state = {
    loggedIn: !!firebase.auth().currentUser,
  };

  constructor(props: any) {
    super(props);
    this.loggedIn = false;
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: !!user });
    });
  }

  render() {
    return (
      <div>
        {this.state.loggedIn && <CenteredTabs />}
        {!this.state.loggedIn && <SignInScreen />}
        <Footer />
      </div>
    );
  }
}
