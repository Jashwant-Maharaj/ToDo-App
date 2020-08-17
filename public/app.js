var list = document.getElementById('list');
var dataBase = firebase.database().ref('ToDos');

dataBase.on('child_added',function(data){
    var li = document.createElement('li');
    var text = document.createTextNode(data.val().value);
    li.appendChild(text);
    li.setAttribute("class","li-style")
    list.appendChild(li);
    var edit = document.createElement('button');
    edit.appendChild(document.createTextNode("Edit"));
    li.appendChild(edit);
    var deletebtn = document.createElement('button');
    deletebtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deletebtn);
    edit.setAttribute("onclick","editItem(this)");
    edit.setAttribute("class","btn-edit-item");
    edit.setAttribute("id", data.val().key);
    deletebtn.setAttribute("onclick","deleteItem(this)");
    deletebtn.setAttribute("class","btn-delete-item");
    deletebtn.setAttribute("id", data.val().key);
})
function add(){
    var display = document.getElementById('display');
    var key = dataBase.push().key;
    var value = display.value;
    var ToDo = {
        key: key,
        value: value
    }
    dataBase.child(key).set(ToDo);
    display.value = "";
}
function deleteAll(){
    dataBase.remove();
    list.innerHTML = "";
}
function deleteItem(e){
    dataBase.child(e.id).remove();
    e.parentNode.remove();
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Edit To Do...", val);
    var editedToDo = {
        key: e.id,
        value: editValue
    }
    dataBase.child(e.id).set(editedToDo);
    e.parentNode.firstChild.nodeValue = editedToDo.value;
}