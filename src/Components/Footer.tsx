import { Box, Typography } from "@material-ui/core";
import React from "react";

interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <div>
      <Box alignItems="center" padding="10px">
        <Typography> Made by Jack Clarke</Typography>
      </Box>
    </div>
  );
}
