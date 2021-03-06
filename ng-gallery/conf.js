// conf.js

var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {

	directConnect: true,
	//default framework is jasmine
	framework : 'jasmine',

	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
		'spec.js',
		'viewer-spec.js'
	],
	// multiCapabilities : [{
	// 	browserName : 'firefox'
	// },
	// {
	// 	browserName : 'chrome'
	// }
	// ]

	capabilities : {
		'browserName' : 'chrome',
		'chromeOptions': {
			'perfLoggingPrefs': {
			    'enableNetwork': true,
			    'enablePage': false,
			    'enableTimeline': false
			}
		},
		loggingPrefs: {
			performance: 'ALL',
			browser: 'ALL'
		}
	},

	getPageTimeout:  100000, //100s , timeout_in_millis
	allScriptsTimeout: 100000,  //timeout_in_millis
	jasmineNodeOpts: {
		defaultTimeoutInterval: 100000  //timeout_in_millis
	},
	
	

	onPrepare: function() {

			//http://www.blaiseliu.com/protractor-error-element-is-not-clickable-at-point-xx-xx/
			//enlarge the browser window to advoid unclickable 
			browser.manage().window().setSize(1600, 1000);

      // Add a screenshot reporter and store screenshots to `/tmp/screnshots`: 
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: '/tmp/screenshots'
      }));
   	}

}