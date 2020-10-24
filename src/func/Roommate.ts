// This class will contain all the information about a specific roommate, and methods to send and receive notifications to the roommate, roommate can also be assigned tasks
import Roommate from './interfaces/Roommate'
import Chore from './interfaces/Chore';
export interface ChoreDateTime {
  dayOfTheWeek: number, // 0 is sunday, 7 is Saturday
  Hour: number, // Hour in 24 hours time that the event triggers
}




// stores user info, including chores




//will eventually pull roommates from firestore, currently uses test code
export async function getRoommates(): Promise<Roommate[]> {
  let sweeping: Chore = {
    name: "Sweeping",
    dateTime:{
      dayOfTheWeek: 0,
      Hour: 7
    },
    houseHoldID: "1"
    
  }
  let cooking: Chore = {
    name: "cooking",
    dateTime:{
      dayOfTheWeek: 0,
      Hour: 7
    },
    houseHoldID: "1"
  }
  let mopping: Chore = {
    name: "mopping",
    dateTime:{
      dayOfTheWeek: 0,
      Hour: 7
    },
    houseHoldID: "1"
  }
  let ordering: Chore = {
    name: "ordering",
    dateTime:{
      dayOfTheWeek: 0,
      Hour: 7
    },
    houseHoldID: "1"
  }

  let jack: Roommate = {
    name: "jack:",
    chores: [sweeping,mopping,ordering,cooking],
    phoneNumber: "1234567891",
    userID: "1",
    houseHoldID: "1"
  }

  let sean: Roommate = {
    name: "sean",
    chores: [sweeping],
    phoneNumber: "1234567891",
    userID: "1",
    houseHoldID: "1"
  }
  let sarrah: Roommate = {
    name: "sarrah",
    chores: [sweeping],
    phoneNumber: "1234567891",
    userID: "1",
    houseHoldID: "1"
  }
  let natasha: Roommate = {
    name: "natasha",
    chores: [sweeping],
    phoneNumber: "1234567891",
    userID: "1",
    houseHoldID: "1"
  }
  // assign roommates to chores
  sweeping.roommates = [natasha,sarrah,sean,jack]
  mopping.roommates = [jack]
  ordering.roommates = [jack]
  cooking.roommates = [jack]

  let roommates: Roommate[] = [jack, sean, sarrah, natasha]
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var didSucceed = Math.random() >= 0;// Randomly Rejects or accepts for testing
      didSucceed ? resolve(roommates) : reject('Error');
    }, 1)
  }) 


}


//gets day of the week from a Date
export function getDayOfTheWeekStringDate(day: Date) {
  if (day.getDay() === 0) {
    return "Sunday"
  } else if (day.getDay() === 1) {
    return "Monday"
  } else if (day.getDay() === 2) {
    return "Tuesday"
  } else if (day.getDay() === 3) {
    return "Wednesday"
  } else if (day.getDay() === 4) {
    return "Thursday"
  } else if (day.getDay() === 5) {
    return "Friday"
  } else if (day.getDay() === 6) {
    return "Saturday"
  }
}

export function getDayOfTheWeekString(day: number) {
  if (day === 0) {
    return "Sunday"
  } else if (day === 1) {
    return "Monday"
  } else if (day=== 2) {
    return "Tuesday"
  } else if (day === 3) {
    return "Wednesday"
  } else if (day === 4) {
    return "Thursday"
  } else if (day === 5) {
    return "Friday"
  } else if (day === 6) {
    return "Saturday"
  }
}