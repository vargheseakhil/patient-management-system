import { PatientDetailsResponse } from "../constants/typings";
import { getPatientDetails } from "../services/getPatientDetails";

const patientListCacheMap: Map<string, Promise<PatientDetailsResponse>> = new Map();

export const getPatientDetailsByID = (patientId: string): Promise<PatientDetailsResponse> => {
 if (!patientListCacheMap.has(patientId)) {
    patientListCacheMap.set(patientId, getPatientDetails(patientId));
 }
 return patientListCacheMap.get(patientId) || getPatientDetails(patientId);
};