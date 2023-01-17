export interface ApiError {
    httpStatusCode: number;
    errorMessage: string;
}

export interface SuccessResponse {
    sessionToken: string;
}

export interface UserDetails {
    username: string;
    role: string;
    title?: string;
    firstName: string;
    preferredName?: string;
    middleName?: string;
    familyName: string;
    suffix?: string;
}

export interface Patients {
    patients: {
        id: string;
        name: string;
    }[];
}

export type LoginResponse = SuccessResponse & ApiError

export type ClinicianDetails = UserDetails & ApiError

export type PatientsReponse = Patients & ApiError