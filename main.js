document.addEventListener('DOMContentLoaded', function () {
    /// Add user
    var name = document.getElementById('nameInput');
    var addUserButton = document.getElementById('addUser');
    var participants = document.getElementById('participants');
    function addUser() {
        participants.innerHTML += '<div class="participant">&#183; ' + name.value + '</div>';
    }
    addUserButton.onclick = addUser;

    /// Sending message
    var sendButton = document.getElementById('sendButton');
    var messageBox = document.getElementById('messages');
    function sendMessage(){
        var messageInput = document.getElementById('messageInput');
        const message = messageInput.value.trim();
        if(message.length === 0) return;
        messageBox.innerHTML += '<div class="message">' + message + '</div>';
        messageInput.value = '';
    }
    sendButton.onclick = sendMessage;
});
