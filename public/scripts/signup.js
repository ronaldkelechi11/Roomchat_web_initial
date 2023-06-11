document.addEventListener("submit", () => {
    localStorage.setItem("nickname", document.getElementById("nickname").value)
})

document.getElementById("goToSignIn").addEventListener("click", () => {
    window.location = "/signin"
})