"use strict";

({define: typeof define === 'function' ? define : function (A,F) {var I = F.apply(null, A.map(require)); Object.keys(I).forEach(function(k) {exports[k] = I[k];});}}).define(

['mimeTypes'],

function (mimeTypes) {
	var publicInterface = {};
	
	publicInterface.get = function getTestCases () {
		var testCases = {
		    name: "mimeTypes Tests",
		     
		    _should: {
		        error: {
		            'test throwing an exception for an unrecognized file name': true,
		            'test throwing an exception for an unrecognized hidden file name': true,
		            'test throwing an exception for an unrecognized extension': true
		        }
		    },

			//----------------------------------------------------------------------------------------------------
			// Get MIME types from file extensions.
			//----------------------------------------------------------------------------------------------------
		    'test get MIME types from file extensions': function() {
					Y.Assert.areSame(mimeTypes.lookup('test.jpg'), 'image/jpeg', ".jpg extension should result in 'image/jpeg'");
					Y.Assert.areSame(mimeTypes.lookup('test.pdf'), 'application/pdf', ".pdf extension should result in 'application/pdf'");
					Y.Assert.areSame(mimeTypes.lookup('test.123'), 'application/vnd.lotus-1-2-3', ".123 extension should result in 'application/vnd.lotus-1-2-3'");
		        },

			//----------------------------------------------------------------------------------------------------
			// Get MIME types from file names.
			//----------------------------------------------------------------------------------------------------
			'test get MIME types from file names': function () {
					Y.Assert.areSame(mimeTypes.lookup('README'), 'text/plain', "README file name should result in 'text/plain'");
					Y.Assert.areSame(mimeTypes.lookup('manifest'), 'text/cache-manifest', "manifest file name should result in 'text/cache-manifest'");
					Y.Assert.areSame(mimeTypes.lookup('TODO'), 'text/plain', "TODO file name should result in 'text/plain'");
				},
				
			//----------------------------------------------------------------------------------------------------
			// Get MIME types from file names that start with a period.
			//----------------------------------------------------------------------------------------------------
			'test get MIME types from file names that start with a period': function () {
					Y.Assert.areSame(mimeTypes.lookup('.manifest'), 'text/cache-manifest', ".manifest file name should result in 'text/cache-manifest'");
				},
				
			//----------------------------------------------------------------------------------------------------
			// Throwing an exception for an unrecognized file name/extension.
			//----------------------------------------------------------------------------------------------------
			'test throwing an exception for an unrecognized file name': function () {
					mimeTypes.lookup('junk');
				},
				
			'test throwing an exception for an unrecognized hidden file name': function () {
					mimeTypes.lookup('.junk');
				},
				
			'test throwing an exception for an unrecognized extension': function () {
					mimeTypes.lookup('junk.zzz');
				},

			//----------------------------------------------------------------------------------------------------
			// Returning a default MIME type for an unrecognized file name/extension.
			//----------------------------------------------------------------------------------------------------
			'test returning a default MIME type for an unrecognized file name/extension': function () {
					mimeTypes.setDefaultMimeType('text/unknown');
					Y.Assert.areSame(mimeTypes.lookup('junk'), 'text/unknown', "should return default MIME type for an unrecognized file name");
					Y.Assert.areSame(mimeTypes.lookup('.junk'), 'text/unknown', "should return default MIME type for an unrecognized file name which begins with a period");
					Y.Assert.areSame(mimeTypes.lookup('junk.zzz'), 'text/unknown', "should return default MIME type for an unrecognized file extension");
				}
	    };
	    
	    return testCases;
	};
	
	return publicInterface;
});
