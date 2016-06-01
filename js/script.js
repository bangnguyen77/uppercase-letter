


$(document).ready(function () {
  $("#uppercase form").submit(function (event) {
    var messageInput = $("input#message").val();
    messageInput=messageInput.toUpperCase();
    $(".yell").text(messageInput);
    nameInput=nameInput.toUpperCase();

    event.preventDefault();
  });

});
