function showCreateRoomInput() {
    document.getElementById("formNewRoom").style.visibility = "visible"

    setTimeout(() => {
        document.getElementById("formNewRoom").style.visibility = "hidden"
    }, 10000);
}
function showJoinRoomInput() {
    document.getElementById("formJoinRoom").style.visibility = "visible"

    setTimeout(() => {
        document.getElementById("formJoinRoom").style.visibility = "hidden"
    }, 10000);
}

function createNewRoom() {

    var newRoomName = document.getElementById("newRoomName").value
    if (newRoomName == "") {
        alert("New Room Name cannot be blank")
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();

    urlencoded.append("newRoomName", newRoomName);
    localStorage.setItem("roomname", newRoomName)

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/main/createRoom", requestOptions)
        .then(result => {
            window.location = "/home/" + newRoomName
        })
        .catch(error => console.log('error', error));

    return true;
}

function joinRoom() {
    var newRoomName = document.getElementById("newRoomName").value
    if (newRoomName == "") {
        alert("New Room Name cannot be blank")
    }
    localStorage.setItem("roomname", newRoomName)
}