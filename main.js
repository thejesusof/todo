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
  this.render = function() {
                  var newLi = document.createElement('div');
                  newLi.className = "list-item";
                  newLi.innerHTML = "<span class=user-input-span>"+ userInput + "</span>" + "<button class=delete-list-item>Delete</button>";
                  toDoListHTML.appendChild(newLi);
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
                      }
}

document.getElementById('user-input-submit').addEventListener('click', function(){
  var userInput = document.getElementById('user-input').value;
  if(userInput){
    var listItem = new ListItemObj(userInput);
    toDoList.add(listItem);
    toDoList.render();
    listItem.delete();
  }
});
