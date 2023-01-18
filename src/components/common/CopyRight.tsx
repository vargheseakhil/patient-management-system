import { Link, Typography } from "@mui/material";
import React from "react";

export function Copyright(props: any) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://orionhealth.com/global/">
          Orion Health
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }