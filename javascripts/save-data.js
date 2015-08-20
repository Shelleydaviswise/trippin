define (function(require){
  // Dependencies
  var $ = require('jquery');
 
  var newLocation;
  var visited = false;

  // Event handlers to determine which list 
  // the item goes on
  $("#visited").click(function(){
    visited = true;
  });

  $("#wish-list").click(function() {
    visited = false;
  });


  // Post data to Firebase
  $("#addTrip").click(function() {
    console.log("I clicked");

    newLocation = {
      location: $('#location-name').val(),
      location_type: $('#location-types').val(),
      visited: visited
    };
    console.log('newLocation', newLocation);

    $.ajax({
     url:"https://nss-shelley-trippin.firebaseio.com/trips.json",
     method: "POST",
     data: JSON.stringify(newLocation)
   })
   .done(function(newData){
     console.log("newData", newData);
   })
   .fail(function(xhr, status, error){
     console.log("error", error);

   });


    
  });
});