var SEQUENCE = 0;
var toDoListHTML = document.getElementById('to-do-list');

var toDoList = {
  list: [],
  add: function(listItem) {
        this.list.push(listItem);
      },
  render: function() {
            toDoListHTML.innerHTML = '';
            this.list.forEach(function(item, i, arr) {
            	item.render();
            });
          },
  
  delete: function(titleToFind) {
  			this.list.forEach(function(item, i, arr) {
  				if(item.title == titleToFind) {
	                toDoList.list.splice(item, 1);
	             }
  			});
          }
};


function ListItemObj(userInput, id) {
  this.id = id,
  this.title = userInput;
  this.status = 'new';
  this.render = function() {
  				        var _this = this;
                  this.newLi = document.createElement('div');
                  this.changeInput = document.createElement('div');
				          this.newLi.className = "list-item";
                  this.changeInput.className = "change-input";
                  this.changeInput.innerHTML = "<input type=text>" + "<button id=change-" + this.id + ">Change</button>";
                  this.newLi.innerHTML = "<div class=user-input-div>" +  "<span id=user-input-span-" + this.id + ">" + userInput + "</span>" + "<button class=delete-list-item>Delete</button>" + "</div";
                  this.newLi.appendChild(this.changeInput);
                  toDoListHTML.appendChild(this.newLi);
                  document.getElementById("user-input-span-" + this.id).addEventListener("dblclick", function() {
                  	this.parentNode.style.display = 'none';
                  	_this.changeInput.style.display = 'block';
                  });
                  document.getElementById("change-" + this.id).addEventListener("click", function() {
                  	var changedUserInput = _this.changeInput.children[0].value;
                  	var changedUserInputSpan = document.getElementById("user-input-span-" + _this.id);
                  	changedUserInputSpan.innerHTML = changedUserInput;
                     _this.title = changedUserInput;
                  	this.parentNode.style.display = 'none';
                  	changedUserInputSpan.parentNode.style.display = 'block';
                  });
                };
  this.delete = function() {
                        var deleteListItemBtns = document.getElementsByClassName("delete-list-item");
                        for(var i = 0; i < deleteListItemBtns.length; i++) {
                          deleteListItemBtns[i].addEventListener('click', function(){
                            var titleToFind = this.parentNode.getElementsByTagName("span")[0].innerHTML;
                            toDoList.delete(titleToFind);
                            this.parentNode.parentNode.removeChild(this.parentNode);
                         });
                        }
                      };
}

document.getElementById('user-input-submit').addEventListener('click', function(){
  var userInput = document.getElementById('user-input').value;
  if(userInput){
    var listItem = new ListItemObj(userInput, SEQUENCE);
    SEQUENCE += 1;
    toDoList.add(listItem);
    toDoList.render();
    listItem.delete();
  }
});
