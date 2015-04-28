# PlayRTC-Desktop-E2E-Test

아래를 참고하여 PlayRTC 데스크탑 환경에서의 End to End 테스트 실행기를 작성

- [Testing WebRTC apps with Nightwatch](http://nightwatchjs.org/blog/testing-webrtc-apps-with-nightwatch/) 참고
- [Nightwatch WebRTC Demo](https://github.com/beatfactor/nightwatch-webrtcdemo)
- [Nightwatch.js - Daliworks Inc Blog](http://techblog.daliworks.net/Nightwatchjs/)

## 환경
데스크톱 크롬 브라우저

- 파이어폭스의 경우 크롬의 'use-fake-device-for-media-stream', 'use-fake-ui-for-media-stream'와 같은 옵션을 제공하지 않아 현재로는 자동화된 테스트는 어려움

## 테스트 준비

- [Node.js](http://nodejs.org) 설치

- JDK 설치
  - [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)버전 `6`이상이 설치되어 있고 Java VM, Java JDK의 경로가 설정 되어 있어야함

- [Selenium](http://seleniumhq.org/) 설치
  - [Selenium 저장소](http://selenium-release.storage.googleapis.com/index.html)에서 `selenium-server-standalone-x.x.x.jar`를 다운로드 받아 `bin` 폴더에 넣고 `nightwatch.json`에서 Selenium 파일명 지정

- [브라우저 드라이버](http://www.seleniumhq.org/download/) 설치
  - Selenium 서버와 브라우저의 통신을 위한 [The WebDriver Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol)설치 필요
  - [Chrome Driver 저장소](http://chromedriver.storage.googleapis.com/index.html)에서 운영체제에 맞는 `chromedriver` 다운로드 받고 `bin` 폴더에 넣기


## 테스트 수행

- 저장소 로컬머신으로 복제
```sh
$ git clone https://github.com/playrtc/playrtc-desktop-e2e-test
$ cd playrtc-desktop-e2e-test
$ npm install
```

- 2개의 크롬 피어를 통해 테스트
```sh
$ ./bin/nightwatch.js --env chrome,chrome
```

```dos
c:\> node ./bin/nightwatch.js --env chrome,chrome
```

COPYRIGHT (c) 2015 SK TELECOM CO. LTD. ALL RIGHTS RESERVED.
