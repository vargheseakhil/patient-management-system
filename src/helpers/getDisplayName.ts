import { UserData } from "../constants/typings";

export function getDisplayName(userData: UserData) {
  const displayName = `${userData?.title || ''} 
  ${userData?.preferredName
    ? `${userData?.preferredName} (${userData?.firstName})`
    : userData?.firstName}
  ${userData?.middleName || ''} ${userData?.familyName || ''} ${userData?.suffix || ''}`
  return displayName
}