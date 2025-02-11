//restaurant logic

const createRestaurantHomePage = () => {

    //'calling' the content id from template.html
    const content = document.querySelector("#content");
    //creating a div in the content id
    const pageContent = document.createElement(`div`);
    //for styling
    pageContent.classList.add('page-content');

    // Select the header div
    const header = document.querySelector(".header");

    //remove existing h1 if present to prevent duplication
    const existingHeadline = header.querySelector("h1");
    if (existingHeadline){
      existingHeadline.remove();
    }

    //create and append header element
    const headline = document.createElement('h1');
    //content of the headline
    headline.textContent = "T's Restaurant";


    //adds headline as a child to page page content
    //pageContent.appendChild(headline);

    // Find the existing <nav> inside .header
    const nav = header.querySelector("nav");

    // Insert the headline before the nav
    header.insertBefore(headline, nav);

    //create and append image element
    const image = document.createElement("img");
    //the image
    image.src = "/images/restaurant.jpg";
    pageContent.appendChild(image);
    
    //create and append copy element-my restaurants article
    const copy =document.createElement('p');
    //my article 
    copy.textContent = "At T's Restaurant, we believe that great food brings people together. Whether you're craving a sizzling steak, fresh seafood, or a hearty bowl of pasta, we’ve got something to satisfy every palate. Our chefs use the finest ingredients to craft delicious, mouthwatering dishes that make every meal unforgettable.Step into our warm and inviting space, where exceptional flavors meet outstanding service. Whether you're here for a casual lunch, a romantic dinner, or a family gathering, we promise an experience filled with delicious food and lasting memories.";
    //adding a child to page content
    pageContent.appendChild(copy)

    const footer =document.querySelector(".footer")
    footer.textContent = "All rights reserved.          Copyright"

    //clear previous content 
    content.innerHTML ="";
    content.appendChild(pageContent);

}
export default createRestaurantHomePage;