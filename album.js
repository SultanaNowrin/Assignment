function loadAPI(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => displayInfo(json))

}

loadAPI()

function displayInfo(albums){
         //console.log(albums)
          
         const albumsDiv = document.getElementById('albums');
           //console.log(albumsDiv);

         for(const album of albums){
           //console.log(album);

           const div = document.createElement('div');
             div.classList.add('album')
             div.innerHTML = `
                <p>${album.id}</p> 
                <h3>${album.title}</h3>
                <h1>${album.userId}</h1> 
            `
            //console.log(div);
            albumsDiv.appendChild(div)
         }
}

