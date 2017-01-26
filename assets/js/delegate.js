$(document).ready(function () {
    function showPageElement(what) {
        var obj = typeof what == 'object' ? what : document.getElementById(what);

        obj.style.visibility = 'visible';
        return false;
    }

    /* var SC_dialog = document.getElementsByClassName('SC_dialog'); */

    var prefListSC = {
        NIL: '-select-',
        Afghanistan: 'Afghanistan',
        Australia: 'Australia',
        Austria: 'Austria',
        Bolivia: 'Bolivia',
        Canada: 'Canada',
        China: 'China',
        Egypt: 'Egypt',
        Ethiopia: 'Ethiopia',
        France: 'France',
        Germany: 'Germany',
        India: 'India',
        Iraq: 'Iraq',
        Israel: 'Israel',
        Italy: 'Italy',
        Japan: 'Japan',
        Kazakhstan: 'Kazakhstan',
        Kenya: 'Kenya',
        Malaysia: 'Malaysia',
        New_Zealand: 'New Zealand',
        Pakistan: 'Pakistan',
        Russia: 'Russia',
        Saudi_Arabia: 'Saudi Arabia',
        Senegal: 'Senegal',
        Somalia: 'Somalia',
        South_Africa: 'South Africa',
        South_Korea: 'South Korea',
        Spain: 'Spain',
        Sweden: 'Sweden',
        Syria: 'Syria',
        The_United_Kingdom: 'The United Kingdom',
        The_United_States_of_America: 'The United States of America',
        Ukraine: 'Ukraine',
        Uruguay: 'Uruguay',
        Venezuela: 'Venezuela'
    };
    var prefListSOCHUM = {
        NIL: '-select-',
        Afghanistan: 'Afghanistan',
        Algeria: 'Algeria',
        Argentina: 'Argentina',
        Australia: 'Australia',
        Austria: 'Austria',
        Bangladesh: 'Bangladesh',
        Bolivia: 'Bolivia',
        Bosnia_And_Herzegovina: 'Bosnia And Herzegovina',
        Brazil: 'Brazil',
        Cameroon: 'Cameroon',
        Canada: 'Canada',
        China: 'China',
        Colombia: 'Colombia',
        Cyprus: 'Cyprus',
        DPRK: "Democratic People's Republic of Korea",
        Denmark: 'Denmark',
        Ecuador: 'Ecuador',
        Egypt: 'Egypt ',
        Ethiopia: 'Ethiopia',
        France: 'France',
        Germany: 'Germany ',
        Greece: 'Greece',
        Guatemala: 'Guatemala',
        Iceland: 'Iceland',
        India: 'India',
        Indonesia: 'Indonesia',
        Iran: 'Iran',
        Iraq: 'Iraq',
        Israel: 'Israel',
        Italy: 'Italy',
        Ivory_Coast: 'Ivory Coast',
        Japan: 'Japan',
        Kazakhstan: 'Kazakhstan',
        Libya: 'Libya',
        Malaysia: 'Malaysia',
        Mauritius: 'Mauritius',
        Mexico: 'Mexico',
        Netherlands: 'Netherlands',
        Nicaragua: 'Nicaragua',
        Nigeria: 'Nigeria',
        Pakistan: 'Pakistan',
        Palestine: 'Palestine',
        Peru: 'Peru',
        Poland: 'Poland',
        Portugal: 'Portugal',
        Russia: 'Russia',
        Saudi_Arabia: 'Saudi Arabia',
        Senegal: 'Senegal',
        Serbia: 'Serbia',
        Somalia: 'Somalia',
        South_Africa: 'South Africa',
        South_Korea: 'South Korea',
        Spain: 'Spain',
        Switzerland: 'Switzerland',
        Taiwan: 'Taiwan',
        Thailand: 'Thailand',
        The_Phillipines: 'The Phillipines',
        The_United_Kingdom: 'The United Kingdom',
        The_United_States_of_America: 'The United States of America',
        Turkey: 'Turkey',
        Ukraine: 'Ukraine',
        Uruguay: 'Uruguay',
        Venezuela: 'Venezuela',
        Vietnam: 'Vietnam',
        Yemen: 'Yemen'
    };
    var prefListNATO = {
        NIL: '-select-',
        Argentina: 'Argentina',
        Australia: 'Australia',
        Belgium: 'Belgium',
        Brazil: 'Brazil',
        Bulgaria: 'Bulgaria',
        Canada: 'Canada',
        China: 'China',
        Denmark: 'Denmark',
        Egypt: 'Egypt',
        France: 'France',
        Germany: 'Germany',
        Ghana: 'Ghana',
        Greece: 'Greece',
        Hungary: 'Hungary',
        India: 'India',
        Indonesia: 'Indonesia',
        Italy: 'Italy',
        Japan: 'Japan',
        Korea: 'Korea',
        Libya: 'Libya',
        New_Zealand: 'New Zealand',
        Norway: 'Norway',
        Poland: 'Poland',
        Romania: 'Romania',
        South_Africa: 'South Africa',
        Switzerland: 'Switzerland',
        The_Russian_Federation: 'The Russian Federation',
        The_United_Kingdom: 'The United Kingdom',
        The_United_States_of_America: 'The United States of America',
        Yugoslavia: 'Yugoslavia'
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

            } else if (council == "SOCHUM") {

                var preference1 = document.getElementById('pref1');

                preference1.options.length = 0;
                for (index in prefListSOCHUM) {
                    preference1.options[preference1.options.length] = new Option(prefListSOCHUM[index], index);
                }
                var preference2 = document.getElementById('pref2');
                preference2.options.length = 0;
                for (index in prefListSOCHUM) {
                    preference2.options[preference2.options.length] = new Option(prefListSOCHUM[index], index);
                }
                var preference3 = document.getElementById('pref3');
                preference3.options.length = 0;
                for (index in prefListSOCHUM) {
                    preference3.options[preference3.options.length] = new Option(prefListSOCHUM[index], index);
                }

            } else if (council == "NATO") {

                var preference1 = document.getElementById('pref1');
                preference1.options.length = 0;
                for (index in prefListNATO) {
                    preference1.options[preference1.options.length] = new Option(prefListNATO[index], index);
                }
                var preference2 = document.getElementById('pref2');
                preference2.options.length = 0;
                for (index in prefListNATO) {
                    preference2.options[preference2.options.length] = new Option(prefListNATO[index], index);
                }
                var preference3 = document.getElementById('pref3');
                preference3.options.length = 0;
                for (index in prefListNATO) {
                    preference3.options[preference3.options.length] = new Option(prefListNATO[index], index);
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

            } else if (council == "SOCHUM") {

                var preference1 = document.getElementById('pref1_2');

                preference1.options.length = 0;
                for (index in prefListSOCHUM) {
                    preference1.options[preference1.options.length] = new Option(prefListSOCHUM[index], index);
                }
                var preference2 = document.getElementById('pref2_2');
                preference2.options.length = 0;
                for (index in prefListSOCHUM) {
                    preference2.options[preference2.options.length] = new Option(prefListSOCHUM[index], index);
                }
                var preference3 = document.getElementById('pref3_2');
                preference3.options.length = 0;
                for (index in prefListSOCHUM) {
                    preference3.options[preference3.options.length] = new Option(prefListSOCHUM[index], index);
                }

            } else if (council == "NATO") {

                var preference1 = document.getElementById('pref1_2');
                preference1.options.length = 0;
                for (index in prefListNATO) {
                    preference1.options[preference1.options.length] = new Option(prefListNATO[index], index);
                }
                var preference2 = document.getElementById('pref2_2');
                preference2.options.length = 0;
                for (index in prefListNATO) {
                    preference2.options[preference2.options.length] = new Option(prefListNATO[index], index);
                }
                var preference3 = document.getElementById('pref3_2');
                preference3.options.length = 0;
                for (index in prefListNATO) {
                    preference3.options[preference3.options.length] = new Option(prefListNATO[index], index);
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
});