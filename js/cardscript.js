$(".stream-nav").on("click", function() {
    // A selector to match all cards in all streams
    var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStreamCardsSelector = "." + this.id + "-card";

    // First remove the highlight from all of the cards
    $(allStreamsCardsSelector).removeClass("card-highlight");
    // Then apply the highlight to just this stream's cards
    $(thisStreamCardsSelector).addClass("card-highlight");
});

// Challenge 1:
// Highlight all links in yellow when a paragraph is clicked

$('.card_para').click(function() {
    console.log('its working!', this);
    var links = $(this).children('a');
    $(links).css('background-color', 'yellow');
});

// Traversing Sideways Challenge 2:
// Hide all paragraphs but slideToggle them when their image is clicked

$('img').click(function() {
    // Not all images have a card_bottom div following them
    // so we must use some conditional logic:
    var nextElem = $(this).next()[0].className;
    if (nextElem == 'card_bottom'){
        $(this).next().children('p').slideToggle();
    } else {
        $(this).siblings('p').slideToggle();
    }
});