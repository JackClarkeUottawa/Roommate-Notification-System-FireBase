// This class will contain all the information about a specific roommate, and methods to send and receive notifications to the roommate, roommate can also be assigned tasks





export interface Chore {
  name: string,
  time: Date,
  frequency?: number //Frequency in days, 7 is weekly
}
// stores user info, including chores
export interface Roommate {
  name: string,
  chores: Chore[]
  phoneNumber: string

}



//will eventually pull roommates from firestore, currently uses test code
export async function getRoommates(): Promise<Roommate[]> {
  let sweeping: Chore = {
    name: "Sweeping",
    time: new Date(2000, 2, 16)
    
  }
  let cooking: Chore = {
    name: "cooking",
    time: new Date(2000, 2, 14)
  }
  let mopping: Chore = {
    name: "mopping",
    time: new Date(2000, 2, 14)
  }
  let ordering: Chore = {
    name: "ordering",
    time: new Date(2000, 2, 14)
  }

  let jack: Roommate = {
    name: "jack:",
    chores: [sweeping,mopping,ordering,cooking],
    phoneNumber: "1234567891"
  }
  let sean: Roommate = {
    name: "sean",
    chores: [sweeping],
    phoneNumber: "1234567891"
  }
  let sarrah: Roommate = {
    name: "sarrah",
    chores: [sweeping],
    phoneNumber: "1234567891"
  }
  let natasha: Roommate = {
    name: "natasha",
    chores: [sweeping],
    phoneNumber: "1234567891"
  }

  let roommates: Roommate[] = [jack, sean, sarrah, natasha]
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var didSucceed = Math.random() >= 0;// Randomly Rejects or accepts for testing
      didSucceed ? resolve(roommates) : reject('Error');
    }, 1)
  }) 


}


//util
export function getDayOfTheWeekString(day: Date) {
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