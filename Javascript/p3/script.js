document.querySelector("input").addEventListener("click", () => {
    const header = document.getElementsByTagName("h2").item(0); // node list

    header.firstChild.data = "Dynamic header";
    
    const para = document.getElementsByTagName("p").item(0);
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque!"; // the same as header.firstChild.data but more concise

    const newText = document.createTextNode("This is a paragraph.");
    const newElement = document.createElement("p");

    newElement.appendChild(newText);
    
    para.parentNode.appendChild(newElement);
});