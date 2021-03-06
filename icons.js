// icons.js
// Last Modified: December 5, 2015 by David Reeve

// enclosed in an IIFE to prevent polluting the window
(function() {

    // FUNCTION: shouldRunImmediately
    // determines whether the user has overridden the default behavior of immediately running when the script is
    // loaded.
    //
    // returns: true if window.ii_wait has not been set
    function shouldRunImmediately() {

        return window.ii_wait === undefined;

    }

    
    // HASH: iconTags
    // pseudo-pattern matching that will call the appropriate function on each tag name
    var iconTags = {

        "fa" : replaceFontAwesome,
        "gi" : replaceGlyphicon,

    }


    // FUNCTION: getAllIconTagNames
    // gets the tag names used by iconTags in a polyfill way
    // 
    // returns: a list of all icon tag names
    function getAllIconTagNames() {

        var tagnames = [];
        for ( var tag in iconTags ) {
            tagnames.push( tag );
        }
        return tagnames;

    }
    

    // FUNCTION: replaceAllIconTags
    // replaces the "icon tags" with their actual representations by iterating over them and passing them through
    // the replacement functions
    function replaceAllIconTags() {

        getAllIconTagNames().forEach( function( tag ) {

            var els = document.getElementsByTagName( tag );

            [].slice.call( els ).forEach( function( el ) {
                iconTags[tag]( el );
            } );

        } );

    }


    // FUNCTION: replaceFontAwesome
    // replaces a <fa> tag with its Font Awesome representation as an <i> tag
    //
    // param: element - the DOM element to replace
    function replaceFontAwesome( element ) {

        var attrs = element.attributes;
        var newel = '<i class="fa fa-';
        
        // add all the tag attributes as classes
        for ( var i=attrs.length-1; i >= 0; --i ) {
            newel += attrs[i].name + ' ';
        }
        
        newel += '"></i>';

        element.outerHTML = newel;

    }


    // FUNCTION: replaceGlyphicon
    // replaces a <glyphicon> tag with its Glyphicon representation as a <span> tag
    //
    // param: element - the DOM element to replace
    function replaceGlyphicon( element ) {

        var attrs = element.attributes;
        var newel = '<span class="glyphicon glyphicon-';

        // add all the tag attributes as classes
        for ( var i=attrs.length-1; i >= 0; --i ) {
            newel += attrs[i].name + ' ';
        }

        newel += '"></span>';

        element.outerHTML = newel;

    }


    // add our event listener and put the instant icons function on the window
    window.addEventListener( 'load', function() {
        if ( shouldRunImmediately() ) replaceAllIconTags();
    } );

    window.instantIcons = function() { replaceAllIconTags() };
})()
