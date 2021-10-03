//Instant validation scripts for first page//

$(document).ready(function () {
    $('.email').change(function (event) {

        var email = $('.email').val()
        var feil_mail = $('.error_mail')
        feil_mail.empty();

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            console.log('mail good')
            document.getElementById('nextBtn').style.display = 'inline'
        } else {
            feil_mail.append('<div id = "fail"> You have entered an invalid email address! Enter your email address again to continue with the application form </div>');
            document.getElementById('nextBtn').style.display = 'none'
            event.preventDefault()
        }
    })
})

$(document).ready(function () {
    $('.name').change(function (event) {

        var name = $('.name').val()

        if (name.length < 40) {
            console.log('name good')
        } else {
            event.preventDefault()
            console.log('name fail')
            event.preventDefault()
        }
    })
})

$(document).ready(function () {
    $('.number').change(function (event) {

        var number = $('.number').val()
        var feil_number = $('.error_number')
        feil_number.empty();

        if (number.length >= 8) {
            console.log('number good')
            document.getElementById('nextBtn').style.display = 'inline'
        } else {
            feil_number.append('<div id = "fail"> You have entered an invalid number! Enter your number again to continue with the application form </div>');
            document.getElementById('nextBtn').style.display = 'none'
            event.preventDefault()
        }
    })
})


//Here is the function for submtion and validation before submiting form to formspree. The last tab-->
$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('clicked')

        var essay = $('.essay').val()
        var statusEl = $('.status')
        var btn = $('.submit')
        var optionalfieldEl = $('.optionalfield').val()
        var programEl = $('.program_exp').val()
        var other_studys = $('.other_feilds').val()
        statusEl.empty()

        $('.optionalfield').each(function () {
            if ($(this).val() == 'Not interested') {
                $(this).prop('disabled', true);
            }
        })

        $('.optionalfield').each(function () {
            if ($(this).val() != 'Not interested') {
                $(this).prop('disabled', false);
            }
        })


        $('.program_exp').each(function () {
            if ($(this).val() == '1') {
                $(this).prop('disabled', true);
            }
        })

        if (essay == "") {
            document.getElementById("msg_1").style.backgroundColor = "#ffdddd";
            document.getElementById("msg_2").style.backgroundColor = "#ffdddd";
            document.getElementById("msg_3").style.backgroundColor = "#ffdddd";
            statusEl.append('<div id = "fail"> - Error: All text fields are empty</div>')
            statusEl.append('<div id = "help"><b>Solution</b>: Answer all the questions. Then press submit again </div>')
        } else {
            event.preventDefault()
        }

        var list_1 = String(document.getElementById("msg_1").value);
        var list_2 = String(document.getElementById("msg_2").value);
        var list_3 = String(document.getElementById("msg_3").value);

        if ((list_1.length && list_2.length && list_3.length) <= 20 && (list_1.length && list_2.length && list_3.length) >= 1) {
            statusEl.append('<div id = "fail"> - Error: Not enough information in the text fields</div>')
            statusEl.append('<div id = "help"><b>Solution</b>: Write more! We want supplementary sentences. Then press submit again</div>')
            document.getElementById("msg_1").style.backgroundColor = "#ffdddd";
            document.getElementById("msg_2").style.backgroundColor = "#ffdddd";
            document.getElementById("msg_3").style.backgroundColor = "#ffdddd";
            console.log(list_1.length);
            console.log(list_2.length);
            console.log(list_3.length);
        } else {
            event.preventDefault()
        }

        if (document.getElementById('box').checked == false) {
            alert("You cannot submit your application unless check the 'accept information storage' box.");
        } else {
            event.preventDefault()
        }

        if (
            list_1.length >= 10 &&
            list_2.length >= 10 &&
            list_3.length >= 10 &&
            document.getElementById('box').checked == true
        ) {
            statusEl.html('<div id = "help"> processing application....... </div>')
            document.getElementById('regForm').submit()
            return false
        } else {
            event.preventDefault()
        }
    })
})

