console.log("=========== querySelector() with element name =============== ");

 

const h2Element = document.querySelector("h2");

console.log(h2Element);

console.log(h2Element.innerHTML);

 

console.log("=========== querySelector() with element id =============== ");

const liElement = document.querySelector("#react");

console.log(liElement);

console.log(liElement.innerHTML);

 

console.log("=========== querySelector() with element class =============== ");

const techStackElement = document.querySelector(".techStack");

console.log(techStackElement);

console.log(techStackElement.innerHTML);

console.log("=========== querySelectorAll() with element class =============== ");

const techStackElements = document.querySelectorAll(".techStack");

for (const element of techStackElements) {

    console.log(element.innerHTML);

}

 

console.log("=========== querySelectorAll() with element name =============== ");

const liElements = document.querySelectorAll("li");

for (const element of liElements) {

    console.log(element.innerHTML);

}


console.log("=========== getElementById() with element name =============== ");

const profileDetailsElement = document.getElementById("profileDetails");

console.log(profileDetailsElement);

profileDetailsElement.innerHTML = "My Complete Summary";
profileDetailsElement.style.color = "orange";

profileDetailsElement.style.fontFamily = "Arial";

console.log("======= Changing an attribute ============");

const gitProfileElement = document.querySelector("#gitProfile");

gitProfileElement.setAttribute('href', "https://github.com/");

console.log("======= Creating new node ============");

const paraElement = document.createElement("p");

const paraTextNode = document.createTextNode("My Hobbies: Reading, Writing and Time pass");

paraElement.appendChild(paraTextNode);

paraElement.style.color = "cadetblue";

 

const hobbiesElement = document.querySelector("#hobbies");

hobbiesElement.appendChild(paraElement);

console.log("======= Remove node ============");

const techULElement = document.querySelector("#tech");

const angularLIElement = document.querySelector("#angular");

techULElement.removeChild(angularLIElement);