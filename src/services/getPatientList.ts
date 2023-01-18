import { PatientsReponse } from "../constants/typings";
import { getAPIAuthHeader } from "../helpers/getAPIAuthHeader";

export async function getPatientList(): Promise<PatientsReponse> {
  const response = await fetch("/patients", {
    headers: getAPIAuthHeader(),
  });
  const patients: PatientsReponse = await response.json();
  return patients;
}
