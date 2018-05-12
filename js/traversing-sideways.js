$('button').click(function() {
    $(this).next().slideToggle('slow') // p is the next sibling so no need to even call it by tag name, just use .next()
});