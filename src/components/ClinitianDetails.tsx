import { Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { UserDetails } from "../constants/typings";
import { getUserDetails } from "../services/getUserDetails";
import { getDisplayName } from "../helpers/getDisplayName";

export default function ClinicianDetails() {
  const [userData, setUserData] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    getUserDetails()
      .then((res) => {
        setLoading(false);
        if (res.httpStatusCode === 401) {
          navigate("/login");
        } else {
          setUserData(res);
        }
      })
      .catch(() => {
        setLoading(false);
        navigate("/login");
      });
  }, []);
  return (
    <>
      {loading ? (
        <Skeleton variant="rectangular" width={150} />
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PersonOutlineIcon />
          <Typography variant="body2" color="text.secondary" align="center">
            {userData && getDisplayName(userData)}
          </Typography>
        </Box>
      )}
    </>
  );
}
