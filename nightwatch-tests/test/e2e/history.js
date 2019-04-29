var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test Harvard Art Museums': function (browser) {
    browser
      .url('https://www.harvardartmuseums.org')   // visit the url
      .waitForElementVisible('body'); // wait for the body to be rendered
    browser
      .expect.element('.home').to.be.present;
      browser.click('.icon-search', function(response) {
        this.assert.ok(browser === this);
        this.assert.ok(typeof response == 'object');
      });
    browser.end();
    }
  };