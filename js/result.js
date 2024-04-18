import { results, mbtis } from "./data.js";
//http://127.0.0.1:5050/results.html?mbti=istj 가 온다
//mbti=istj 이것을 뽑아 내야 한다.
//쿼리 스트링
const mbti = new URLSearchParams(location.search).get("mbti")
//console.log('mbti=' + mbti)

const result = results[mbtis[mbti]]
//console.log(result)

const titleEl = document.querySelector(".page-title")
const characterEl = document.querySelector(".character")
const boxEls = document.querySelectorAll(".box")
const jobsEls = document.querySelectorAll(".job")
const lectureEl = document.querySelector(".lecture")
const lectureImgEl = document.querySelector(".lecture img")

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function(boxEl, index){
  boxEl.innerHTML = result.results[index]
})
jobsEls.forEach(function(job, index){
 job.innerHTML=result.jobs[index]
})

//이미지 유알엘
lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg