import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SettingsIcon from "@material-ui/icons/Settings";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home Page"
        value="nearby"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Calendar"
        value="favorites"
        icon={<CalendarTodayIcon />}
      />
      <BottomNavigationAction
        label="Settings"
        value="recents"
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  );
}
