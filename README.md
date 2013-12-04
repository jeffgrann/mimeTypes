
mimeTypes v1.0.1
================

mimeTypes is a unified Javascript AMD/CommonJS module for the browser or server (SSJS) which
determines a file's MIME type from its name and/or extension.

The file extension to MIME type correspondence was derived from [stdicon.com/mimetypes]
(http://www.stdicon.com/mimetypes).

Contents
--------
* [Installation](#INSTALLATION)
* [Dependencies](#DEPENDENCIES)
* [Script Files](#SCRIPT_FILES)
* [Module Functions](#MODULE_FUNCTIONS)
    * [lookup (fileName)](#LOOKUP)
    * [setDefaultMimeType (mimeType)](#SETDEFAULTMIMETYPE)
* [Testing](#TESTING)
* [Contributions](#CONTRIBUTIONS)
* [License](#LICENSE)


<a id="INSTALLATION"></a>
Installation
------------
##### Client:

Simply create a folder within your Wakanda project's WebFolder named `scripts` and copy 
`mimeTypes.js` into it. Be sure that this location is recognized by your AMD vehicle (e.g.
RequireJS). 

##### Server:

Simply create a folder named `Modules` in your Wakanda project and copy `mimeTypes.js` into it. 

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

1. Copy `mimeTypesTest.waPage` into your Wakanda project's WebFolder.
2. Copy `testCases.js` into the `scripts` folder in your Wakanda project's WebFolder.
3. In Wakanda Studio, open `mimeTypesTest.waPage`.
4. Click Run File. The results should appear in your web browser.

##### To test the server side:

1. Copy `testCases.js` into your Wakanda project's `Modules` folder.
2. Copy `test.js` into your Wakanda project as a server-side script.
3. In Wakanda Studio, open `test.js`.
4. Click Run File. Doing so will create a `testResults.html` file in the same location as the
`test.js` file. The results should appear in your browser automatically. If they do not, open the
`testResults.html` file. 

<a id="CONTRIBUTIONS"></a>
Contributions
-------------
If you contribute to this library, just modify `mimeTypes.js` and `testCases.js` and send a pull
request. Please remember to update the markdown if the public interface changes. 

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
