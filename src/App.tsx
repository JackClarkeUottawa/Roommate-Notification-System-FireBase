import React from 'react';
import './App.css';
import "react-bootstrap";
import 'fontsource-roboto';
import SimpleBottomNavigation from './Components/bottomnavigationbar';
import palette from '@material-ui/system';
import Home from './Components/home'
import Box from '@material-ui/core/Box'
import { ThemeProvider } from 'styled-components'
import {CenteredTabs,TabPanel} from './Components/Tabs'
import SwipeableViews from 'react-swipeable-views';

const theme = {
  spacing: 4,
  palette: {
    primary: '#007bff',
  },
};




export default class App extends React.Component {

  render() {
    return (
      <div>
        <CenteredTabs />
      </div>
    )
  };
}



