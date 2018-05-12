$(document).ready(function(){
 // put your code here
 
 // Hover for small buttons:
 $('.theButton').mouseenter(function() {
     $(this).addClass('makeBlack');
 });
 
 $('.theButton').mouseleave(function() {
     $(this).removeClass('makeBlack');
 });
 
 // Hover for reset button
 $('.superButton').mouseenter(function() {
     $(this).addClass('makeBlack');
 });
 
 $('.superButton').mouseleave(function() {
     $(this).removeClass('makeBlack');
 });
 
 // Hide individual button
 $('.theButton').first().click(function() {
     $(this).fadeOut('slow');
 });
 
 // Hide all but reset buttons
 $('.theButton').first().parent().siblings().first().children('.theButton').click(function() {
     $('.theButton').fadeOut('slow');
 });
 
 // Fade siblings
 $('.theButton').first().parent().siblings().first().next().children('.theButton').click(function() {
     var siblings = $('.theButton').siblings().prevObject;
     for(i=0; i<siblings.length; i++) {
         if($(siblings[i]).css('display') != 'none') {
             $(siblings[i]).fadeTo('slow', 0.10);
         } 
     }
 });
 
 // Reset button
 $('.superButton').click(function() {
     $('.theButton').fadeIn('slow');
     $('.theButton').fadeTo('slow', 1.0);
 });
});