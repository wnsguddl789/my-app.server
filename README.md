## 유저 서비스 애플리케이션 연습 프로젝트

![](https://wikidocs.net/images/page/158464/1-7.png)

### 유저서비스

- 회원 가입화면을 통해 유저 정보(이메일, 이름, 패스워드)를 입력받아 신규 회원 가입 처리를 수행하고 회원 정보를 데이터베이스에 저장합니다. 유저는 가입 준비 단계에 있게 됩니다.
- 회원 가입 과정에서 입력 받은 이메일로 회원 가입 확인 이메일을 전송합니다. 유저는 이메일을 확인하고 회원 가입 인증을 요청합니다. 이메일 본문에는 회원 가입 검증을 위한 요청으로서의 링크가 포함되어 있습니다. 이 링크를 통해 회원 가입 인증 요청이 들어오면 회원 가입 준비 단계에서 승인을 완료한 상태가 됩니다. 또 이메일 인증의 응답으로 바로 액세스 토큰(JWT)을 전달하여 로그인 상태가 되도록 합니다. 이렇게 하면 사용자가 인증 후 다시 로그인 과정을 거칠 필요가 없습니다.
- 회원 가입 완료된 사용자가 이메일과 비밀번호로 로그인 요청을 보내면 이를 처리합니다. 로그인 기능은 사실 사용자 에이전트(브라우저, 모바일 앱 등)에게 액세스 토큰(JWT)를 발급하는 것입니다.
- 사용자는 자신의 정보를 조회할 수 있습니다.

#### 부가적으로 해야할일

- 환경변수 설정 : 로컬(local) 개발환경, 개발된 기능을 실제 사용자에게 배포하기 전에 테스트용 서버에 배포하는 스테이지(stage)환경, 그리고 실제 운용하는 프로덕션(production) 환경으로 구성
- 요청 유호성 검증
- 인증
- 로깅
- 헬스체크
- CQRS
- Clean Architecture
- Unit Test
