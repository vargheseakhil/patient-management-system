import { PatientsReponse } from "../constants/typings";

export async function getPatientList():Promise<PatientsReponse>{
    const sessionToken = sessionStorage.getItem('session-token') || ''
        const response = await fetch('/patients', {
            method: 'GET',
            headers: {
                "Authorization": sessionToken
            },
        })
        const patients: PatientsReponse = await response.json()
        return patients;
}