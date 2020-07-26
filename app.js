var list = document.getElementById('list')

function add(){
    var display = document.getElementById('display');
    var li = document.createElement('li');
    var text = document.createTextNode(display.value);
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
    deletebtn.setAttribute("onclick","deleteItem(this)");
    deletebtn.setAttribute("class","btn-delete-item");
    display.value = "";
}
function deleteAll(){
    list.innerHTML = "";
}
function deleteItem(e){
    e.parentNode.remove();
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Edit To Do...", val);
    e.parentNode.firstChild.nodeValue = editValue;
}