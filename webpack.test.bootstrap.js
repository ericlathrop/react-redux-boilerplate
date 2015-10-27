/**
 * This file serves as the entry point of our tests.
 *
 * The below code tells webpack to require() all the .js files in the test folder recursively.
 *
 * We disable an eslint warning because eslint is set up for ES2015, but this code is run pre-babel, so it's normal ES5 node.js/CommonJS code.
 */
var context = require.context("./test", true, /.js$/); // eslint-disable-line no-undef
context.keys().forEach(context);
