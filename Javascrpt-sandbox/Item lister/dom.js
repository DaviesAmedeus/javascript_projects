var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);


// Add item
function addItem(e){
  e.preventDefault();

  // getting the input value
  var newItem = document.getElementById('item').value;

  // create new li element
  var li = document.createElement('li');
  // Add a class
  li.className="list-group-item";
  //  Add txt node with input
  li.appendChild(document.createTextNode(newItem));

  // create the delete button elememnt

  var deleteBtn = document.createElement('button');
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // deleteBtn.appendChild(document.createTextNode('X'));
  deleteBtn.textContent="X";

li.appendChild(deleteBtn);



  itemList.appendChild(li);
     
}

//remove item
function removeItem(e){

  if(e.target.classList.contains('delete')){
    if(confirm('Sure?')){
      var li = e.target.parentNode;
      itemList.removeChild(li);
    }
  }
}

//filter items
function filterItems(e){
 //convert the input to lower case:
 var text = e.target.value.toLowerCase();
//  get <li>
var items = itemList.getElementsByTagName('li');
// convert the colllection of <li> to array
Array.from(items).forEach(function(item){
  var itemName= item.firstChild.textContent;
  
  // the filtering mechanism
  if(itemName.toLowerCase().indexOf(text) != -1){
    item.style.display = 'block';
  } else{
    item.style.display = 'none';
  }
});

 
}