// function for the reset btn to reset the 'study program' tab
function sjekkdor(e) { //e er argument for event->hendelse// bruker variablene over her//
    var skjekk = e.target;

    if (skjekk.id == "reset") {
        document.getElementById('radio_1').checked = false;
        document.getElementById('radio_2').checked = false;
        document.getElementById('radio_3').checked = false;
        document.getElementById('radio_4').checked = false;
        document.getElementById('radio_5').checked = false;
        document.getElementById('radio_6').checked = false;
        document.getElementById('radio_7').checked = false;
        document.getElementById('radio_8').checked = false;
        document.getElementById('radio_9').checked = false;
        document.getElementById('radio_10').checked = false;
        document.getElementById('radio_11').checked = false;
    }
}


function reset_value(e) {
    var skjekk = e.target;

    if (skjekk.id == "reset") {
        document.getElementById('radio_1').disabled = false;
        document.getElementById('radio_2').disabled = false;
        document.getElementById('radio_3').disabled = false;
        document.getElementById('radio_4').disabled = false;
        document.getElementById('radio_5').disabled = false;
        document.getElementById('radio_6').disabled = false;
        document.getElementById('radio_7').disabled = false;
        document.getElementById('radio_8').disabled = false;
        document.getElementById('radio_9').disabled = false;
        document.getElementById('radio_10').disabled = false;
        document.getElementById('radio_11').disabled = false;

        var a = document.getElementById('others');
        var el = document.getElementById('other_feilds');
        a.removeChild(el);

    }
}

