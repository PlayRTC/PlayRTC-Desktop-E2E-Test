module.exports = new (function() {
  var firstClient = process.env.__NIGHTWATCH_ENV_KEY == 'chrome_1';
  var testCases = this;

  testCases['opening the browser and navigating to the url'] = function (client) {
    client
      .url('http://playrtc.github.io/PlayRTC-Javascript-Code-Samples/basis/p2p.html')
      .waitForElementVisible('body', 1000);
  };

  if (firstClient) {
    testCases['wait for clients to become connected'] = function(client) {
      client
        .waitForElementVisible('#callerLocalVideo', 1500)
        .click('#createChannel')
        .waitForClientConnected('#callerLocalVideo', 5000)
        .waitForClientConnected('#callerRemoteVideo', 8000,
          'Remote video stream (%s) was connected in %s ms.');
    };

    testCases['wait for peer to disconnect'] = function (client) {
      client
        .pause(1000)
        .waitForElementNotPresent('#remotes video', 10000);
    };
  } else {
    testCases.suspend = function (client) {
      client.pause(10000);
    };
  }

  testCases.after = function(client) {
    client.end();
  };

})();
