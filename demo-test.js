describe('mesh demo test', function() {
	const fs = require('fs');

	function _writeScreenShot(data, filename) {
		var stream = fs.createWriteStream(filename);
		stream.write(new Buffer(data, 'base64'));
		stream.end();
	}

	function _filename() {
		const directory = './screenshots/';
		const files = fs.readdirSync(directory);
		return directory + (files.length + 1) + '.png';
	}

	function _takeScreenshot(png) {
		_writeScreenShot(png,  _filename());
	}

	it('should be list the demo', function() {
		browser.get('https://frontend:7070');
		browser.takeScreenshot().then(_takeScreenshot);
		//
		// element(by.model('todoList.todoText')).sendKeys('write first protractor test');
		// element(by.css('[value="add"]')).click();
		//
		// var todoList = element.all(by.repeater('todo in todoList.todos'));
		// expect(todoList.count()).toEqual(3);
		// expect(todoList.get(2).getText()).toEqual('write first protractor test');
		//
		// // You wrote your first test, cross it off the list
		// todoList.get(2).element(by.css('input')).click();
		// var completedAmount = element.all(by.css('.done-true'));
		// expect(completedAmount.count()).toEqual(2);
	});
});
