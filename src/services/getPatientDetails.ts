import { PatientDetailsResponse } from "../constants/typings";
import { getAPIAuthHeader } from "../helpers/getAPIAuthHeader";

export async function getPatientDetails(
  patientId: string
): Promise<PatientDetailsResponse> {
  const response = await fetch(`/patient-details/${patientId}`, {
    headers: getAPIAuthHeader(),
  });
  const patientDetails: PatientDetailsResponse = await response.json();
  return patientDetails;
}
