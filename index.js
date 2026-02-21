const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
// get the html section element 
const container = document.getElementById("post-js")
console.log(container)

let htmlContent = ""

// populating the html section element with the information from the posts object 
posts.forEach(function(posts){
    htmlContent += `
    <div class="container">

         <div class="user-info">
                <img class="profile-icon" src="${posts.avatar}">

                <div class="name-loc">
                        <p class="bld">${posts.name}</p>
                        <p>${posts.location}</p>
                 </div>

        </div>

        <img class="post" src="${posts.post}">

        <div class="icons">
             <button class="btn" id="btn-${posts.username}"><img class="icon heart" src="images/icon-heart.png"></button>
             <button class="btn"><img class="icon comment" src="images/icon-comment.png"></button>
            <button class="btn"><img class="icon comment" src="images/icon-dm.png"></button>
        </div>

        <div class="likes-cpt">
             <p class="bld" id="${posts.username}">${posts.likes} likes</p>
             <p><span class="bld">${posts.username}</span> ${posts.comment} </p>
        </div>

    </div>`
})
container.innerHTML = htmlContent

// Enabling likes to be updated for each post

// const and variable declarations 
const vanBtn = document.getElementById("btn-vincey1853")
const vanLikesSection = document.getElementById("vincey1853")
let likeCountVan = posts[0].likes

const gusBtn = document.getElementById("btn-gus1819")
const gusLikesSection = document.getElementById("gus1819")
let likeCountGus = posts[1].likes

const jdBtn = document.getElementById("btn-jd1735")
const jdLikesSection = document.getElementById("jd1735")
let likeCountJd = posts[2].likes

// click event and functions 
vanBtn.addEventListener("click", function(){
    likeCountVan += 1
    let vanLikes = `
             <p class="bld" id="${posts.username}">${likeCountVan} likes</p>`
    vanLikesSection.innerHTML = vanLikes;
})

gusBtn.addEventListener("click", function(){
    likeCountGus += 1
    let gusLikes = `
             <p class="bld" id="${posts.username}">${likeCountGus} likes</p>`
    gusLikesSection.innerHTML = gusLikes;
})

jdBtn.addEventListener("click", function(){
    likeCountJd += 1
    let jdLikes = `
             <p class="bld" id="${posts.username}">${likeCountJd} likes</p>`
    jdLikesSection.innerHTML = jdLikes;
})