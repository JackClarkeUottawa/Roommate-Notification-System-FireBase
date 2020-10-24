import Chore from "./Chore";
export default interface Roommate {
  name: string;
  chores: Chore[];
  phoneNumber: string;
  userID?: string;
  houseHoldID: string;
}
