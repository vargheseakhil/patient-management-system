import { ClinicianDetails } from "../constants/typings";
import { getAPIAuthHeader } from "../helpers/getAPIAuthHeader";

export async function getUserDetails():Promise<ClinicianDetails>{
        const response = await fetch('/clinician-details', {
            headers: getAPIAuthHeader(),
        })
        const clinician: ClinicianDetails = await response.json()
        return clinician;
}