var toDoListHTML = document.getElementById('to-do-list');

var toDoList = {
  
  toDoListArr: [],
  
  add: function(listItem) {
        this.toDoListArr.push(listItem);
      },
      
  render: function() {
            toDoListHTML.innerHTML = '';
            for(var i = 0; i < this.toDoListArr.length; i++) {
              var listItemObj = this.toDoListArr[i];
              listItemObj.render();
            }
          },
  
  delete: function(titleToFind) {
            for(var i = 0; i < this.toDoListArr.length; i++) {
              if(this.toDoListArr[i].title == titleToFind) {
                this.toDoListArr.splice(i, 1);
              }
            }
          }
};


function ListItemObj(userInput) {
  this.title = userInput;
  this.status = 'new';
  this.changeInput = undefined;
  this.newLi = undefined;
  this.render = function() {
                  this.newLi = document.createElement('div');
                  this.changeInput = document.createElement('div');
                  this.newLi.className = "list-item";
                  this.changeInput.className = "change-input";
                  this.changeInput.innerHTML = "<input type=text>" + "<button class=change-list-item>Change</button>";
                  this.newLi.innerHTML = "<div class=user-input-div>" +  "<span class=user-input-span>"+ userInput + "</span>" + "<button class=delete-list-item>Delete</button>" + "</div";
                  this.newLi.appendChild(this.changeInput);
                  toDoListHTML.appendChild(this.newLi);
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
  this.change = function() {
    var userInputSpans = document.getElementsByClassName("user-input-span");
    var _this  = this;
    for(var j = 0; j < userInputSpans.length; j++) {
      userInputSpans[j].addEventListener("dblclick", function() {
        this.parentNode.style.display = 'none';
        _this.changeInput.style.display = 'block';
      });
    }
  };
}

document.getElementById('user-input-submit').addEventListener('click', function(){
  var userInput = document.getElementById('user-input').value;
  if(userInput){
    var listItem = new ListItemObj(userInput);
    toDoList.add(listItem);
    toDoList.render();
    listItem.change();
    listItem.delete();
  }
});
