define(function(require) {
  var $ = require("jquery");
  var firebase = require('firebase');
  var selectedTripId;

  $(document).on ('click', "button[id^='add-review#']",function() {
    selectedTripId = $(this).attr('id').split('#')[1];
    $(".hidden").toggle();
  });

  $('#save-review').click(function(){
    var tripRef = new Firebase('https://nss-shelley-trippin.firebaseio.com/trips.json' + selectedTripId);
   
    var newReview = {
  
      date: Date.now(),
      text: $('.reviewEntry').val(),
      title: "Title"
    };

    tripRef.child('reviews').push(newReview); 
  });
});