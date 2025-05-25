function loadAPI(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => displayInfo(json))

}

loadAPI()

function displayInfo(posts){
         //console.log(posts)
          
         const postsDiv = document.getElementById('posts');
           //console.log(postsDiv);

         for(const post of posts){
           //console.log(post);

           const div = document.createElement('div');
             div.classList.add('post')
             div.innerHTML = `
                <p>${post.id}</p> 
                <h2>${post.title}</h2>
                <span>${post.userId}</span> 
                <p>${post.body}</p>
            `
            //console.log(div);
            postsDiv.appendChild(div)
         }
}

