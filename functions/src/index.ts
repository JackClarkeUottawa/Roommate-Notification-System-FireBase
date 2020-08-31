import * as functions from 'firebase-functions';
import twilio from 'twilio';
import * as config from '../privateKeys/config.json';


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//eventually this will be stored in some kind of database
// stores information about a specific chore,


interface Chore {
    name: string,
    time: Date,
    frequency: number //Frequency in days
  }
// stores user info, including chores
interface Roommate {
    name: string,
    chores: Chore[]
    phoneNumber: string

}


//might get stored in database
let roommates: Roommate[];

//helper functions




//twilio setup 
const TWILIO_ACCOUNT_SID = config.TWILIO_ACCOUNT_SID
const TWILIO_AUTH_TOKEN = config.TWILIO_AUTH_TOKEN
const TWILIO_NUMBER = config.TWILIO_NUMBER

let twclient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

async function sendMessage(message: string, phoneNumber: string) {

    let promiseThing = twclient.messages.create({
        to: phoneNumber,
        from: TWILIO_NUMBER,
        body: message
    })
    return promiseThing;
}


// roommate control
exports.addRoommate = functions.https.onCall((data: Roommate) => {
    roommates.push(data)
})

exports.removeRoommate = functions.https.onCall((data: string) => {
    const deadroomy: number = roommates.findIndex((temp_roomy) => temp_roomy.name === data)
    roommates.splice(deadroomy, 1)
})



