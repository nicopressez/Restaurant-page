import { addContent } from "./content";
import { homeContent, removeHomeContent } from "./homecontent";
import { menuContent, removeMenuContent } from "./menucontent";
import { contactContent, removeContactContent } from "./contactcontent";

function onHomeButtonClick(){
    removeHomeContent();
    removeContactContent();
    removeMenuContent();
    homeContent();
};

function onMenuButtonClick(){
    removeHomeContent();
    removeContactContent(); 
    removeMenuContent();
    menuContent();
};

function onContactButtonClick(){
    removeHomeContent();
    removeContactContent(); 
    removeMenuContent();
    contactContent();
};

addContent(onHomeButtonClick, onMenuButtonClick, onContactButtonClick);
homeContent();





