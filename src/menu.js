//creating the menu

const createMenuPage = () =>{
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const menuDiv = document.createElement("div");
    menuDiv.innerHTML =`
    <h2>T's Menu</h2>
    <div>
     <div class ="menu-item">
         <img src="/images/burger.jpg"/>
         <p> Seasoned fries with a Beef burger</p>
     </div>
     <div class ="menu-item">
         <img src="/images/fritters.jpg"/>
         <p> Salty and Cruntchy Fritters with a sauce dip</p>
     </div>
     <div class ="menu-item">
         <img src="/images/fruitjuice.jpg"/>
         <p> Rich and Fruity juice</p>
     </div>
      <div class ="menu-item">
         <img src="/images/salmon.jpg"/>
         <p> Grilled salmon with vegetables</p>
      </div>
     <div class ="menu-item">
         <img src="/images/steak.jpg"/>
         <p> Medium rare steak</p>
     </div>
     <div class ="menu-item">
         <img src="/images/veggiesalad.jpg"/>
         <p> A diet chicken Salad</p>
     </div>
    </div>

    `
    content.appendChild(menuDiv);
};

export default createMenuPage;


