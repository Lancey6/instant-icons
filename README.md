# Instant Icons.js
Tired of having to write out long span tags to add Glyphicons to your page? Is Font Awesome not awesome enough?

Instant Icons is a JavaScript library that allows you to cut out all the chaff of adding the web's most popular icon fonts to your HTML.

## Usage
Add icons.js to your HTML

```
<head>
    ...
    <script src="/instant-icons/icons.js"></script>
    ...
</head>
```

Instant icons will do the rest of the work!

 * Font-Awesome: `<fa cloud></fa> -> <i class="fa fa-cloud"></i>`
 * Glyphicons: `<gi heart></gi> -> <span class="glyphicon glyphicon-heart"></span>`

For additional classes, just add them as other attributes on the tag: `<fa search fa-2x></fa>`

### Don't Run on Load
If you don't want instant icons to immediately run when loaded, set `window.ii_wait = true`. For example,

```
<script>window.ii_wait = true;</script>
<script src="/instant-icons/icons.js"></script>
```

You can call instant icons manually by using the `window.instantIcons()` function.
