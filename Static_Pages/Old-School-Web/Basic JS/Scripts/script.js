function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const container = document.createElement('section')
const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');
var id = 0
container.setAttribute("class", "bodyList containerV")

info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

container.appendChild(info)
container.appendChild(list)
document.body.appendChild(container)

html.onclick = function() {
  const listItem = document.createElement('li');
  listItem.setAttribute("class", "listItem")
  listItem.setAttribute("id", `item_${id}`)
  id +=1
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);
  document.querySelector(`#item_${id-1}`).style.backgroundColor = `rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)})`;


  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}