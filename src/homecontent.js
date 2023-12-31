export function homeContent(){

const contentParent = document.getElementById("content");

const mainSection = document.createElement("section");
mainSection.classList.add("homeSection");
const mainSectionTitle = document.createElement("h2");
const mainSectionText = document.createElement("p");
const mainSectionTextSecond = document.createElement("p");

mainSectionTitle.textContent = "About us";
mainSectionText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur nisi praesentium consequuntur dolor dolores nesciunt provident libero aliquam quis, voluptas magnam corporis, quod ullam odit expedita maiores. Nemo, cum?";
mainSectionTextSecond.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur nisi praesentium consequuntur dolor dolores nesciunt provident libero aliquam quis, voluptas magnam corporis, quod ullam odit expedita maiores. Nemo, cum?";

contentParent.appendChild(mainSection);
mainSection.appendChild(mainSectionTitle)
mainSection.appendChild(mainSectionText)
mainSection.appendChild(mainSectionTextSecond)}
