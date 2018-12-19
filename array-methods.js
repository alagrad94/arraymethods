const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

let bodyTag = document.getElementById("body");
let planetContainer = document.createElement("article");
planetContainer.setAttribute("id", "planets");
bodyTag.insertAdjacentElement("afterbegin", planetContainer);

planets.forEach(planet => {

    let planetSection = document.createElement("section");
    planetSection.setAttribute("id", planet);
    planetContainer.appendChild(planetSection);

});

const planetEl = document.getElementById("planets")

const newPlanets = planets.map(planet => planet.charAt(0).toUpperCase() + planet.slice(1));
// console.log(newPlanets);

const newPlanets2 = planets.filter(planet => {
    const containsE = (planet.includes("e"))
    return containsE
})
// console.log(newPlanets2);


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const wholeSentence = words.reduce((currentSentence, next)=> currentSentence +` ${next}`);
// console.log(wholeSentence)