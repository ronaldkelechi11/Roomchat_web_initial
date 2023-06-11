document.addEventListener("submit", () => {
    var loggedInNickname = document.getElementById("nickname").value
    localStorage.setItem("nickname", loggedInNickname)
})

document.getElementById("goToSignUp").addEventListener("click", () => {
    console.log("GO TO SIGN UP");
    window.location = "/signup"
})