$(function() {
// Default tooltip settings
var offsetX = 15;
var offsetY = 15;
var TooltipOpacity = 0.9;
 
// Select all tags having a title attribute
$('[title]').mouseenter(function(e) {
 
// Get the value of the title attribute
var Tooltip = $(this).attr('title');
if(Tooltip !== '') {
// Tooltip exists. Assign it to a custom attribute
$(this).attr('customTooltip',Tooltip);
 
// Empty title attribute (to ensure that native browser tooltip is not shown)
$(this).attr('title','');
}
 
// Assign customTooltip to variable
var customTooltip = $(this).attr('customTooltip');
 
// Tooltip exists?
if(customTooltip !== '') {
// Append tooltip element to body
$("body").append('<div id="tooltip">' + customTooltip + '</div>');

// Set X and Y coordinates for Tooltip
$('#tooltip').css('left', e.pageX + offsetX );
$('#tooltip').css('top', e.pageY + offsetY );
 
// FadeIn effect for Tooltip
$('#tooltip').fadeIn('500');
$('#tooltip').fadeTo('10',TooltipOpacity);
}
 
}).mousemove(function(e) {
var X = e.pageX;
var Y = e.pageY;
var tipToBottom, tipToRight;
 
// Distance to the right
tipToRight = $(window).width() - (X + offsetX + $('#tooltip').outerWidth() + 5);
 
// Tooltip too close to the right?
if(tipToRight < offsetX) {
X = e.pageX + tipToRight;
}
 
// Distance to the bottom
tipToBottom = $(window).height() - (Y + offsetY + $('#tooltip').outerHeight() + 5);
 
// Tooltip too close to the bottom?
if(tipToBottom < offsetY) {
Y = e.pageY + tipToBottom;
}
 
// Assign tooltip position
$('#tooltip').css('left', X + offsetX );
$('#tooltip').css('top', Y + offsetY );
 
}).mouseleave(function() {
// Remove tooltip element
$("body").children('div#tooltip').remove();
});
});
