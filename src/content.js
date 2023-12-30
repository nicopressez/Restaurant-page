export function addContent(){const contentParent = document.getElementById("content");

const headSection = document.createElement("section");
const headTitle = document.createElement("h2");
const homeButton = document.createElement("button");
const menuButton = document.createElement("button");
const contactButton = document.createElement("button");
const mainSection = document.createElement("section");
const mainSectionTitle = document.createElement("h2");
const mainSectionText = document.createElement("p");
const mainSectionTextSecond = document.createElement("p");

headSection.classList.add("head");
mainSection.classList.add("main");
headTitle.classList.add("headTitle");

headTitle.textContent = "Silly Sandwiches";
homeButton.textContent = "HOME";
menuButton.textContent = "MENU";
contactButton.textContent = "CONTACT";
mainSectionTitle.textContent = "About us";
mainSectionText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur nisi praesentium consequuntur dolor dolores nesciunt provident libero aliquam quis, voluptas magnam corporis, quod ullam odit expedita maiores. Nemo, cum?"
mainSectionTextSecond.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur nisi praesentium consequuntur dolor dolores nesciunt provident libero aliquam quis, voluptas magnam corporis, quod ullam odit expedita maiores. Nemo, cum?"

contentParent.appendChild(headSection);
headSection.appendChild(headTitle);
headSection.appendChild(homeButton);
headSection.appendChild(menuButton)
headSection.appendChild(contactButton)
contentParent.appendChild(mainSection);
mainSection.appendChild(mainSectionTitle)
mainSection.appendChild(mainSectionText)
mainSection.appendChild(mainSectionTextSecond)}
