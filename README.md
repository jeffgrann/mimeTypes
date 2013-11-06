
mimeTypes v1.0
==============

mimeTypes is a unified Javascript RequireJS/CommonJS module for the browser or server (SSJS) which
determines a file's MIME type from its name and/or extension.

The file extension to MIME type correspondence was derived from [stdicon.com/mimetypes]
(http://www.stdicon.com/mimetypes).

Contents
--------
* [Dependencies](#DEPENDENCIES)
* [Script Files](#SCRIPT_FILES)
* [Module Functions](#MODULE_FUNCTIONS)
    * [lookup (fileName)](#LOOKUP)
    * [setDefaultMimeType (mimeType)](#SETDEFAULTMIMETYPE)
* [Testing](#TESTING)
* [Contributions](#CONTRIBUTIONS)
* [License](#LICENSE)


<a id="DEPENDENCIES"></a>
Dependencies
------------

* [RequireJS](http://requirejs.org) on the client (browser) side.
* [Wakanda](http://www.wakanda.org) v6+.

<a id="SCRIPT_FILES"></a>
Script Files
------------

* mimeTypes.js - Fully commented script. Update to contribute.
* mimeTypes.min.js - Minimized script. For normal use.
* mimeTypes.no-md.js - Commented script without markdown comments. Use for debugging.

<a id="MODULE_FUNCTIONS"></a>
Module Functions
----------------

<a id="LOOKUP"></a>
### lookup (fileName)

Returns the MIME type string for the `fileName`. If the MIME type cannot be determined from
`fileName`, an exception is raised unless a default MIME type has been provided by first calling
the **setDefaultMimeType()** function. 

Examples:

```javascript
var mimeTypes = require('mimeTypes');

theMimeType = mimeTypes.lookup('test.jpg'); // 'image/jpeg'
```
<a id="SETDEFAULTMIMETYPE"></a>
### setDefaultMimeType (mimeType)

Sets the `mimeType` to be returned if this module cannot determine the MIME type from a given file
name/extension. 

##### Arguments

* `mimeType` - The MIME type to return as a default if this module cannot determine a MIME type for
a given file name/extension. If not set using this function, the lookup function throws an 
exception when it cannot find a MIME type. 

Examples:

```javascript
var mimeTypes = require('mimeTypes');

mimeTypes.setDefaultMimeType('text/plain');
```

<a id="TESTING"></a>
Testing
-------
mimeTypes uses Wakanda's implementation of [YUI Test](http://yuilibrary.com/yui/docs/test/). 

##### To test the client side:

1. In Wakanda Studio, open WebFolder/index/index.html.
2. Click Run. The results should appear in your browser.

##### To test the server side:

1. In Wakanda Studio, open scripts/test.js.
2. Click Run File. The results should appear in your browser.

<a id="CONTRIBUTIONS"></a>
Contributions
-------------
If you contribute to this library, just modify `WebFolder/scripts/mimeTypes.js` and 
`WebFolder/scripts/testCases.js` or `Modules/mimeTypes.js` and `Modules/testCases.js` and send a
pull request. Please remember to update the markdown if the public interface changes. 

<a id="LICENSE"></a>
License
-------
Licensed under MIT.

Copyright (C) 2013 [Jeff Grann](https://github.com/jeffgrann) <jeff@successware.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions: 

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
