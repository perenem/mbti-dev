// data.js 가져오기 -- 배열로
import {questions} from './data.js'


// question.html 에 있는 각 태그 위치를 변수로 정의
const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')
// DOM 알아보기 document -> html에서 최상위
// 선택버튼에 EventListener를 달아 놓는다. function() 콜백함수(뒤에있는함수)


//mbti 타입을 저장하는 변수
let mbti = ""


choice1El.addEventListener('click', function(){
  nextQuestion(0)

})

choice2El.addEventListener('click', function(){
  nextQuestion(1)

})


let currentNumber = 0


function renderQuestion(){
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
}


function nextQuestion(choiceNumber){
  const question = questions[currentNumber]

  if(currentNumber === questions.length-1){
    //결과 페이지 보이기
    showResultPage()
    return
  }
  // 해당 mbti의 타입을 읽어와야 한다.
  mbti = mbti + question.choices[choiceNumber].value
  console.log("mbti = " + mbti)

  currentNumber = currentNumber + 1
  progressValueEl.style.width = (currentNumber+1) * 10 + '%'
  renderQuestion()
}

function showResultPage(){
  //http://127.0.0.1:5500/question.html 을--------/result.html?mbti=istj 의 형식으로 보내고 싶다
  //querystring 이라고 함 -3-
  location.href='./result.html?mbti=' + mbti
}


renderQuestion()