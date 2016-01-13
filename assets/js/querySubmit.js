$(document).ready(function(){
    function submit() {
                
                    var name = encodeURIComponent($('#Name').val());
                    var email = encodeURIComponent($('#email').val());
                    var message = encodeURIComponent($('#message').val()); 
                    
                    var baseURL = 'https://docs.google.com/forms/d/1Oge9U6fuW4cft9H0Pbbc1szC6vUe5_rgNNyjlnoCzh0/formResponse?';
                    var submitRef = '&submit=Submit';
                    var nameID = "entry.240096453=";
                    var emailID = "&entry.1775688829=";
                    var messageID = "&entry.444972923=";
                    
                    if((name!="")&&(email!="")) {
                    var submitURL = (baseURL + nameID + name + emailID + email + messageID + message + submitRef);
                    console.log(submitURL);
                    $(this)[0].action=submitURL;
        
                    $('#queryModal').modal('show');
                    }
                }
    $("#queryForm").click(submit);
    
    var dialog = document.getElementById('queryModal');
    document.getElementById('querySubmitBtn').onclick = function() {
        dialog.show();
    };
    document.getElementById('queryModal').onclick = function() {
        dialog.close();
    };

    
});
    