// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("click",event => {
  console.log(event);
  if(event.target.classList.contains("like-glyph")){
    console.log("clicked on a heart");
    if (event.target.classList.contains("activated-heart")) {
      event.target.textContent = EMPTY_HEART;
      event.target.classList.remove("activated-heart");
    }
    else{
      mimicServerCall()
      .then(()=>{
        event.target.textContent = FULL_HEART;
        event.target.classList.add("activated-heart");
      })
      .catch(message=>{
        document.querySelector("#modal").classList.remove("hidden");
        document.querySelector("#modal-message").textContent = message;
        setTimeout(()=>document.querySelector("#modal").classList.add("hidden"),3000)
      })
    }
  }
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