// function for validation that same posistions aren't choosen more than once. The 'choose posistions' tab
function check(e) { //e er argument for event->hendelse// bruker variablene over her//
    var value = Number(e.target.value);
    var sjekk = e.target.id;

    if (value == "Not interested") {
        sum += 0;
    }

    if (value == 1) {
        sum += 1;
        ones++;
        console.log(ones);
        document.getElementById(sjekk).style.backgroundColor = "#c49a6c";
        document.getElementById(sjekk).disabled = true;
        console.log(ones);
    }

    if (value == 2) {
        sum += 2;
        twos++;
        document.getElementById(sjekk).style.backgroundColor = "#c49a6c";
        document.getElementById(sjekk).disabled = true;
        console.log(twos);
    }

    if (value == 3) {
        sum += 3;
        threes++;
        document.getElementById(sjekk).style.backgroundColor = "#c49a6c";
        document.getElementById(sjekk).disabled = true;
        console.log(threes);
    }

    if (value == 4) {
        sum += 4;
        fours++;
        document.getElementById(sjekk).style.backgroundColor = "#c49a6c";
        document.getElementById(sjekk).disabled = true;
        console.log(fours);
    }

    if (value == 5) {
        sum += 5;
        fives++;
        document.getElementById(sjekk).style.backgroundColor = "#c49a6c";
        document.getElementById(sjekk).disabled = true;
        console.log(fives);
    }

    if (value == 6) {
        sum += 6;
        sixs++;
        document.getElementById(sjekk).style.backgroundColor = "#c49a6c";
        document.getElementById(sjekk).disabled = true;
        console.log(sixs);
    }

    if (value == 7) {
        sum += 7;
        sevens++;
        document.getElementById(sjekk).style.backgroundColor = "#c49a6c";
        document.getElementById(sjekk).disabled = true;
        console.log(threes);
    }

    if (value == 8) {
        sum += 8;
        eights++;
        document.getElementById(sjekk).style.backgroundColor = "#c49a6c";
        document.getElementById(sjekk).disabled = true;
        console.log(fours);
    }

    if (value == 9) {
        sum += 9;
        nines++;
        document.getElementById(sjekk).style.backgroundColor = "#c49a6c";
        document.getElementById(sjekk).disabled = true;
        console.log(fives);
    }

    if (value == 10) {
        sum += 10;
        tens++;
        document.getElementById(sjekk).style.backgroundColor = "#c49a6c";
        document.getElementById(sjekk).disabled = true;
        console.log(sixs);
    }

    if (value == 11) {
        sum += 11;
        elevens++;
        document.getElementById(sjekk).style.backgroundColor = "#c49a6c";
        document.getElementById(sjekk).disabled = true;
        console.log(sixs);
    }


    if (ones == 2) {
        alert("you have given positions the same priority.");
        document.getElementById(sjekk).selectedIndex = "0";
        document.getElementById(sjekk).style.backgroundColor = "#5c6664";
        document.getElementById(sjekk).disabled = false;
        console.log(sjekk);
        sum -= 1;
        ones -= 1;

    }

    if (twos == 2) {
        alert("you have given positions the same priority.");
        document.getElementById(sjekk).selectedIndex = "0";
        document.getElementById(sjekk).style.backgroundColor = "#5c6664";
        document.getElementById(sjekk).disabled = false;
        console.log(sjekk);
        sum -= 2;
        twos -= 1;
    }

    if (threes == 2) {
        alert("you have given positions the same priority.");
        document.getElementById(sjekk).selectedIndex = "0";
        document.getElementById(sjekk).style.backgroundColor = "#5c6664";
        document.getElementById(sjekk).disabled = false;
        console.log(sjekk);
        sum -= 3;
        threes -= 1;
    }

    if (fours == 2) {
        alert("you have given positions the same priority.");
        document.getElementById(sjekk).selectedIndex = "0";
        document.getElementById(sjekk).style.backgroundColor = "#5c6664";
        document.getElementById(sjekk).disabled = false;
        console.log(sjekk);
        sum -= 4;
        fours -= 1;
    }

    if (fives == 2) {
        alert("you have given positions the same priority.");
        document.getElementById(sjekk).selectedIndex = "0";
        document.getElementById(sjekk).style.backgroundColor = "#5c6664";
        document.getElementById(sjekk).disabled = false;
        console.log(sjekk);
        sum -= 5;
        fives -= 1;
    }

    if (sixs == 2) {
        alert("you have given positions the same priority.");
        document.getElementById(sjekk).selectedIndex = "0";
        document.getElementById(sjekk).style.backgroundColor = "#5c6664";
        document.getElementById(sjekk).disabled = false;
        console.log(sjekk);
        sum -= 6;
        sixs -= 1;
    }


    if (sevens == 2) {
        alert("you have given positions the same priority.");
        document.getElementById(sjekk).selectedIndex = "0";
        document.getElementById(sjekk).style.backgroundColor = "#5c6664";
        document.getElementById(sjekk).disabled = false;
        console.log(sjekk);
        sum -= 7;
        sevens -= 1;
    }

    if (eights == 2) {
        alert("you have given positions the same priority.");
        document.getElementById(sjekk).selectedIndex = "0";
        document.getElementById(sjekk).style.backgroundColor = "#5c6664";
        document.getElementById(sjekk).disabled = false;
        console.log(sjekk);
        sum -= 8;
        eights -= 1;
    }

    if (nines == 2) {
        alert("you have given positions the same priority.");
        document.getElementById(sjekk).selectedIndex = "0";
        document.getElementById(sjekk).style.backgroundColor = "#5c6664";
        document.getElementById(sjekk).disabled = false;
        console.log(sjekk);
        sum -= 9;
        nines -= 1;
    }

    if (tens == 2) {
        alert("you have given positions the same priority.");
        document.getElementById(sjekk).selectedIndex = "0";
        document.getElementById(sjekk).style.backgroundColor = "#5c6664";
        document.getElementById(sjekk).disabled = false;
        console.log(sjekk);
        sum -= 10;
        tens -= 1;
    }

    if (elevens == 2) {
        alert("you have given positions the same priority.");
        document.getElementById(sjekk).selectedIndex = "0";
        document.getElementById(sjekk).style.backgroundColor = "#5c6664";
        document.getElementById(sjekk).disabled = false;
        console.log(sjekk);
        sum -= 11;
        elevens -= 1;
    }

    /*console.log("sum: " + sum);*/
    /*
     if (sum == 6) {
       alert("You have choosen 3 positions. Press the reset button to change priority");
       document.getElementById("Project_m").disabled = true;
       document.getElementById("Deputy_pm").disabled = true;
       document.getElementById("Deputy_ce").disabled = true;
       document.getElementById("Chief_eng").disabled = true;
       document.getElementById("Head_mar").disabled = true;
       document.getElementById("Head_eco").disabled = true;
       document.getElementById("Group_ai").disabled = true;
       document.getElementById("Group_alp").disabled = true;
       document.getElementById("Group_har").disabled = true;
       document.getElementById("Group_per").disabled = true;
       document.getElementById("Group_con").disabled = true;
       sum = 0;
      }
      */
}

