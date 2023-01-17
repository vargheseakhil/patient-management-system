import { LoginResponse } from "../constants/typings";
import { getLoginAuthHeader } from "../helpers/getLoginAuthHeader";

async function loginUser(username: FormDataEntryValue | null, password: FormDataEntryValue | null): Promise<LoginResponse> {
    const credentials = `${username}:${password}`
    const response = await fetch('/login', {
        method: 'POST',
        headers: getLoginAuthHeader(credentials)
    });
    const loginResponse: LoginResponse = await response.json();
    return loginResponse;
}

export default loginUser