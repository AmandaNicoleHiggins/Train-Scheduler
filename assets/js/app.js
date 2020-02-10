
// firebase code
var firebaseConfig = {
    apiKey: "AIzaSyAJTS4cs33sqS8A87N_CqKZV4nD5RDFeZg",
    authDomain: "my-awesome-project-55813.firebaseapp.com",
    databaseURL: "https://my-awesome-project-55813.firebaseio.com",
    projectId: "my-awesome-project-55813",
    storageBucket: "my-awesome-project-55813.appspot.com",
    messagingSenderId: "186919523450",
    appId: "1:186919523450:web:0cdf3260d19d65fbad97c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // database reference
  var database = firebase.database();

  // Click
  $("#submit").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#trainName-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTime = $("#firstTime-input").val().trim();
    var frequency = $("#frequency-input").val().trim();

    // Push
    // creates object for holding data
    var newTrain = {
        trainName: trainName,
        destination: destination,
        firstTime: firstTime,
        frequency: frequency,
    };
    // adds to database
    database.ref().push(newTrain);
});

database.ref().on("child_added", function(childSnapshot) {
    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination;
    var firstTime = childSnapshot.val().firstTime;
    var frequency = childSnapshot.val().frequency;

    // console.log(trainName);
    // console.log(destination);
    // console.log(firstTime);
    // console.log(frequency);

    //first time
    var firstTimeConvert = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConvert)

    //current time
    var currentTime = moment();

    //time difference
    var timeDiff = moment().diff(moment(firstTimeConvert), "minutes");

    //remainder
    var remainder = timeDiff % frequency;

    //minutes til train
    var minAway = frequency - remainder;

    //next traun
    var nextArrive = moment().add(minAway, "minutes");
    var nextTrain = nextArrive.format("hh:mm");

    //add to html
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(nextTrain),
        $("<td>").text(minAway)
    );

    $("#schedule > tbody").append(newRow);
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
