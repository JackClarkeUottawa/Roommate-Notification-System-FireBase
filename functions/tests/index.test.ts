const testing = require("firebase-functions-test")(
  {
    databaseURL: "https://roommatechoretracker.firebaseio.com",
    storageBucket: "roommatechoretracker.appspot.com",
    projectId: "roommatechoretracker",
  },
  "../privateKeys/influential-bit-254122-e7221e2058d3.json"
);

const myfunctions = require("../src/index");
var assert = require("assert");
