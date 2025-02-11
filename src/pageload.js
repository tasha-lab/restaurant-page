//importing from the restaurant page
import createRestaurantHomePage from "./restaurant";
import createTabs from "./tabs";
import "./styles.css";


//loading for the home page
function initialload(){
    createRestaurantHomePage();
    createTabs();
}

//export the function
export default initialload;