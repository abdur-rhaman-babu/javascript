// find element
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-Input')
const todoList = document.getElementById('lists')
const showElement = document.getElementById('message')

// create Element
const createTodo=(todoId,todoValue)=>{
    const todoElement = document.createElement('li')
    todoElement.id = todoId;
    todoElement.innerHTML = `<span>${todoValue}</span><i class="fa-solid fa-trash"></i>`;
    todoList.appendChild(todoElement)
}

// show Message
const showMessage = (text)=>{
    showElement.textContent= text
    setTimeout(()=>{
        showElement.textContent= ""
    },1000)
}

// add todo
const addTodo = (e)=>{
    e.preventDefault()

    const todoValue = todoInput.value;
    if(todoValue.trim() === ''){
        alert('please fill the input')
        return 
   }
    // create id
    const todoId = Date.now().toString()
    createTodo(todoId, todoValue)
    showMessage("add todo")
}


// add listener
todoForm.addEventListener('submit', addTodo)


