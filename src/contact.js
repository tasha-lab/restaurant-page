//contact page

const createContactPage = () =>{
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const contactDiv = document.createElement("div");
    contactDiv.innerHTML =`
    <h3>Tell us Something</h3>

    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" required>
            
        <label for="email">Email:</label>
        <input type="email" id="email" required>
            
        <label for="message">Message:</label>
        <textarea id="message" required></textarea>
            
        <button type="submit">Send</button>
    </form>
    
    `
    content.appendChild(contactDiv);
};

export default createContactPage;