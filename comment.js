function loadAPI(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => displayInfo(json))

}

loadAPI()

function displayInfo(comments){
         //console.log(comments)
          
         const commentsDiv = document.getElementById('comments');
           //console.log(commentsDiv);

         for(const comment of comments){
           //console.log(comment);

           const div = document.createElement('div');
             div.classList.add('comment')
             div.innerHTML = `
                <p>${comment.id}</p> 
                <h2>${comment.name}</h2>
                <span>${comment.postId}</span> 
                <h3>${comment.email}</h3>
                <p>${comment.body}</p>
            `
            //console.log(div);
            commentsDiv.appendChild(div)
         }
}

