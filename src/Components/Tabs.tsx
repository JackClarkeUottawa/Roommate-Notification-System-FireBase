import React, { ChangeEvent, Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeIcon from '@material-ui/icons/Home';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Calendar from './calendar'
import Container from '@material-ui/core/Container'
import Home from './home'
import Settings from './settings'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
export function TabPanel(props: any) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value != index}
      id={`simple-tab-panel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export function CenteredTabs(props: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" icon={<HomeIcon />}></Tab>
        <Tab label="Item Two" icon={<CalendarTodayIcon />} />
          <Tab label="Item Three" icon={<SettingsIcon />} />
          
      </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Container>
          <Paper>
            <Calendar />
          </Paper>
        </Container>

      </TabPanel>
      <TabPanel value={value} index={2}>
        <Settings />
      </TabPanel>
      </>
    
  );
}