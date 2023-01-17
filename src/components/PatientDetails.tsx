import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { getPatientList } from '../services/getPatientList';
import { useNavigate } from "react-router-dom";
import { Patients } from "../constants/typings";
import { Skeleton } from '@mui/material';

export default function PatientDetails() {
    const [value, setValue] = useState<string>('1');
    const [loading, setLoading] = useState<boolean>(true)
    const [patientList, setPatientList] = useState<Patients | null>(null)
    const [selectedId, setSelectedId] = useState<string>('')

    const navigate = useNavigate()

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        console.log(value)
        setValue(newValue);
    };

    useEffect(() => {
        getPatientList().then((res) => {
            setLoading(false)
            if (res.httpStatusCode === 401) {
                navigate('/login')
            } else {
                setPatientList(res)
                setSelectedId(res?.patients?.[0].id)
                console.log(res, selectedId)
            }
        }).catch((err) => {
            setLoading(false)
            navigate('/login')
        })
    }, []);

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            {
                loading ? (
                    <>
                        <Skeleton variant="text" sx={{ fontSize: '1rem', height: 100 }} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', height: 300 }} />
                    </>
                ) : <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {
                                patientList && patientList.patients?.map(({ name, id }) => (
                                    <Tab label={name} value={id} key={id}/>
                                ))
                            }
                        </TabList>
                    </Box>
                    <TabPanel value={selectedId}>Item One</TabPanel>
                    {/* <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel> */}
                </TabContext>
            }
        </Box>
    );
}