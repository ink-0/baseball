# 야구게임 Readme

# ⚾️ 샐탐텀 야구게임 ⚾️

![화면 기록 2021-05-07 오후 4 47 20 mov](https://user-images.githubusercontent.com/71919983/117416071-f86d6f80-af53-11eb-950c-53f5d0d0d1c7.gif)

<br>

### ✨ [팀 Wiki](https://github.com/min27604/baseball/wiki)
### ✨ [팀 Notion](https://www.notion.so/904c94c71b3340608475dcc03fada27d)
### ✨ [협업 룰](https://github.com/min27604/baseball/wiki/%ED%98%91%EC%97%85-%EB%A3%B0)
### ✨ [API](https://github.com/min27604/baseball/wiki/API-%EB%AC%B8%EC%84%9C-&-Data-Set)
### ✨ [프론트엔드 백로그](https://www.notion.so/2301952f168f40d397b68f042f4b9061?v=5306b672e5ce47ce8005f960b612bf36)
### ✨ [활동기록](https://github.com/min27604/baseball/wiki/%ED%99%9C%EB%8F%99%EA%B8%B0%EB%A1%9D)

<br>

## 프로젝트 소개

### 야구알못 3인이 만든 멋진 온라인 야구게임 🌷🌹⚾️🧢🏃🏻‍♂️

<br>

## 배포 링크

## [👉 바로가기](http://13.209.109.186/)

<br>

## 팀 멤버

### [BE] 👩🏻‍💻 [Sally](https://github.com/min27604)
 - 잘하고싶은 뚝딱이..
### [FE] 👩🏻‍💻 [Tami]()
 - CSS 를 내려놓고 싶은 프론트엔더 Tami
### [FE] 🧑🏻‍💻 [Autumn](https://github.com/dyongdi)
 - 상태에 파묻힘 😵

<br>

## 기능 소개 
### 게임선택
![화면 기록 2021-05-14 오후 4 36 56 mov](https://user-images.githubusercontent.com/71919983/118237841-ad62d780-b4d2-11eb-9bf5-9d80a2c43b48.gif)
- 게임 첫화면에 게임목록 나타남
- 사용자가 나타나 화면 게임 선택하면 게임화면으로 넘어감  
### 게임 진행
![화면 기록 2021-05-14 오후 4 35 04 mov](https://user-images.githubusercontent.com/71919983/118237874-b8b60300-b4d2-11eb-909a-c4a7b8ea3421.gif)

- 타자가 공을 던지면 확률에 따라 스트라이크, 볼 안타가 나옴
- 타자의 기록은 우측 Log에 쌓임
- 3아웃이 되는 경우 공격, 수비 교대
- 홈팀, 원정팀이 각각 3아웃씩 되면 inning 교체



<br>

## Prerequisite

```
"@testing-library/jest-dom": "^5.11.4",
"@testing-library/react": "^11.1.0",
"@testing-library/user-event": "^12.1.10",
"axios": "^0.21.1",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^5.2.0",
"react-scripts": "4.0.3",
"styled-components": "^5.3.0",
"web-vitals": "^1.0.1"
```

<br>

## Files

![](https://i.imgur.com/pTzntmv.png)

<br>

## 프로젝트 실행하기

1. 저장소 클론
```
git clone https://github.com/min27604/baseball
```
2. FE/react-baseball로 이동

```
cd FE/react-baseball
```
3. Prerequisite 설치

```
npm i
```
4. 시작하기

```
yarn start
```

<br>

## 프로젝트 진행하며 어려웠던 점
### 📌 React 의 상태관리
![image](https://user-images.githubusercontent.com/71919983/118239167-6249c400-b4d4-11eb-919f-fa72e426de87.png)

- ContextAPI 를 이용하여 state를 global로 관리하면 상태관리가 훨씬 수월해질 줄 알았지만,
게임 play 시 타자가 PITCH 할때마다의 변경사항을 바로 조건에 적용하는 것이 어려움

- 관리해야할 상태가 너무 많아지다보니 체계적으로 (파일로 분리하는 등) 정리를 할 필요성이 느껴졌음

<br>

### 📌 설계

전반적으로 야구 룰에 대해 알지 못해서 요구사항 분석 후 [요구사항 명세서](https://github.com/min27604/baseball/issues/3#issuecomment-832418508)를 만들고 개체를 추출했습니다. 우선 개체를 최소한으로 잡고 코드 구현중 새로운 개체가 필요해보이면 다시 요구사항 분석으로 돌아가 명세서를 수정하고 개체를 추가하는 식으로 진행했지만 아쉬운 부분이 많습니다.

설계에서 우선적으로 헤메다보니 구성조차도 구현에 영향을 많이 받았는데 서비스와 컨트롤러 분리가 어려웠고 코드 리뷰를 받은 후 방향을 잡을 수 있었습니다.

<br>

## 그럼에도 셀탐텀의 자랑할 거리 
### 📌개발 전 충분한 회의를 통한 협업 룰 생성
#### component 구성
[Component Tree Diagram 바로가기](https://app.diagrams.net/#G13ONpyuQIMVfEy5Bdg6ZQ3liZ7khHlqO4)

<br>

![baseballdrawio](https://user-images.githubusercontent.com/71919983/118239666-0a5f8d00-b4d5-11eb-931a-30cbe3c3c69f.png)

<br>

#### 게임 시나리오 작성
[시나리오 바로가기](https://www.notion.so/bce2d09cc1b84edc864d1fc58438445b)

![image](https://user-images.githubusercontent.com/71919983/118239876-4692ed80-b4d5-11eb-9314-92e2bb4efcba.png)

#### 그 외 실시간 상황 체크

<img width="686" alt="스크린샷 2021-05-14 오후 5 00 07" src="https://user-images.githubusercontent.com/71919983/118240452-fec09600-b4d5-11eb-9d6e-a0bfb81e4127.png">

- 실시간으로 상황체크하며 프로젝트 기능 상황 관리

