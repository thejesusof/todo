var SEQUENCE = 0;

var toDoList = {
  list: [],
  toDoListHTML: document.getElementById('to-do-list'),

  add: function(listItem) {
        this.list.push(listItem);
      },
  render: function() {
            this.toDoListHTML.innerHTML = '';
            this.list.forEach(function(item) {
            	item.render();
            });
          },
  delete: function(id) {
            var _this = this;
      			this.list.forEach(function(item, i) {
      				if(item.id == id) {
    	          _this.list.splice(i, 1);
    	        }
      			});
            this.render();
          }
};


function ListItemObj(userInput, id) {
  this.id = id,
  this.title = userInput;
  this.status = 'new';
  this.addToDOM = function(){
    this.newLi = document.createElement('div');
    this.changeInput = document.createElement('div');
    this.newLi.className = "list-item";
    this.changeInput.className = "change-input";
    this.changeInput.innerHTML = "<input type=text>" + "<button id=change-" + this.id + ">Change</button>";
    this.newLi.innerHTML = "<div class=user-input-div>" +  "<span id=user-input-span-" + this.id + ">" + this.title + "</span>" + "<button id=delete-list-item-" + this.id + ">Delete</button>" + "</div";
    this.newLi.appendChild(this.changeInput);
    toDoList.toDoListHTML.appendChild(this.newLi);
  }
  this.addListeners = function(){
    var _this = this;
    document.getElementById("user-input-span-" + this.id).addEventListener("dblclick", function() {
      this.parentNode.style.display = 'none';
      _this.changeInput.style.display = 'block';
    });
    document.getElementById("change-" + this.id).addEventListener("click", function() {
      var changedUserInput = _this.changeInput.children[0].value;
      _this.title = changedUserInput;
      toDoList.render();
    });
    document.getElementById("delete-list-item-" + this.id).addEventListener('click', function() {
      toDoList.delete(_this.id);
    });
  }
  this.render = function() {
   this.addToDOM();
   this.addListeners();
  }
}

document.getElementById('user-input-submit').addEventListener('click', function(){
  var userInput = document.getElementById('user-input').value;
  if(userInput){
    var listItem = new ListItemObj(userInput, SEQUENCE);
    SEQUENCE += 1;
    toDoList.add(listItem);
    toDoList.render()
  }
});
