
$(document).ready(function(){
    function submit() {
                
                    
                    
                    var IP_URL = "https://docs.google.com/forms/d/1ukdCPpEJeu-L7Zc7NGA5xgHQCSopy-t1NLRGfXaxMtU/formResponse?";
                    var Delhi = encodeURIComponent($('#Delhi').val());
                    var Delhi_ID = "entry.279533091=";
                    var Modi = encodeURIComponent($('#Modi').val());
                    var Modi_ID = "&entry.681787272=";
                    var name = encodeURIComponent($('#Name').val());
                    var nameID = "&entry.648976403=";
                    var emailID = "&entry.1462692538=";
                    var email = encodeURIComponent($('#email').val());
                    var submitRef = '&submit=Submit';
                    var submitSOP = (IP_URL + Delhi_ID + Delhi + Modi_ID + Modi + nameID + name + emailID + email + submitRef);
        
                    if((name!="")&&(email!="")) {
                
                        console.log(submitSOP);
                        $(this)[0].action=submitSOP;
                        $("iframe").load(function(){
                            
                            window.location="IPQ2.html";
                        
                        });
                    }
                }
    $("#delegateReg").click(submit);
    
    
    
    
});
    