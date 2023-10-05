///// Variáveis
const btnOpen = document.querySelector("#btnOpen")
const btnAgain = document.querySelector("#btnAgain")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
const phrases = [
  "O sucesso está no horizonte. Continue seguindo em frente.",
  "Sua criatividade é a chave para o futuro.",
  "A sorte favorece os corajosos.",
  "Grandes aventuras esperam por você.",
  "O amor está ao seu redor, abra os olhos.",
  "Aprenda com o passado e abrace o futuro.",
  "Sorria, a vida é um presente precioso.",
  "A simplicidade é a verdadeira elegância.",
  "A perseverança leva à realização dos sonhos.",
  "Aja com gentileza e colha alegria.",
  "A vingança nunca é plena, mata a alma e a envenena.",
]

///// Eventos
btnOpen.addEventListener("click", openWithClick)
btnAgain.addEventListener("click", resetWithClick)

/////Funções
function openWithClick() {
  toogleScreen()
  randomPhrase()
}

function resetWithClick() {
  toogleScreen()
  randomNumber = Math.round(Math.random() * 10)
}

function toogleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function randomPhrase() {
  if (randomNumber >= 0) {
    screen2.querySelector("p").innerText = phrases[randomNumber]
  }
}
