var toDoList = [];

function addListItem(userInput) {
  var newListItem = {
    title: userInput,
    status: 'active'
  }
  toDoList.push(newListItem);
}

function deleteListItem(titleToFind) {
  for(var i = 0; i < toDoList.length; i++) {
    if(toDoList[i].title == titleToFind) {
      toDoList.splice(i, 1);
    }
  }
}

function changeListItem(changedText, titleToFind) {
  for(var i = 0; i < toDoList.length; i++) {
    if(toDoList[i].title == titleToFind) {
      toDoList[i].title = changedText;
    }
  }
}

document.getElementById('user-input-submit').addEventListener('click', function(){
  var toDoListHTML = document.getElementById('to-do-list');
  var userInput = document.getElementById('user-input').value;
  var newLi = document.createElement('li');
  addListItem(userInput);
  newLi.innerHTML = userInput;
  toDoListHTML.appendChild(newLi);
})