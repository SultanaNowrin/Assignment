function loadAPI() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => displayInfo(json));
}

loadAPI();

function displayInfo(todoss) {
        //console.log(todoss)

     const todosDiv = document.getElementById('todoss');
      //console.log(todosdiv)

    for (const todo of todoss) {
         //console.log(todos)
        const div = document.createElement('div');
        div.classList.add('todos');

        div.innerHTML = `
            <p>${todo.id}</p> 
            <h2>${todo.title}</h2>
            <span>${todo.userId}</span> 
            <p>${todo.completed ? 'Yes' : 'No'}</p>
        `;
           //console.log(div)
        todosDiv.appendChild(div);
    }
}
