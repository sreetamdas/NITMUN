$(document).ready(function(){
    function showPageElement(what)  {  
            var obj = typeof what == 'object'  
            ? what : document.getElementById(what);  
  
            obj.style.visibility = 'visible';  
            return false;  
            } 
    
   /* var SC_dialog = document.getElementsByClassName('SC_dialog'); */
    
    var prefListSC = {
        UnitedStates: 'United States of America',
        ValueB : 'Text B',
        ValueC : 'Text C'
    };
    var prefListHRC = {
        USA : 'USA',
        ValueB : 'Text B',
        ValueC : 'Text C'
    };
    var prefListHP = {
        Harry_Potter : 'Harry_Potter',
        ValueB : 'Text B',
        ValueC : 'Text C'
    };
    
      
   $("#council").on({
    change: function() {
        console.log($(this).val());
        var council = ($(this).val());
        
        if(council == "SC") {
            
            var preference1 = document.getElementById('pref1');
            preference1.options.length = 0;
            for(index in prefListSC) {
                preference1.options[preference1.options.length] = new Option(prefListSC[index], index);
            }
            var preference2 = document.getElementById('pref2');
            preference2.options.length = 0;
            for(index in prefListSC) {
                preference2.options[preference2.options.length] = new Option(prefListSC[index], index);
            }
            var preference3 = document.getElementById('pref3');
            preference3.options.length = 0;
            for(index in prefListSC) {
                preference3.options[preference3.options.length] = new Option(prefListSC[index], index);
            }
            
        }
        else if(council == "HRC") {
            
            var preference1 = document.getElementById('pref1');
            
            preference1.options.length = 0;
            for(index in prefListHRC) {
                preference1.options[preference1.options.length] = new Option(prefListHRC[index], index);
            }
            var preference2 = document.getElementById('pref2');
            preference2.options.length = 0;
            for(index in prefListHRC) {
                preference2.options[preference2.options.length] = new Option(prefListHRC[index], index);
            }
            var preference3 = document.getElementById('pref3');
            preference3.options.length = 0;
            for(index in prefListHRC) {
                preference3.options[preference3.options.length] = new Option(prefListHRC[index], index);
            }
            
        }
        else if(council == "HP") {
            
            var preference1 = document.getElementById('pref1');
            preference1.options.length = 0;
            for(index in prefListHP) {
                preference1.options[preference1.options.length] = new Option(prefListHP[index], index);
            }
            var preference2 = document.getElementById('pref2');
            preference2.options.length = 0;
            for(index in prefListHP) {
                preference2.options[preference2.options.length] = new Option(prefListHP[index], index);
            }
            var preference3 = document.getElementById('pref3');
            preference3.options.length = 0;
            for(index in prefListHP) {
                preference3.options[preference3.options.length] = new Option(prefListHP[index], index);
            }
            
        }
        else {}
    }
});
    
    $("#pref1").on({
    change: function() {
            var pre1 = ($(this).val());
            var selectobject=document.getElementById("pref2")
            for (var i=0; i<selectobject.length; i++){
                selectobject.options[i].disabled = false;
                if ((selectobject.options[i].value == pre1))
                selectobject.options[i].disabled = true;
            }
            var selectobject=document.getElementById("pref3")
            for (var i=0; i<selectobject.length; i++){
                selectobject.options[i].disabled = false;
                if ((selectobject.options[i].value == pre1))
                selectobject.options[i].disabled = true;
            } 
        }
    });
    $("#pref2").on({
    change: function() {
            var pre2 = ($(this).val());
            var pre1 = ($('#pref1').val());
            var selectobject=document.getElementById("pref3")
            for (var i=0; i<selectobject.length; i++){
                selectobject.options[i].disabled = false;
                if ((selectobject.options[i].value == pre2)||(selectobject.options[i].value == pre1))
                selectobject.options[i].disabled = true;
            }    
        }
    });

    /*       2nd council preference    */
    
       $("#council_2").on({
    change: function() {
        console.log($(this).val());
        var council = ($(this).val());
        
        if(council == "SC") {
            
            var preference1 = document.getElementById('pref1_2');
            preference1.options.length = 0;
            for(index in prefListSC) {
                preference1.options[preference1.options.length] = new Option(prefListSC[index], index);
            }
            var preference2 = document.getElementById('pref2_2');
            preference2.options.length = 0;
            for(index in prefListSC) {
                preference2.options[preference2.options.length] = new Option(prefListSC[index], index);
            }
            var preference3 = document.getElementById('pref3_2');
            preference3.options.length = 0;
            for(index in prefListSC) {
                preference3.options[preference3.options.length] = new Option(prefListSC[index], index);
            }
            
        }
        else if(council == "HRC") {
            
            var preference1 = document.getElementById('pref1_2');
            
            preference1.options.length = 0;
            for(index in prefListHRC) {
                preference1.options[preference1.options.length] = new Option(prefListHRC[index], index);
            }
            var preference2 = document.getElementById('pref2_2');
            preference2.options.length = 0;
            for(index in prefListHRC) {
                preference2.options[preference2.options.length] = new Option(prefListHRC[index], index);
            }
            var preference3 = document.getElementById('pref3_2');
            preference3.options.length = 0;
            for(index in prefListHRC) {
                preference3.options[preference3.options.length] = new Option(prefListHRC[index], index);
            }
            
        }
        else if(council == "HP") {
            
            var preference1 = document.getElementById('pref1_2');
            preference1.options.length = 0;
            for(index in prefListHP) {
                preference1.options[preference1.options.length] = new Option(prefListHP[index], index);
            }
            var preference2 = document.getElementById('pref2_2');
            preference2.options.length = 0;
            for(index in prefListHP) {
                preference2.options[preference2.options.length] = new Option(prefListHP[index], index);
            }
            var preference3 = document.getElementById('pref3_2');
            preference3.options.length = 0;
            for(index in prefListHP) {
                preference3.options[preference3.options.length] = new Option(prefListHP[index], index);
            }
            
        }
        else {}
    }
});
    
    $("#pref1_2").on({
    change: function() {
            var pre1 = ($(this).val());
            var selectobject=document.getElementById("pref2_2")
            for (var i=0; i<selectobject.length; i++){
                selectobject.options[i].disabled = false;
                if ((selectobject.options[i].value == pre1))
                selectobject.options[i].disabled = true;
            }
            var selectobject=document.getElementById("pref3_2")
            for (var i=0; i<selectobject.length; i++){
                selectobject.options[i].disabled = false;
                if ((selectobject.options[i].value == pre1))
                selectobject.options[i].disabled = true;
            } 
        }
    });
    $("#pref2_2").on({
    change: function() {
            var pre2 = ($(this).val());
            var pre1 = ($('#pref1_2').val());
            var selectobject=document.getElementById("pref3_2")
            for (var i=0; i<selectobject.length; i++){
                selectobject.options[i].disabled = false;
                if ((selectobject.options[i].value == pre2)||(selectobject.options[i].value == pre1))
                selectobject.options[i].disabled = true;
            }    
        }
    });

    
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
                    var pref1 = encodeURIComponent($('#pref1').val());
                    var pref2 = encodeURIComponent($('#pref2').val());
                    var pref3 = encodeURIComponent($('#pref3').val());
                    var council_2 = encodeURIComponent($('#council_2').val());
                    var pref1_2 = encodeURIComponent($('#pref1_2').val());
                    var pref2_2 = encodeURIComponent($('#pref2_2').val());
                    var pref3_2 = encodeURIComponent($('#pref3_2').val());
                    var prevAtt = document.getElementById("prevAtt");
                    if(prevAtt.checked == true) {
                        prevAtt = "Yes";
                    }
                    else {
                        prevAtt = "No";
                    }
                    var AccMeals = document.getElementById("AccMeals");
                    if(AccMeals.checked == true) {
                        AccMeals = "Yes";
                    }
                    else {
                        AccMeals = "No";
                    }
                    var TShirt = document.getElementById("TShirt");
                    if(TShirt.checked == true) {
                        TShirt = "Yes";
                    }
                    else {
                        TShirt = "No";
                    }
                    var experience = encodeURIComponent($('#experience').val());
                    var baseURL = 'https://docs.google.com/forms/d/1g07sGjfZql-Q9aD1S7-5XHZkVw002kuDgaDLW8BHBz0/formResponse?';
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
                    var pref1ID = "&entry.1812301822=";
                    var pref2ID = "&entry.2112648635=";
                    var pref3ID = "&entry.1594813934=";
                    var council_2ID = "&entry.1508581718=";
                    var pref1_2ID = "&entry.1924760976=";
                    var pref2_2ID = "&entry.1722093629=";
                    var pref3_2ID = "&entry.214455865=";
                    var prevAttID = "&entry.862281140=";
                    var AccMealsID = "&entry.1481386038=";
                    var TShirtID = "&entry.36233087=";
                    var experienceID = "&entry.1458061965=";
                    
                    var submitURL = (baseURL + nameID + name + emailID + email + contactNumberID + contactNumber + collegeID + college + courseID + course + yearID + year + cityID + city + emNameID + emName + emRelationID + emRelation + emContactID + emContact + councilID + council + pref1ID + pref1 + pref2ID + pref2 + pref3ID + pref3 + council_2ID + council_2 + pref1_2ID + pref1_2 + pref2_2ID + pref2_2 + pref3_2ID + pref3_2 + prevAttID + prevAtt+ AccMealsID + AccMeals+ TShirtID + TShirt + experienceID + experience + submitRef);
                    
                    if((name!="")&&(email!="")&&(contactNumber!="")&&(college!="")&&(college!="")&&(course!="")&&(city!="")&&(emContact!="")) {
                
                        console.log(submitURL);
                        $(this)[0].action=submitURL;
                        
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
    
    
   