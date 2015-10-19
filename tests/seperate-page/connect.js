module.exports = new(function() {
  var firstClient = process.env.__NIGHTWATCH_ENV_KEY == 'chrome_1';
  var testCases = this;

  testCases['opening the browser and navigating to the url',process.env.__NIGHTWATCH_ENV_KEY] = function(client) {
    client
      .url('https://playrtc.github.io/PlayRTC-Javascript-Code-Samples/basic/mediastream-video.html')
      .waitForElementVisible('body', 1000);
  };

  if (firstClient) {
    testCases['wait for clients to become connected 1'] = function(client) {
      client
        .waitForElementVisible('#callerLocalVideo', 1500)
        .click('#createChannel')
        .pause(5000)
        .waitForClientConnected('#callerLocalVideo', 5000);
    };

    testCases['wait for clients to become connected 2'] = function(client) {
      client
        .getValue('#createChannelId', function(result) {
          client.setValue('#connectChannelId', result.value);
        })
        .waitForElementVisible('#callerRemoteVideo', 1500)
        .click('#connectChannel')
        .pause(5000)
        .waitForClientConnected('#callerRemoteVideo', 10000);
    };
  } else {
    testCases.suspend = function(client) {
      client.pause(10000);
    };
  }

  testCases.after = function(client) {
    client.end();
  };

})();
