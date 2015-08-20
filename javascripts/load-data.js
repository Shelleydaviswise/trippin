define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");
  var $ = require("jquery");


  // console.log("templates", templates);

// This is the default view of ALL trips taken or not taken currently in FB.
  var myFirebaseRef = new Firebase("https://nss-shelley-trippin.firebaseio.com/");

  myFirebaseRef.child("location_types").on("value", function(snapshot) {
    var locationTypes = snapshot.val();
    // console.log('locationTypes', locationTypes);
    

    // Populates the location Type dropdwn menu
    var populatedTemplate = templates.locTypeTpl(locationTypes);
    // console.log(populatedTemplate);

    // Insert the template into the DOM
    $("#location-types").html(populatedTemplate);

  });


  // Listen for when anything changes on the "trips" key
  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    // console.log("trips", trips);
    // This will hold the complete DOM string of trips
    var populatedTemplate = templates.tripTpl(trips);


    // Insert the template into the DOM
    $("#list-of-trips").html(populatedTemplate);


  });

});