import { menuContent } from "./menucontent";
import { homeContent } from "./homecontent";
import { contactContent } from "./contactcontent";
import { removeHomeContent } from "./homecontent";
import { removeContactContent } from "./contactcontent";
import { removeMenuContent } from "./menucontent";
export function addContent(onHomeButtonClick, onMenuButtonClick, onContactButtonClick){

const contentParent = document.getElementById("content");

const headSection = document.createElement("section");
const headTitle = document.createElement("h2");
const homeButton = document.createElement("button");
const menuButton = document.createElement("button");
const contactButton = document.createElement("button");

headSection.classList.add("head");
headTitle.classList.add("headTitle");
homeButton.classList.add("homeBtn");
menuButton.classList.add("menuBtn");
contactButton.classList.add("contactBtn");

headTitle.textContent = "Silly Sandwiches";
homeButton.textContent = "HOME";
menuButton.textContent = "MENU";
contactButton.textContent = "CONTACT";

homeButton.addEventListener("click", () => onHomeButtonClick());
contactButton.addEventListener("click", () => onContactButtonClick());
menuButton.addEventListener("click", () => onMenuButtonClick());

contentParent.appendChild(headSection);
headSection.appendChild(headTitle);
headSection.appendChild(homeButton);
headSection.appendChild(menuButton)
headSection.appendChild(contactButton)}
