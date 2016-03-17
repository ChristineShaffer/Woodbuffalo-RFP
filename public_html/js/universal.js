/*
 * Provide functionality to mobile menu
 */
$(document).ready( function() {

   $(".mobile-menu a").click( function() {
       $(".mobile-menu-content").toggle();
   });

});