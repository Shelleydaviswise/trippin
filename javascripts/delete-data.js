// define (function(require){
//     // Dependencies
//     var $ = require('jquery');
   
//     var rootRef = new Firebase("https://nss-shelley-trippin.firebaseio.com/");

//     // delete record when del button is clicked
//       $('#delWishlist').on('click', 'button' function() {
//         var $rec = $(this).closest('[data-id]');
//         var id = $rec.attr('data-id') || null;
//         if( id ) {
//            // remove any nested children
//            $rec.find('[data-id]').each(function() {
//               rootRef.child($(this).attr('data-id')).remove(); 
//            });
           
//            // remove the record
//            rootRef.child(id).remove();
//         }
//         return false;
//       }
//     );
//   }
// );

