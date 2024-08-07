function getPost() {
    let blogId = localStorage.getItem("blogId")

    fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
        .then(response => response.json())
        .then((data) => {
            
            let postBody = document.getElementById("post-body")

            let blogdetails = ''


            blogdetails += `
                <div class="card bg-primary">
                    <div class="card-body">
                     <h1> ${data.title}</h1>
                     <p>${data.body}</p>
                    </div>
                </div>
            
            `

            postBody.innerHTML = blogdetails
        })
}

getPost()