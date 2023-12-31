import { addContent } from "./content";
import { homeContent } from "./homecontent";
import { menuContent } from "./menucontent";
import { contactContent } from "./contactcontent";
import { menuButton } from "./content";
addContent();
//contactContent();
//menuContent();
//homeContent();

menuButton.addEventListener("click", () => menuContent());





