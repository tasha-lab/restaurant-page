//tabs-buttons

import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const createTabs = () =>{
    const home = document.querySelector('#homebtn')
    const menu = document.querySelector('#menubtn')
    const contact = document.querySelector('#contactbtn')

      home.addEventListener("click", () => {
        createRestaurantHomePage();
      })

      menu.addEventListener("click", () => {
        createMenuPage();
      })

      contact.addEventListener("click", () => {
        createContactPage();
        
     })
    
};

export default createTabs;