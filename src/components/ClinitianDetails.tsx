import { Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDetails } from "../constants/typings";
import { getUserDetails } from "../services/getUserDetails";

export default function ClinicianDetails() {
    const [userData, setUserData] = useState<UserDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate();
    useEffect(() => {
        getUserDetails().then((res) => {
            setLoading(false)
            if (res.httpStatusCode === 401) {
                navigate('/login')
            } else {
                setUserData(res)
            }
        }).catch((err) => {
            setLoading(false)
            navigate('/login')
        })
    }, []);
    return (
        <>
            {
                loading ? (
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                ) : (
                    <>
                        <Typography variant="body2" color="text.secondary" align="center">
                            {userData?.title} {
                                userData?.preferredName ? `${userData?.preferredName} (${userData?.firstName})` :
                                    userData?.firstName
                            } {userData?.middleName} {userData?.familyName} {userData?.suffix}
                        </Typography>
                    </>
                )
            }
        </>
    );
}