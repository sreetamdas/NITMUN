$(document).ready(function () {
    function showPageElement(what) {
        var obj = typeof what == 'object' ? what : document.getElementById(what);

        obj.style.visibility = 'visible';
        return false;
    }

    /* var SC_dialog = document.getElementsByClassName('SC_dialog'); */

    var prefListSC = {
        NIL: '-select-',
        Canada: 'Canada',
        China: "People's Republic of China",
        Denmark: 'Denmark',
        DPRK: "Democratic People's Republic of Korea",
        Egypt: 'Egypt',
        France: 'France',
        Germany: 'Germany',
        Greece: 'Greece',
        India: 'India',
        Iran: 'Iran',
        Israel: 'Israel',
        Japan: 'Japan',
        Kazakhstan: 'Kazakhstan ',
        Malaysia: 'Malaysia',
        Mexico: 'Mexico',
        Nigeria: 'Nigeria',
        Norway: 'Norway',
        Pakistan: 'Pakistan',
        Philippines: 'Philippines',
        Russia: 'Russia',
        Saudi_Arabia: 'Saudi Arabia',
        South_Africa: 'South Africa',
        Sri_Lanka: 'Sri Lanka',
        Syria: 'Syria',
        Taiwan: 'Republic of China (Taiwan)',
        United_Arab_Emirates: 'United Arab Emirates',
        United_Kingdom: 'United Kingdom',
        USA: 'United States of America',
        Vietnam: 'Vietnam'
    };
    var prefListECOSOC = {
        NIL: '-select-',
        Angola: 'Angola',
        Austria: 'Austria',
        Bahrain: 'Bahrain',
        Bangladesh: 'Bangladesh',
        Belgium: 'Belgium',
        Bosnia_and_Herzegovina: 'Bosnia and Herzegovina ',
        Brazil: 'Brazil',
        Burundi: 'Burundi',
        Canada: 'Canada',
        Central_African_Republic: 'Central African Republic',
        China: "People’s Republic of China",
        Colombia: 'Colombia',
        Congo: 'Democratic Republic of the Congo',
        Cote_d_Ivoire: "Cote d'Ivoire",
        DPRK: "Democratic People's Republic of Korea",
        Egypt: 'Egypt',
        Eritrea: 'Eritrea',
        Ethiopia: 'Ethiopia',
        France: 'France',
        Germany: 'Germany',
        Ghana: 'Ghana',
        Hungary: 'Hungary',
        India: 'India',
        Indonesia: 'Indonesia',
        Iran: 'Iran',
        Iraq: 'Iraq',
        Israel: 'Israel',
        Italy: 'Italy',
        Japan: 'Japan',
        Jordan: 'Jordan',
        Kazakhstan: 'Kazakhstan',
        Kenya: 'Kenya',
        Kuwait: 'Kuwait',
        Kyrgyzstan: 'Kyrgyzstan',
        Liberia: 'Liberia',
        Mexico: 'Mexico',
        Nepal: 'Nepal',
        Netherlands: 'Netherlands',
        Nicaragua: 'Nicaragua',
        Nigeria: 'Nigeria',
        Oman: 'Oman',
        Pakistan: 'Pakistan',
        Palestine: 'Palestine',
        Poland: 'Poland',
        Portugal: 'Portugal',
        Qatar: 'Qatar',
        Republic_of_Korea: 'Republic of Korea',
        Russia: 'Russia',
        Saudi_Arabia: 'Saudi Arabia',
        Serbia_and_Kosovo: 'Serbia and Kosovo',
        Sierra_Leone: 'Sierra Leone',
        Somalia: 'Somalia',
        South_Africa: 'South Africa',
        Spain: 'Spain',
        Sri_Lanka: 'Sri Lanka',
        Sudan: 'Sudan',
        Sweden: 'Sweden',
        Switzerland: 'Switzerland',
        Syria: 'Syria',
        Turkey: 'Turkey',
        Turkmenistan: 'Turkmenistan',
        Uganda: 'Uganda',
        Ukraine: 'Ukraine',
        United_Arab_Emirates: 'United Arab Emirates',
        United_Kingdom: 'United Kingdom',
        USA: 'United States of America',
        Uzbekistan: 'Uzbekistan',
        Vietnam: 'Vietnam',
        Yemen: 'Yemen',
        Zimbabwe: 'Zimbabwe'
    };
    var prefListHP = {
        NIL: '-select-',
        Aberforth_Dumbeldore: 'Aberforth Dumbeldore',
        Alastor_Moody: 'Alastor Moody',
        Albus_Dumbeldore: 'Albus Dumbeldore',
        Amelia_Bones: 'Amelia Bones',
        Amycus_Carrow: 'Amycus Carrow',
        Antonin_Dolohov: 'Antonin Dolohov',
        Arthur_Weasley: 'Arthur Weasley',
        Bartemius_Crouch_Sr: 'Bartemius Crouch Sr.',
        Bellatrix_Lestrange: 'Bellatrix Lestrange',
        Cornelius_Fudge: 'Cornelius Fudge',
        Dolorus_Umbridge: 'Dolorus Umbridge',
        Horace_Slughorn: 'Horace Slughorn',
        Igor_Karkaroff: 'Igor Karkaroff',
        Kingsley_Shacklebolt: 'Kingsley Shacklebolt',
        Lucius_Malfoy: 'Lucius Malfoy',
        Minerva_McGonagal: 'Minerva McGonagall',
        Perciville_Weasley: 'Percival Weasley',
        Remus_Lupin: 'Remus Lupin',
        Rubeus_Hagrid: 'Rubeus Hagrid',
        Rufus_Scrimgeour: 'Rufus Scrimgeour',
        Severus_Snape: 'Severus Snape',
        Sirius_Black: 'Sirius Black',
        Sybill_Trelawney: 'Sybill Trelawney',
        Xenophilius_Lovegood: 'Xenophilius Lovegood'
    };


    $("#council").on({
        change: function () {
            console.log($(this).val());
            var council = ($(this).val());

            if (council == "SC") {

                var preference1 = document.getElementById('pref1');
                preference1.options.length = 0;
                for (index in prefListSC) {
                    preference1.options[preference1.options.length] = new Option(prefListSC[index], index);
                }
                var preference2 = document.getElementById('pref2');
                preference2.options.length = 0;
                for (index in prefListSC) {
                    preference2.options[preference2.options.length] = new Option(prefListSC[index], index);
                }
                var preference3 = document.getElementById('pref3');
                preference3.options.length = 0;
                for (index in prefListSC) {
                    preference3.options[preference3.options.length] = new Option(prefListSC[index], index);
                }

            } else if (council == "ECOSOC") {

                var preference1 = document.getElementById('pref1');

                preference1.options.length = 0;
                for (index in prefListECOSOC) {
                    preference1.options[preference1.options.length] = new Option(prefListECOSOC[index], index);
                }
                var preference2 = document.getElementById('pref2');
                preference2.options.length = 0;
                for (index in prefListECOSOC) {
                    preference2.options[preference2.options.length] = new Option(prefListECOSOC[index], index);
                }
                var preference3 = document.getElementById('pref3');
                preference3.options.length = 0;
                for (index in prefListECOSOC) {
                    preference3.options[preference3.options.length] = new Option(prefListECOSOC[index], index);
                }

            } else if (council == "HP") {

                var preference1 = document.getElementById('pref1');
                preference1.options.length = 0;
                for (index in prefListHP) {
                    preference1.options[preference1.options.length] = new Option(prefListHP[index], index);
                }
                var preference2 = document.getElementById('pref2');
                preference2.options.length = 0;
                for (index in prefListHP) {
                    preference2.options[preference2.options.length] = new Option(prefListHP[index], index);
                }
                var preference3 = document.getElementById('pref3');
                preference3.options.length = 0;
                for (index in prefListHP) {
                    preference3.options[preference3.options.length] = new Option(prefListHP[index], index);
                }

            } else {}
        }
    });

    $("#pref1").on({
        change: function () {
            var pre1 = ($(this).val());
            var selectobject = document.getElementById("pref2")
            for (var i = 0; i < selectobject.length; i++) {
                selectobject.options[i].disabled = false;
                if ((selectobject.options[i].value == pre1))
                    selectobject.options[i].disabled = true;
            }
            var selectobject = document.getElementById("pref3")
            for (var i = 0; i < selectobject.length; i++) {
                selectobject.options[i].disabled = false;
                if ((selectobject.options[i].value == pre1))
                    selectobject.options[i].disabled = true;
            }
        }
    });
    $("#pref2").on({
        change: function () {
            var pre2 = ($(this).val());
            var pre1 = ($('#pref1').val());
            var selectobject = document.getElementById("pref3")
            for (var i = 0; i < selectobject.length; i++) {
                selectobject.options[i].disabled = false;
                if ((selectobject.options[i].value == pre2) || (selectobject.options[i].value == pre1))
                    selectobject.options[i].disabled = true;
            }
        }
    });

    /*       2nd council preference    */

    $("#council_2").on({
        change: function () {
            console.log($(this).val());
            var council = ($(this).val());

            if (council == "SC") {

                var preference1 = document.getElementById('pref1_2');
                preference1.options.length = 0;
                for (index in prefListSC) {
                    preference1.options[preference1.options.length] = new Option(prefListSC[index], index);
                }
                var preference2 = document.getElementById('pref2_2');
                preference2.options.length = 0;
                for (index in prefListSC) {
                    preference2.options[preference2.options.length] = new Option(prefListSC[index], index);
                }
                var preference3 = document.getElementById('pref3_2');
                preference3.options.length = 0;
                for (index in prefListSC) {
                    preference3.options[preference3.options.length] = new Option(prefListSC[index], index);
                }

            } else if (council == "ECOSOC") {

                var preference1 = document.getElementById('pref1_2');

                preference1.options.length = 0;
                for (index in prefListECOSOC) {
                    preference1.options[preference1.options.length] = new Option(prefListECOSOC[index], index);
                }
                var preference2 = document.getElementById('pref2_2');
                preference2.options.length = 0;
                for (index in prefListECOSOC) {
                    preference2.options[preference2.options.length] = new Option(prefListECOSOC[index], index);
                }
                var preference3 = document.getElementById('pref3_2');
                preference3.options.length = 0;
                for (index in prefListECOSOC) {
                    preference3.options[preference3.options.length] = new Option(prefListECOSOC[index], index);
                }

            } else if (council == "HP") {

                var preference1 = document.getElementById('pref1_2');
                preference1.options.length = 0;
                for (index in prefListHP) {
                    preference1.options[preference1.options.length] = new Option(prefListHP[index], index);
                }
                var preference2 = document.getElementById('pref2_2');
                preference2.options.length = 0;
                for (index in prefListHP) {
                    preference2.options[preference2.options.length] = new Option(prefListHP[index], index);
                }
                var preference3 = document.getElementById('pref3_2');
                preference3.options.length = 0;
                for (index in prefListHP) {
                    preference3.options[preference3.options.length] = new Option(prefListHP[index], index);
                }

            } else {}
        }
    });

    $("#pref1_2").on({
        change: function () {
            var pre1 = ($(this).val());
            var selectobject = document.getElementById("pref2_2")
            for (var i = 0; i < selectobject.length; i++) {
                selectobject.options[i].disabled = false;
                if ((selectobject.options[i].value == pre1))
                    selectobject.options[i].disabled = true;
            }
            var selectobject = document.getElementById("pref3_2")
            for (var i = 0; i < selectobject.length; i++) {
                selectobject.options[i].disabled = false;
                if ((selectobject.options[i].value == pre1))
                    selectobject.options[i].disabled = true;
            }
        }
    });
    $("#pref2_2").on({
        change: function () {
            var pre2 = ($(this).val());
            var pre1 = ($('#pref1_2').val());
            var selectobject = document.getElementById("pref3_2")
            for (var i = 0; i < selectobject.length; i++) {
                selectobject.options[i].disabled = false;
                if ((selectobject.options[i].value == pre2) || (selectobject.options[i].value == pre1))
                    selectobject.options[i].disabled = true;
            }
        }
    });
    $("#council").on({
        change: function () {
            var council1 = ($(this).val());
            var selectobject = document.getElementById("council_2")
            for (var i = 0; i < selectobject.length; i++) {
                selectobject.options[i].disabled = false;
                if ((selectobject.options[i].value == council1))
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
        if (prevAtt.checked == true) {
            prevAtt = "Yes";
        } else {
            prevAtt = "No";
        }
        var AccMeals = document.getElementById("AccMeals");
        if (AccMeals.checked == true) {
            AccMeals = "Yes";
        } else {
            AccMeals = "No";
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
        var experienceID = "&entry.1458061965=";

        var submitURL = (baseURL + nameID + name + emailID + email + contactNumberID + contactNumber + collegeID + college + courseID + course + yearID + year + cityID + city + emNameID + emName + emRelationID + emRelation + emContactID + emContact + councilID + council + pref1ID + pref1 + pref2ID + pref2 + pref3ID + pref3 + council_2ID + council_2 + pref1_2ID + pref1_2 + pref2_2ID + pref2_2 + pref3_2ID + pref3_2 + prevAttID + prevAtt + AccMealsID + AccMeals + experienceID + experience + submitRef);

        if ((name != "") && (email != "") && (contactNumber != "") && (college != "") && (college != "") && (course != "") && (city != "") && (emContact != "") && (experience != "")) {

            console.log(submitURL);
            $(this)[0].action = submitURL;

            $("iframe").load(function () {

                var dialog = document.getElementById('queryModal');

                dialog.show();
                document.getElementById("formSubmitBtn").disabled = true;
                document.getElementById('formSubmitBtn').value = 'Submitted';
                /*document.getElementById('queryModal').onclick = function() {
                    dialog.close();
                };*/
            });

        }
    }
    $("#delegateReg").click(submit);
});
