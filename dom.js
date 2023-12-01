//ParentNode
var itemList=document.querySelector("#items");
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor="#f4f4f4"
console.log(itemList.parentNode.parentNode)

//ParentElement
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor="#f4f4f4"
console.log(itemList.parentElement.parentElement)

//ChildNode
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor="yellow"

//FirstChild
console.log(itemList.firstChild);

//FirstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="Hello 1";

//LastChild
console.log(itemList.lastChild);

//LastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="Hello 4";

//nextSibling
console.log(itemList.nextSibling)

//nextElementSibling
console.log(itemList.nextElementSibling)

//previousSibling
console.log(itemList.previousSibling)

//previousElementSibling
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color="green";

//Adding "Hello" before Item Lister
//CreateElement
var newDiv=document.createElement("div");
//Add class
newDiv.className="Hello"
//Add ID
newDiv.id="hello1"
//Add attribute
newDiv.setAttribute("title","Hello Div")
//Crerate a text node
var newDivText=document.createTextNode("Hello World");

//Add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector("header .container");
var h1=document.querySelector("header h1")
container.insertBefore(newDiv,h1)
newDiv.style.fontSize="30px"

// console.log(newDiv)

//Adding "Hello" before the item 1
var newDiv=document.createElement("div")
newDiv.className="Hello"
newDiv.id="hello1"
newDiv.setAttribute("title","Hello Div")
var newDivText=document.createTextNode("Hello");
newDiv.appendChild(newDivText);
var container=document.querySelector("ul .list-group-item");
var h1=document.querySelector("ul h1")
container.insertBefore(newDiv,h1)
newDiv.style.fontSize="30px"
