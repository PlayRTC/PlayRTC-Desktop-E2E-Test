module.exports = {
  'go basic p2p page' : function (browser) {
    browser
      .url('http://playrtc.github.io/PlayRTC-Javascript-Code-Samples/basic/p2p.html')
      .waitForElementVisible('body', 1000);
  },

  'create channel and join' : function (browser) {
    browser
      .waitForElementVisible('#callerLocalVideo', 1500)
      .click('#createChannel')
      .pause(5000)
      .waitForClientConnected('#callerLocalVideo', 5000);
  },

  'join channel' : function (browser) {
    browser
      .getValue('#createChannelId', function(result) {
        browser.setValue('#connectChannelId', result.value);
      })
      .waitForElementVisible('#callerRemoteVideo', 1500)
      .click('#connectChannel')
      .pause(5000)
      .waitForClientConnected('#callerRemoteVideo', 10000)
      .end();
  }
};
