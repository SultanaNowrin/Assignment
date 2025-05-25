function loadAPI(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayInfo(json))
}

loadAPI()

function displayInfo(users){
         //console.log(users)
          
         const UsersDiv = document.getElementById('users');
           //console.log(UsersDiv);

         for(const user of users){
           //console.log(user);

           const div = document.createElement('div');
             div.classList.add('user')
             div.innerHTML = `
                <h1>${user.name}</h1>
                <p>${user.email}</p> 
                <span>${user.phone}</span> 
                <p>${user.username}</p>
            `
            //console.log(div);
            UsersDiv.appendChild(div)
         }
}
