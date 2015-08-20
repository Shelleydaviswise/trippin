define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");
  var $ = require("jquery");


  $(document).on ('click', "button('#viewWishlist')",function() {
    if(visited.val() === true){
      
    }
  });

    var myFirebaseRef = new Firebase("https://nss-shelley-trippin.firebaseio.com/");

  // Listen for when anything changes on the "trips" key
  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    console.log("trips", trips);
    // This will hold the complete DOM string of trips
    var populatedTemplate = templates.tripTpl(trips);


    // Insert the template into the DOM
    $("#list-of-trips").html(populatedTemplate);


  });

});