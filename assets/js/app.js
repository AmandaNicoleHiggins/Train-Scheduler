
// firebase code
const firebaseConfig = {
    apiKey: "AIzaSyAJTS4cs33sqS8A87N_CqKZV4nD5RDFeZg",
    authDomain: "my-awesome-project-55813.firebaseapp.com",
    databaseURL: "https://my-awesome-project-55813.firebaseio.com",
    projectId: "my-awesome-project-55813",
    storageBucket: "my-awesome-project-55813.appspot.com",
    messagingSenderId: "186919523450",
    appId: "1:186919523450:web:0cdf3260d19d65fbad97c3"
  };
  firebaseConfig.initializeApp(config);

  // database reference
  var database = firebase.database();

  // Click
  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Push
    // creates object for holding data
    var newTrain = {
        trainName: trainName,
        desitnation: desitnation,
        firstTime: firstTime,
        frequency: frequency,
    };
    // adds to database
    database.ref().push(newTrain);
});

