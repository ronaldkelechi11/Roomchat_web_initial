function run() {

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET", "/home/api", true);

    xhr.send();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            let messages = JSON.parse(this.responseText)

            let messageList = ""
            var divToSelect = ""
            var currentNickname = localStorage.getItem("nickname")
            for (let item of messages) {
                if (item.nickname == currentNickname) {
                    divToSelect = "itemSent"
                }
                else {
                    divToSelect = "itemRecieved"
                }
                messageList += `
                <div class="${divToSelect}">
                <div class="nickname">${item.nickname}</div>
                <div class="mainText">${item.message}</div>
                </div>
                `;
            }
            document.querySelector(".messageList").innerHTML = messageList
        }
    });

}

run()

function signOut() {
    var currentNickname = localStorage.removeItem("nickname")
    window.location = "/signin"
}

function sendMessage() {
    var currentNickname = localStorage.getItem("nickname")
    var roomname = localStorage.getItem("roomname")
    var messageText = document.getElementById("typeMessage").value
    if (currentNickname == null) {
        alert("No account is signed in")
        window.location = "/signin"
    }
    else {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("message", messageText);
        urlencoded.append("nickname", currentNickname);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("/home", requestOptions)
            .then(result => window.location = "/home/" + roomname)
            .catch(error => console.log('error', error));
    }
}