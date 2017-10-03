## Issue with api-console: https://github.com/mulesoft/api-console/issues/525


When the project is built with: `npm run build` it will dowload required resources.
I'm using custom `index.html` to be able to parse request and get URL of raml file to display.

When `index.html` is placed to a web server together with `bower_components` folder it will be able to display `api-console` with web view for raml whose relative URL is sent as a request parameter (e.g. http://localhost/api-console/index.html?raml=/api-console/api.raml).

The problem is size of such distribution.

So I tried to compress the size according to advice in https://github.com/mulesoft/api-console/issues/523.

I added `compress` script that can be run with `npm run compress` but I'm not able to get what I want.