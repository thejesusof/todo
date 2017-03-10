var toDoList = [];
var toDoListHTML = document.getElementById('to-do-list');

function ListItemObj(userInput) {
  this.title = userInput;
  this.status = 'new';
  this.addListItemToArr = function() {
                            toDoList.push(this);
                          };
  this.addListItemToDOM = function() {
                            if(userInput){
                              var newLi = document.createElement('li');
                              newLi.innerHTML = userInput;
                              toDoListHTML.appendChild(newLi);
                            }
                          };
}

document.getElementById('user-input-submit').addEventListener('click', function(){
  var userInput = document.getElementById('user-input').value;
  var newListItemObj = new ListItemObj(userInput);
  newListItemObj.addListItemToArr();
  newListItemObj.addListItemToDOM();
});

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