// function to reset 'the choose posistions' tab
function reset_prioity() {
    sum = 0;
    ones = 0;
    twos = 0;
    threes = 0;
    fours = 0
    fives = 0
    sixs = 0;
    sevens = 0;
    eights = 0;
    nines = 0;
    tens = 0;
    elevens = 0;

    document.getElementById("Project_m").disabled = false;
    document.getElementById("Deputy_pm").disabled = false;
    document.getElementById("Deputy_ce").disabled = false;
    document.getElementById("Chief_eng").disabled = false;
    document.getElementById("Head_mar").disabled = false;
    document.getElementById("Head_eco").disabled = false;
    document.getElementById("Group_ai").disabled = false;
    document.getElementById("Group_alp").disabled = false;
    document.getElementById("Group_har").disabled = false;
    document.getElementById("Group_per").disabled = false;
    document.getElementById("Group_con").disabled = false;

    document.getElementById("Project_m").selectedIndex = "0";
    document.getElementById("Deputy_pm").selectedIndex = "0";
    document.getElementById("Deputy_ce").selectedIndex = "0";
    document.getElementById("Chief_eng").selectedIndex = "0";
    document.getElementById("Head_mar").selectedIndex = "0";
    document.getElementById("Head_eco").selectedIndex = "0";
    document.getElementById("Group_ai").selectedIndex = "0";
    document.getElementById("Group_alp").selectedIndex = "0";
    document.getElementById("Group_har").selectedIndex = "0";
    document.getElementById("Group_per").selectedIndex = "0";
    document.getElementById("Group_con").selectedIndex = "0";


    document.getElementById("Project_m").style.backgroundColor = "#5c6664";
    document.getElementById("Deputy_pm").style.backgroundColor = "#5c6664";
    document.getElementById("Deputy_ce").style.backgroundColor = "#5c6664";
    document.getElementById("Chief_eng").style.backgroundColor = "#5c6664";
    document.getElementById("Head_mar").style.backgroundColor = "#5c6664";
    document.getElementById("Head_eco").style.backgroundColor = "#5c6664";
    document.getElementById("Group_ai").style.backgroundColor = "#5c6664";
    document.getElementById("Group_alp").style.backgroundColor = "#5c6664";
    document.getElementById("Group_har").style.backgroundColor = "#5c6664";
    document.getElementById("Group_per").style.backgroundColor = "#5c6664";
    document.getElementById("Group_con").style.backgroundColor = "#5c6664";

}

// everything below is functions to next and privious btn. To move between tabs

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName('tab')
    x[n].style.display = 'block'
    //... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById('prevBtn').style.display = 'none'
    } else {
      document.getElementById('prevBtn').style.display = 'inline'
    }
    if (n == 1 || n == 2 || n == 3 || n == 4) {
      document.getElementById('nextBtn').style.display = 'inline'
    }
    if (n == x.length - 1) {
      document.getElementById('nextBtn').style.display = 'none'
      document.getElementById('prevBtn').style.display = "inline";
    } else {
      document.getElementById('nextBtn').innerHTML = 'Next'
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
  }

  function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName('tab')
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false
    // Hide the current tab:
    x[currentTab].style.display = 'none'
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n
    // Otherwise, display the correct tab:
    showTab(currentTab)
  }

  //validates that tabs are working correct
  function validateForm() {
    // This function deals with validation of the form fields
    var x,
      y,
      i,
      valid = true
    x = document.getElementsByClassName('tab')
    y = x[currentTab].getElementsByTagName('input')
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == '') {
        // add an "invalid" class to the field:
        y[i].className += ' invalid'
        // and set the current valid status to false
        valid = false
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName('step')[currentTab].className +=
        ' finish'
    }
    return valid // return the valid status
  }

  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i,
      x = document.getElementsByClassName('step')
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(' active', '')
    }
    //... and adds the "active" class on the current step:
    x[n].className += ' active '
  }
