var input = Number(prompt("Please input card numbers..."));

function cardType(input) {
    var dict = {
        "American Express": [/^34/, /^37/],
        "Diners Club": [/^305/],
        "Discover": [/^601/],      
        "JCB": [/^35/],
        "MasterCard": [/^222/, /^51/, /^52/, /^53/, /^54/, /^55/],
        "Visa": [/^4/]
    }

    // loop over keys
    for (var key in dict) {
        // loop over key values in dict
        for (var i=0; i < dict[key].length; i++) {
            // check if input begins with regExp
            if (dict[key][i].test(input)) {
                alert("Your "+key+" card is valid");
                return true;
            }
        }
    }
    alert("Invalid card no.!");
}

function cardNumbers(input) {
    var result = 0;
    var array_input = input.toString().split("");
    
    // check if length of numbers is even
    if (Number(array_input.length)%2==0) {
        for (n=0; n < array_input.length; n+=2) {
            array_input[n] = Number(array_input[n])*2;
        }

        array_input = array_input.join("");

        for (i=0; i < array_input.length; i++) {
            result += parseInt(array_input[i], 10);
        }
        return result%10==0;
    }


    // check if length of numbers is odd
    else if (Number(array_input.length)%2==1 && array_input.length!=1) {
        for (n=1; n < array_input.length; n+=2) {
            array_input[n] = Number(array_input[n])*2;
        }

        array_input = array_input.join("");
        
        for (i=0; i < array_input.length; i++) {
            result += parseInt(array_input[i], 10);
        }
        return result%10==0;
    }

    // someone decides to forget their home training and card no. is negative
    else {
        return false;
    }
}

function Validate() {
    if (cardNumbers(input)) {
        cardType(input);
    }
    else {
        alert("Invalid card no.!");
    }
}