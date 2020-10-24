import Roommate from "./Roommate";
import ChoreDateTime from "./ChoreDateTime";
export default interface Chore {
  name: string;
  dateTime: ChoreDateTime;
  roommates?: Roommate[];
  houseHoldID: string;
}
