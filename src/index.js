// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

let ramenCollection;
let targetId;

ramenImg = document.getElementById("ramen-img")
ramenName = document.getElementById("ramen-name")
ramenStore = document.getElementById("ramen-store")
ramenRating = document.getElementById("rating-display")
ramenComment = document.getElementById("comment-display")

menu = document.getElementById("ramen-menu")
form = document.getElementById("new-ramen")

document.addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault
    getRamen()
    ramenForm()
})

function getRamen() {
    fetch ("http://localhost:3000/ramens")
    .then (response => response.json())
    .then (json => {

        ramenCollection = json;

        json.forEach(ramen => {
            createRamenImages(ramen)
        })
    })
        function createRamenImages(ramen){
        imgs = document.createElement("img") 
        imgs.src = ramen.image
        imgs.id = ramen.id
        menu.appendChild(imgs)
        imgs.addEventListener("click", (e) => {
            target = e.target
            targetId= target.id
            handleClickedRamen(targetId)
        })
        function handleClickedRamen(ramen){
            ramenImg.src = ramenCollection[(targetId-1)].image
            ramenName.innerText = ramenCollection[(targetId-1)].name
            ramenStore.innerText = ramenCollection[(targetId-1)].restaurant
            ramenRating.innerText = ramenCollection[(targetId-1)].rating
            ramenComment.innerText = ramenCollection[(targetId-1)].comment
        }
    }
}

function ramenForm(){
    newName = document.getElementById("new-name")
    newStore = document.getElementById("new-restaurant")
    newImg = document.getElementById("new-image")
    newRating = document.getElementById("new-rating")
    newComment = document.getElementById("new-comment")
    document.addEventListener("submit",(submission)=>{
        submission.preventDefault()
        newRamen = document.createElement("img")
        newRamen.src = newImg.value
        newRamen.id = "7"
        menu.appendChild(newRamen)
        newRamen.addEventListener("click", (e) => {
            ramenName.innerText = newName.value
            ramenStore.innerText = newStore.value
            ramenRating.innerText = newRating.value
            ramenComment.innerText = newComment.value
            ramenImg.src = newImg.value
        })
        submission.reset();
    })

}

// https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg