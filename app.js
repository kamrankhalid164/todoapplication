var ul = document.getElementById("items");
// var ulDiv=document.createElement("div")
// ul.appendChild(ulDiv);
// console.log(ul)

function AddToDo() {
    var mainField = document.getElementById('main-field')
    var liTag = document.createElement('li')
    var liTagText = document.createTextNode(mainField.value)
    liTag.appendChild(liTagText)
    items.appendChild(liTag)
    mainField.value = ""


    var delBtn=document.createElement("button")
    var delText=document.createTextNode("Delete")
    delBtn.setAttribute("class","ulDelButton")
    delBtn.setAttribute("onclick","delList(this)")
    delBtn.appendChild(delText)
    liTag.appendChild(delBtn)



    var editBtn=document.createElement("button")
    var editText=document.createTextNode("Edit")
    editBtn.setAttribute("class","ulEditButton")
    editBtn.setAttribute("onclick","editList(this)")
    editBtn.appendChild(editText)
    liTag.appendChild(editBtn)
}


function delList(e){
    e.parentNode.remove()
}

function del(){
    items.innerHTML=""
}
function editList(e){
    var updatedValue=prompt("Enter For Update the Work",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=updatedValue
}