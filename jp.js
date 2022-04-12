

const btmSubmit = document.querySelector(".todo-buttom");
const inputText = document.querySelector('.todo-input');
const listAdd = document.querySelector('.list-main')


//add event
btmSubmit.addEventListener('click',addList)
listAdd.addEventListener("click", deleteTodo);


//function
function addList(event){
    event.preventDefault()
    values = inputText.value
    //creative a Div
    const newDiv = document.createElement("div")
    newDiv.classList.add("list")
    
    //creative a li
    const sublist = document.createElement("li")
    sublist.classList.add("text-list")
    sublist.innerText = values
    newDiv.appendChild(sublist)
    
    //creative check buttom
    const checkButton = document.createElement("button")
    checkButton.classList.add("check-btn")
    checkButton.innerHTML = '<ion-icon name="checkmark-circle"></ion-icon>'
    newDiv.appendChild(checkButton) 

    //creative trash buttom
    const trashButton = document.createElement("button")
    trashButton.classList.add("trash-btn")
    trashButton.innerHTML = '<ion-icon name="trash"></ion-icon>'
    newDiv.appendChild(trashButton)

    listAdd.appendChild(newDiv)
} 

function deleteTodo(e) {
    const item = e.target
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement; 
        /* todo.remove() */
        todo.classList.add("fall")
        todo.addEventListener("transitionend", e=>{
            todo.remove();
        });
    }

    if (item.classList[0] === "check-btn") {
        item.parentElement.classList.add("check_done"); 
    }else{
        item.parentElement.classList.remove("check_done"); 
    }
}