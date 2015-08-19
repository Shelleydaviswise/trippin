define(function(require){
  var firebase = require("firebase");
    var myFirebaseRef = new Firebase("https://nss-shelley-trippin.firebaseio.com/");

  // Listen for when anything changes on the "trips" key
  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    console.log("trips", trips);
  });

});