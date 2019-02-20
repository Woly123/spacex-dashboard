const spaceshipBounds = document.querySelector(".spaceship-container");
const spaceship = document.querySelector(".spaceship");
const redPlanet = document.getElementById('planet-1');
const overlapThreshold = "50%"; 
console.log(redPlanet);

const randomNumber = size => {
  return Math.floor(Math.random() * size)
}

const randomChoice = choices => {
  let index = randomNumber(choices.length)
  return choices[index]
}

const flickerStar = star => {
  star.classList.add('flicker')
  setTimeout(() => {
    star.classList.remove('flicker')
  }, 1000)
}

const stars = [...document.querySelectorAll('.star')]

setInterval(() => {
  let star = randomChoice(stars)
  flickerStar(star)
}, 200)

const astroid = document.getElementById("astroid");

const getRandomPercentage = () => Math.random() * 60 + 70 + "%";
astroid.style.transition = "all 12s ease-in";


let shouldInvert = false;
let astroidTop, astroidLeft;
const randomizeAstroid = () => {
  astroidTop = getRandomPercentage();
  astroidLeft = getRandomPercentage();
  if(shouldInvert) {
    astroidTop = ""-" + astroidTop";
    astroidLeft = "-" + astroidLeft;
  } 
  astroid.style.left = astroidLeft;
  astroid.style.top = astroidTop;
  shouldInvert = !shouldInvert;
}
randomizeAstroid();
setInterval(() => {
  randomizeAstroid();
}, 10000)

