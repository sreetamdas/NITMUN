
$(document).ready(function(){
    function submit() {
                
                    
                    
                    var IP_URL = "https://docs.google.com/forms/d/1bjr09s-miH_ypqnhOPRopXbzUHQXh3BcROx9RwkpZwg/formResponse?";
                    var Pathankot = encodeURIComponent($('#Pathankot').val());
                    var Pathankot_ID = "entry.279533091=";
                    var Paris = encodeURIComponent($('#Paris').val());
                    var Paris_ID = "&entry.681787272=";
                    var name = encodeURIComponent($('#Name').val());
                    var nameID = "&entry.347090093=";
                    var emailID = "&entry.1859297775=";
                    var email = encodeURIComponent($('#email').val());
                    var submitRef = '&submit=Submit';
                    var submitSOP = (IP_URL + Pathankot_ID + Pathankot + Paris_ID + Paris + nameID + name + emailID + email + submitRef);
        
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
   