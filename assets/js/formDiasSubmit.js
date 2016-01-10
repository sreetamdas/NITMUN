$(document).ready(function(){
    function submit() {
                
                    var name = encodeURIComponent($('#Name').val());
                    var email = encodeURIComponent($('#email').val());
                    var contactNumber = encodeURIComponent($('#contactNumber').val()); 
                    var college = encodeURIComponent($('#College').val());
                    var course = encodeURIComponent($('#course').val());
                    var year = encodeURIComponent($('#year').val());
                    var city = encodeURIComponent($('#city').val());
                    var emName = encodeURIComponent($('#emName').val());
                    var emRelation = encodeURIComponent($('#emRelation').val());
                    var emContact = encodeURIComponent($('#emContact').val());
                    var council = encodeURIComponent($('#council').val());
                    var reason = encodeURIComponent($('#reason').val());
                    var previouslyAttended = document.getElementById("previouslyAttended");
                    if(previouslyAttended.checked == true) {
                        previouslyAttended = "Yes";
                    }
                    else {
                        previouslyAttended = "No";
                    }
                    var experience = encodeURIComponent($('#experience').val());
                    var baseURL = 'https://docs.google.com/forms/d/1oLrTFZ-wBA9QxCC8RT9Cc1rPUSAMW_4lwyHgrbVSDcU/formResponse?';
                    var submitRef = '&submit=Submit';
                    var nameID = "entry.1662770628=";
                    var emailID = "&entry.644809204=";
                    var contactNumberID = "&entry.614469759=";
                    var collegeID = "&entry.802031262=";
                    var courseID = "&entry.614675263=";
                    var yearID = "&entry.1812149231=";
                    var cityID = "&entry.1643934507=";
                    var emNameID = "&entry.619796293=";
                    var emRelationID = "&entry.1736786550=";
                    var emContactID = "&entry.2021833209=";
                    var councilID = "&entry.146176427=";
                    var reasonID = "&entry.1812301822=";
                    var previouslyAttendedID = "&entry.862281140=";
                    var experienceID = "&entry.1458061965=";
                    
                    var submitURL = (baseURL + nameID + name + emailID + email + contactNumberID + contactNumber + collegeID + college + courseID + course + yearID + year + cityID + city + emNameID + emName + emRelationID + emRelation + emContactID + emContact + councilID + council + reasonID + reason + previouslyAttendedID + previouslyAttendedID + previouslyAttended + experienceID + experience + submitRef);
                    
        
                    if((name!="")&&(email!="")&&(contactNumber!="")&&(college!="")&&(college!="")&&(course!="")&&(city!="")&&(emContact!="")) {
                
                        console.log(submitURL);
                        $(this)[0].action=submitURL;
                        
                        
                        $("iframe").load(function(){
                            
                            window.location="SOP.html";
                        
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
    
   