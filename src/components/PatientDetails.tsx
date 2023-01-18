import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { TabPanel } from "@mui/lab";
import { COMMON_ERROR } from "../constants/strings";
import {
  Alert,
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { PatientDetails } from "../constants/typings";
import CardSkeleton from "./common/CardSkeleton";
import { getPatientDetailsByID } from "../helpers/cacheAPIResponse";
import { getDisplayName } from "../helpers/getDisplayName";

type PatientDetailsProps = {
  patientId: string;
};

export default function PatientDetailsTab(props: PatientDetailsProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [patientData, setPatientData] = useState<PatientDetails | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const { patientId } = props;

  //Effect to fetch patient details
  useEffect(() => {
    if (patientId) {
      setLoading(true);
      getPatientDetailsByID(patientId)
        .then((res) => {
          setLoading(false);
          if (res.httpStatusCode === 401) {
            navigate("/login");
          } else if (res.httpStatusCode === 404) {
            setErrorMessage(res.errorMessage);
          } else {
            setPatientData(res);
          }
        })
        .catch(() => {
          setLoading(false);
          setErrorMessage(COMMON_ERROR);
        });
    }
  }, [patientId]);

  return (
    <Box sx={{ m: 4, display: "flex", justifyContent: "center" }}>
      <TabPanel value={patientId}>
        <Card>
          {errorMessage ? (
            <Alert severity="error">{errorMessage}</Alert>
          ) : (
            <CardContent sx={{ minHeight: 180 }}>
              {loading ? (
                <CardSkeleton />
              ) : (
                <>
                  <Avatar sx={{ mb: 2 }} src="/broken-image.jpg" />
                  <Typography gutterBottom variant="h5" component="div">
                    {patientData && getDisplayName(patientData)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Sex: {patientData?.sex}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Age: {patientData?.age}
                  </Typography>
                </>
              )}
            </CardContent>
          )}
        </Card>
      </TabPanel>
    </Box>
  );
}
