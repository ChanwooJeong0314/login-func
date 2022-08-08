# APIS
## User
### interface
#### User
- name : string
- password : string
### methods
###### GET
- ("/") 모든 User를 반환합니다.
- ("/:name") req.params에서 나온 name 데이터를 기준으로 User 한 명을 반환합니다.
- ("/:name/:password") req.params에서 나온 name , password 데이터를 기준으로 클라이언트에 접속 중인 유저의 로그인 가능여부를 bool 타입의 값으로 받습니다. => 로그인
###### POST
- ("/") req.body에서 나온 User 데이터를 기준으로 User 한 명을 추가합니다 => 회원가입
###### DELETE
- ("/:name/:password") req.params 나온 name , password 데이터를 기준으로 User 한 명을 제거합니다 => 회원 탈퇴

