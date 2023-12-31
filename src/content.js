export function addContent(){

const contentParent = document.getElementById("content");

const headSection = document.createElement("section");
const headTitle = document.createElement("h2");
const homeButton = document.createElement("button");
const menuButton = document.createElement("button");
const contactButton = document.createElement("button");

headSection.classList.add("head");
headTitle.classList.add("headTitle");

headTitle.textContent = "Silly Sandwiches";
homeButton.textContent = "HOME";
menuButton.textContent = "MENU";
contactButton.textContent = "CONTACT";

contentParent.appendChild(headSection);
headSection.appendChild(headTitle);
headSection.appendChild(homeButton);
headSection.appendChild(menuButton)
headSection.appendChild(contactButton)}
