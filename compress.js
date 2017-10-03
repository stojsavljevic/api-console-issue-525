const builder = require('api-console-builder');

builder({
	//src: 'bower_components/api-console/', //custom build 
	//dest: 'build',
	mainFile: './index.html',
	verbose: true,
	useJson: true
})
.then(() => {
	console.log('Build complete');
	// run polymer serve build/ --open 
})
.catch((cause) => console.log('Build error', cause.message));