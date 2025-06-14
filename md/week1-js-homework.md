# JavaScript week1 homework

멋쟁이 사자처럼 프론트엔드 부트캠프 14기 백창엽의 1주차 과제입니다.

## 목차

 - [변수, 상수 작성 과제](#변수-상수-작성-과제)
    -  사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.
    - "절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.
    - "로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.
    - "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.
    - "상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.
    - 웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.
    - 사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.
    - "현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.
    - "회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.
    - "버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.

 - [함수 작성 과제](#함수-작성-과제)
    - 인사말 메시지
    - 원가 계산
    - 주류 판매 가능 여부
    - 할인가 계산
    - 등급 판단

---

## 변수, 상수 작성 과제

### 1. 사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.


```js
let userName = '백창엽'
```
### 2. "절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.


```js
const absoluteZero = -273.15
```
### 3. "로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.


```js
let isLoggedIn = true
```
### 4. "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.


```js
let userAge = 32
```
### 5. "상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.


```js
let  productPrice = 59_000
```
### 6. 웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.


```js
const  = pageBackgroundColor = #f32412
```
### 7. 사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.


```js
let commentCount = 12
```
### 8. "현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.


```js
let currentPageNumber = 3
```
### 9. "회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.


```js
let membershipLevel = 'VIP'
```
### 10. "버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.


```js
let isButtonClicked = false
```


---

## 함수 작성 과제

### 1. 인사말 메시지

```js
function greetUser(username) {
  return `안녕하세요! ${username}님. 좋은 하루되세요!`;
}
```
### 2. 원가 계산

```js
const calculateOriginalPrice = function(priceWithTax) {
  return priceWithTax / 1.033;
};
```
### 3. 주류 판매 가능 여부

```js
const canSellAlcohol = (registrationCard) => {
  return registrationCard.age >= 19
}
```
### 4. 할인가 계산

```js
const getDiscountedPrice = (originalPrice, discountPercent) => {
  return originalPrice * (1 - discountPercent / 100);
};
```
### 5. 등급 판단

```js
const getGradeInfo = (score) => {
  let grade, description;

  if (score >= 90 && score <= 100) {
    grade = 'A';
    description = '매우 우수'; 
  } else if (score >= 80 && score <= 89) {
    grade = 'B';
    description = '우수';
  } else if (score >= 70 && score <= 79) {
    grade = 'C';
    description = '보통';
  } else if (score >= 60 && score <= 69) {
    grade = 'D';
    description = '미달, 통과 기준 근접';
  } else if (score >= 0 && score <= 59) {
    grade = 'F';
    description = '낙제';
  } else {
    // 점수가 0 미만 또는 100 초과일 경우 (예외 처리)
    grade = 'Invalid';
    description = '유효하지 않은 점수입니다.';
  }

  return {
    score,
    grade,
    description
  };
};
```


## 회고

자바스크립트를 처음 접하면서 확실히 낯선 느낌이 많이 들었더 한 주였습니다. 배웠던 내용들을 반복하면서 익히고 사용해보면서 적응이 필요하다는 것을 느꼈습니다.
아직 미흡한 부분이 많지만 채워나갈 수 있도록 꾸준히 학습할 계획입니다.

이번 한 주도 고생하셨습니다.