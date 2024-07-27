function sendEmail(){
    var messege = document.getElementById("messege-input").value;
    var emailTitle = document.getElementById("title-input").value;
    var emailLink = "mailto:khattabkhaleel4@gmail.com?subject1="+ emailTitle +"&body="+encodeURIComponent(messege);
    window.location.href = emailLink;
}