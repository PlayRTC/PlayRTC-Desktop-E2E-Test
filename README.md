# PlayRTC-Desktop-E2E-Test

아래를 참고하여 PlayRTC 데스크탑 환경에서의 End to End 테스트 실행기를 작성

- [Testing WebRTC apps with Nightwatch](http://nightwatchjs.org/blog/testing-webrtc-apps-with-nightwatch/) 참고
- [Nightwatch WebRTC Demo](https://github.com/beatfactor/nightwatch-webrtcdemo)


## 테스트 수행

- [Node.js](http://nodejs.org) 설치
```sh
$ git clone https://github.com/playrtc/playrtc-desktop-e2e-test
$ cd playrtc-desktop-e2e-test
$ npm install
```

- [Selenium 저장소](http://selenium-release.storage.googleapis.com/index.html)에서 `selenium-server-standalone-x.x.x.jar`를 다운로드 받아 `bin` 폴더에 넣고 `nightwatch.json`에서 Selenium 파일명 지정

- [Chrome Driver 저장소](http://chromedriver.storage.googleapis.com/index.html)에서 `chromedriver` 다운로드 받고 `bin` 폴더에 넣기

- 2개의 크롬 피어를 통해 테스트
```sh
$ ./bin/nightwatch.js --env chrome,chrome
```

```dos
c:\> node ./bin/nightwatch.js --env chrome,chrome
```

COPYRIGHT (c) 2015 SK TELECOM CO. LTD. ALL RIGHTS RESERVED.
