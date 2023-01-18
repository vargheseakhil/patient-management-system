import React, { useEffect, useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabList, TabContext } from "@mui/lab";
import { getPatientList } from "../services/getPatientList";
import { useNavigate } from "react-router-dom";
import { Patients } from "../constants/typings";
import PatientDetailsTab from "./PatientDetails";
import PatientListSkeleton from "./common/PatientListSkeleton";

export default function PatientList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [patientList, setPatientList] = useState<Patients | null>(null);
  const [selectedPatientId, setSelectedPatientId] = useState<string>("");

  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedPatientId(newValue);
  };

  useEffect(() => {
    getPatientList()
      .then((res) => {
        setLoading(false);
        if (res.httpStatusCode === 401) {
          navigate("/login");
        } else {
          setPatientList(res);
          setSelectedPatientId(res?.patients?.[0].id);
        }
      })
      .catch(() => {
        setLoading(false);
        navigate("/login");
      });
  }, []);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      {loading ? (
        <PatientListSkeleton />
      ) : (
        <TabContext value={selectedPatientId}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="Patient list tab" centered={true}>
              {patientList &&
                patientList.patients?.map(({ name, id }) => (
                  <Tab label={name} value={id} key={id} sx={{width: '100%'}}/>
                ))}
            </TabList>
          </Box>
          <PatientDetailsTab patientId={selectedPatientId} />
        </TabContext>
      )}
    </Box>
  );
}
