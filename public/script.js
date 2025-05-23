const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

todoInput.addEventListener("input", function () {
    addTodoBtn.style.display = todoInput.value.trim() === "" ? "none" : "inline-block";
});

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

    
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.innerHTML = todoText;
        const deleteBtn = document.createElement('button');
        

        deleteBtn.innerHTML = 'Delete';
        deleteBtn.classList.add('delete-btn');
        
        deleteBtn.addEventListener('click', function () {
            li.remove(); // Removes the clicked item
        });
         li.appendChild(deleteBtn);

        todoList.appendChild(li);
        todoInput.value = '';
    }
}