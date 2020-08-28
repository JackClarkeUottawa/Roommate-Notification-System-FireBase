import * as functions from 'firebase-functions';
import twilio from 'twilio'
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//eventually this will be stored in some kind of database
// stores information about a specific chore,

const test = require('firebase-functions-test')({
    databaseURL: 'https://my-project.firebaseio.com',
    storageBucket: 'my-project.appspot.com',
    projectId: 'my-project',
  }, 'path/to/serviceAccountKey.json');
  

interface chore{
    name: string,
    time: Date,
}
// stores user info, including chores
interface roommate{
    name: string,
    chores: chore[]
    phoneNumber: string
    
}
//helper functions


var roommates:roommate[];


//twilio setup 
const TWILIO_ACCOUNT_SID = '1234a'
const TWILIO_AUTH_TOKEN = '1234a'
const TWILIO_NUMBER = '1234567891'

var twclient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

function sendMessage(message: string, phoneNumber: string) {
    twclient.messages.create({
        to: phoneNumber,
        from: TWILIO_NUMBER,
        body: message
    })
}


// roommate control
exports.addRoommate = functions.https.onCall((data:roommate,context) =>{
    roommates.push(data)
})

exports.removeRoommate = functions.https.onCall((data: string) => {
    var deadroomy: number = roommates.findIndex((temp_roomy) => temp_roomy.name == data)
    roommates.splice(deadroomy,1)
})



