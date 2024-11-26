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