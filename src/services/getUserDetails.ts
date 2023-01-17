import { ClinicianDetails } from "../constants/typings";

export async function getUserDetails():Promise<ClinicianDetails>{
    const sessionToken = sessionStorage.getItem('session-token') || ''
        const response = await fetch('/clinician-details', {
            method: 'GET',
            headers: {
                "Authorization": sessionToken
            },
        })
        const clinician: ClinicianDetails = await response.json()
        return clinician;
}