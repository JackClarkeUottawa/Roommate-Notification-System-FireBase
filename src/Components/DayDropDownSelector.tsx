import React, { Component } from "react";
//import Select from "react-select";
import { Select, InputLabel, MenuItem } from "@material-ui/core";

export default function DropDownSettings(props: any) {
  const [day, setDay] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDay(event.target.value as string);
  };

  return (
    <>
      <Select labelId="Select-Day" defaultValue={0}>
        <MenuItem value={0}> Sunday</MenuItem>
        <MenuItem value={1}>Monday</MenuItem>
        <MenuItem value={2}>Tuesday</MenuItem>
        <MenuItem value={3}>Wednesday</MenuItem>
        <MenuItem value={4}>Thursday</MenuItem>
        <MenuItem value={5}>Friday</MenuItem>
        <MenuItem value={6}>Saturday</MenuItem>
      </Select>
    </>
  );
}
