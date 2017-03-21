exports.config = {
	seleniumAddress: 'http://selenium:4444/wd/hub',
	specs : [ 'demo-test.js' ],
	capabilities : {
		'browserName' : 'firefox'
	},
	jasmineNodeOpts: {
	  defaultTimeoutInterval: 25000
	},
};
