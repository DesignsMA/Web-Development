function singleShot(event)
{
    console.log("This is a single shot.");
    const c2 = document.querySelector('#c2');
    c2.textContent = "Bang!";

    event.stopPropagation();
    console.log("Propagation event halted.");
}

const element = document.getElementById("tbl1");
element.addEventListener("click", singleShot);

const table = document.getElementById("t-daddy");
table.addEventListener("click", () =>{
    console.log("t-daddy clicked");
});