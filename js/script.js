let postTitle = document.getElementById("post-title");
let postBody = document.getElementById("post-body");
let postForm = document.getElementById("post-form");

let newArray = []


////Fetching blog post 
function getPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then((data) => {
            newArray = data
            addpost()
            
        })
}





////RENDERING BLOG POST 
function addpost() {
    let postLayout = document.getElementById('post-layout')
    let displayPost = "";

    console.log("After",newArray)

    newArray.forEach((eachPost, index) => {
        displayPost += `
            <div class="viewPost col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="post-title mb-4">${eachPost.title}</h5>
                        <p class="post-body">${eachPost.body}</p>
                    </div>
                </div>
            </div>
        
        `
    })
    postLayout.innerHTML = displayPost
    viewPost()
}

function viewPost() {
    let viewPost = document.querySelectorAll(".viewPost")

    viewPost.forEach((e, index) => {
        e.addEventListener("click", () => {
            localStorage.setItem("blogId", index + 1)
            
            window.location.href = "post.html"
        })
    })
}





getPost()
