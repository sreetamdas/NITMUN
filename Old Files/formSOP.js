$(document).ready(function(){
    function submit() {
                
                    
                    
                    var SOP_URL = "https://docs.google.com/forms/d/1JSKK3-LZnEq5fODN4yR_RcHK2sy5f_k_hypWu1UDf40/formResponse?";
                    var SOP = encodeURIComponent($('#SOP').val());
                    var SOP_ID = "entry.639628066=";
                    var name = encodeURIComponent($('#Name').val());
                    var nameID = "&entry.403326776=";
                    var emailID = "&entry.175718081=";
                    var email = encodeURIComponent($('#email').val());
                    var submitRef = '&submit=Submit';
                    var submitSOP = (SOP_URL + SOP_ID + SOP + nameID + name + emailID + email + submitRef);
        
                    if((name!="")&&(email!="")) {
                
                        console.log(submitSOP);
                        $(this)[0].action=submitSOP;
                        
                        
                        $("iframe").load(function(){
                            

                        var dialog = document.getElementById('queryModal');
                        
                            dialog.show();
                        
                        document.getElementById('queryModal').onclick = function() {
                            dialog.close();
                        };
                        });
                    }
                    
                }
    $("#delegateReg").click(submit);
    
    
    
    
});
    
$(document).ready(function() {

    var text_max = 1700;
    $('#divSOP').html(text_max + ' characters remaining');

    $('#SOP').keyup(function() {
        var text_length = $('#SOP').val().length;
        var text_remaining = text_max - text_length;

        $('#divSOP').html(text_remaining + ' characters remaining');
    }); 
    
});
    
   