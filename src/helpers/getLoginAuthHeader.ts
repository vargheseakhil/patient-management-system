import { encode } from "base-64"

export const getLoginAuthHeader = (credentials: string) => {
    return {
        "Authorization": `Basic ${encode(credentials)}`
    }
}