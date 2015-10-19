module.exports = {
  'go basic p2p page' : function (browser) {
    browser
      .url('https://playrtc.github.io/PlayRTC-Javascript-Code-Samples/datachannel/datachannel-text.html')
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
      .waitForClientConnected('#callerRemoteVideo', 10000)
  },

  'write english message' : function (browser) {
    browser
      .setValue('#sendMessage', 'This is message');
  },

  'send english message' : function (browser) {
    browser
      .click('#send')
      .pause(1000)
      .assert.valueContains('#recevedMessage', 'This is message');
  },

  'write cjk message' : function (browser) {
    browser
      .setValue('#sendMessage', '한글, わご, 中文');
  },

  'send cjk message' : function (browser) {
    browser
      .click('#send')
      .pause(1000)
      .assert.valueContains('#recevedMessage', '한글, わご, 中文');
  },

  after : function (browser) {
    browser
      .end();
  }
};
