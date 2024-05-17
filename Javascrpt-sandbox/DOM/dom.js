// EXAMINE THE DOCUMENT OBJECT
// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.doctype) 
// console.log(document.title) 
// console.log(document.all)
// console.log(document.form) 
// etc

// ---SELECTORS---
// 1. GETELEMENTBYID
// console.log(document.getElementById('header-title'))

// 2. GETELEMENTBYCLASSNAME
// var subtitle = document.getElementsByClassName('subtitle')
// console.log(subtitle)

// 3 GETELEMENTBYTAGNAME
// var list = document.getElementsByTagName('li')

// TRAVERSING THE DOM
//  var itemList = document.querySelector('#items');
//  console.log(itemList.parentNode)
//  itemList.parentNode.style.backgroundColor = '#f4f4f4';
//  itemList.parentNode.parentNode.parentNode;

 

//  var itemList = document.querySelector('#items');
//  console.log(itemList.parentNode)
//  itemList.parentNode.style.backgroundColor = '#f4f4f4';
//  itemList.parentNode.parentNode.parentNode;


//   var itemList = document.querySelector('#items');
//  console.log(itemList.parentElement)
//  itemList.parentElement.style.backgroundColor = '#f4f4f4';
//  itemList.parentElement.parentElement.parentElement;


// Child nodes
//  console.log(itemList.childNodes)

//  console.log()
//  itemList.children[3].style.backgroundColor='yellow'

// itemList.firstElementChild.textContent = 'Hello World'
// itemList.lastElementChild.textContent = 'Hello World'

// nextSibling
// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling)

// previousSibling
// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)

// Create a div
// var newDiv = document.createElement('div'); //creating a div
// newDiv.className='hello'; //adding class to div
// newDiv.id='hello1'   ;    //adding id to div
// newDiv.setAttribute('title', 'Hell Div'); //adding any attributes nad its value 

// create a text node
// var newDivText = document.createTextNode('Hello world');
//Add text to newDiv
// newDiv.appendChild(newDivText);

// console.log(newDiv)

// inserting in the DOM
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1')

// container.insertBefore(newDiv, h1)



// ---------------EVENTS--------- //

// var button = document.getElementById('button').addEventListener(
//     'click', buttonClick);

//     function buttonClick(e){
//         // document.querySelector('.title').textContent = 'HOW ARE YOU TODAY?';
//         // document.querySelector('#main').style.backgroundColor = '#f4f4f4';

//         // console.log(e);
//         // console.log(e.target);
//         // console.log(e.target.id);
//         // console.log(e.target.classList);
//         // console.log(e.target.className);

//         // console.log(e.type);

//         // getting postion of the mouse in the window/browser
//         // console.log(e.clientX);
//         // console.log(e.clientY);

//         // getting postion of the mouse in the actual element
//         // console.log(e.offsetX);
//         // console.log(e.offsetY);

//         // getting the key pressed on the keyboard
//         // console.log(e.altKey);
//         // console.log(e.ctrlKey);
//         // console.log(e.shiftKey);
//      }

var output = document.getElementById('output');
 var button = document.getElementById('button');
 var box=document.getElementById('box');
//  button.addEventListener('click', runEvent);
//  button.addEventListener('dblclick', runEvent);

//  button.addEventListener('mousedown', runEvent) // fires when you click when
//  button.addEventListener('mouseup', runEvent) // fires when you release the pointer(mouse) after you clicked

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

//  function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);
//     output.innerHTML= '<h3>positionX: '+e.offsetX+'</h3><h3>positionY: '+e.offsetY+'</h3>';
//    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 0)";
//    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 0)";
//    } 


// KEYBOARD & INPUT EVENTS
var itemInput = document.querySelector('input[type="text"]');
var form =document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
  
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);
// select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent)

function runEvent(e){ 
   //stoping the submit to fire off when clicked
   e.preventDefault()
   console.log("EVENT TYPE: "+e.type);

   // catching what is type:
   // console.log(e.target.value);
   // document.getElementById('output').innerHTML= "<h3>"+e.target.value+"</h3>";
}
