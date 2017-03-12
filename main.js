var toDoList = [];
var toDoListHTML = document.getElementById('to-do-list');

function ListItemObj(userInput) {
  this.title = userInput;
  this.status = 'new';
  this.addListItemToArr = function() {
                            toDoList.push(this);
                          };
  this.render = function() {
                  var newLi = document.createElement('div');
                  newLi.className = "list-item";
                  newLi.innerHTML = "<span class=user-input-span>"+ userInput + "</span>" + "<button class=delete-list-item>Delete</button>";
                  toDoListHTML.appendChild(newLi);
                };
  this.deleteListItemFromDOM = function() {
                                  var deleteListItemBtns = document.getElementsByClassName("delete-list-item");
                                  for(var i = 0; i < deleteListItemBtns.length; i++) {
                                  	deleteListItemBtns[i].addEventListener('click', function(){
                                  	  var titleToFind = this.parentNode.parentNode.getElementsByTagName("span")[0].innerHTML;
                                  	  deleteListItemFromObj(titleToFind);
                                  		this.parentNode.parentNode.removeChild(this.parentNode);
                                   });
                                  }
                                };
}

document.getElementById('user-input-submit').addEventListener('click', function(){
  var userInput = document.getElementById('user-input').value;
  if(userInput){
    var newListItemObj = new ListItemObj(userInput);
    newListItemObj.addListItemToArr();
    newListItemObj.render();
    newListItemObj.deleteListItemFromDOM();
  }
});

function deleteListItemFromObj(titleToFind) {
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