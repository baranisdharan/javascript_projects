/*console.dir(document);
let title = document.title
console.log(title)
document.title = 123;
let header = document.getElementById('main-header');
header.style.borderBottom = '5px solid black'
let addItems = document.getElementsByClassName('title').innertext;
console.log(addItems);
let items = document.getElementsByClassName("list-group-item");
console.log(items);
let li = document.getElementsByTagName("li");
console.log(li);
li[4].className = "list-group-item"; 

let li2 = document.querySelector(".list-group-item:nth-child(2)");
li2.style.backgroundColor ="green";
let li3 = document.querySelector(".list-group-item:nth-child(3)");
li3.style.display = "none";
let list = document.querySelectorAll(".list-group-item");
list[1].style.backgroundColor ="green";
let odd = document.querySelectorAll(".list-group-item:nth-child(odd)");
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor ="green";}
let itemList = document.querySelector("#items");
console.log(itemList.parentNode);
console.log(itemList.children);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="hello4";
console.log(itemList.lastChild);
console.log(itemList.firstElementChild);
console.log(itemList.firstChild);
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
let newDiv = document.createElement("div");
newDiv.className = "hello";
newDiv.id = "hellohello";
newDiv.setAttribute('title', "Hello");
newDivText = document.createTextNode("hello world");
newDiv.appendChild(newDivText);
console.log(newDiv);
let container = document.querySelector("header .container");
let h1 = document.querySelector("#header-title");
container.insertBefore(newDiv, h1);
let ul1 = document.querySelector("#items");
let li1 = ul1.firstElementChild
console.log(li1);
ul1.insertBefore(newDiv, li1);*/
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
function addItem(e){
  e.preventDefault();  
  let newItem = document.getElementById('item').value;
  let description = document.getElementById('description').value;  
  let li = document.createElement('li');  
  li.className = 'list-group-item';  
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" " + description)); 
  let deleteBtn = document.createElement('button');  
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';  
  deleteBtn.appendChild(document.createTextNode('X'));  
  li.appendChild(deleteBtn);  
  
  let editBtn = document.createElement('button');
  editBtn.className = 'btn btn-sm float-right editBtn';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);  
  itemList.appendChild(li); 
}

itemList.addEventListener('click', removeItem);
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

filter.addEventListener('keyup', filterItems);

function filterItems(e){ 
  let text = e.target.value.toLowerCase();  
  let items = itemList.getElementsByTagName('li');  
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    let description = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 ||description.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


