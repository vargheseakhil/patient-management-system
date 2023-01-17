export const getAPIAuthHeader = () => {
    const sessionToken = sessionStorage.getItem('session-token') || ''
    return {
        "Authorization": sessionToken
    }
}