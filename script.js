
      
      function validate() 
      {
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var age = document.getElementById("age").value;
        var number = document.getElementById("number").value;
        var password = document.getElementById("password").value;
        
        if ( fname == "" || lname == "" || email == "" || age == "" || number == "" ||password == "")
         {
          alert("Please fill all the fields");
          return false;
        } 
        else if (fname.match(/^[a-zA-Z]+$/) == null)
         {
          alert("Please enter a valid first name");
          return false;
        } 
        else if (lname.match(/^[a-zA-Z]+$/) == null)
         {
          alert("Please enter a valid last name");
          return false;
        }
         else if (email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/) == null)
          {
            alert("Please enter a valid email");
          return false;
          }
          /*

          /^: Matches the start of the string.
[a-zA-Z0-9._-]+  : lower case ,upper case, number ani dot, underscore, dash sab huna payo, last ma + ko meaning jati time repeat huna ni milyo

@                : Matches the @ symbol
[a-zA-Z0-9.-]+   : lower case ,upper case, number ani dot,  dash sab huna payo, last ma + ko meaning jati time repeat huna ni milyo
.                : Matches a dot symbol 
[a-zA-Z]{2,}     : kamti ma two or more characters huna paryo that are letters (uppercase or lowercase).
$/               : Matches the end of the string.

          */
          
         else if (age < 8 || age > 60)
          {
          alert("Age should be between 8 to 60");
          return false;
        } 
        
        else if (password.length < 6)
         {
          alert("Password length should be greater than 6");
          return false;
        } 
        else if (isNaN(number) || number.length != 10)
         {
          alert("Please enter a valid number of length 10 ");
          return false;
        }
  else if ( password.charAt(0).match(/[a-zA-Z]/) && password.charAt(password.length - 1).match(/[0-9]/))
          {
          return radiovalidate();
        } 
        else {
          alert("Password should start with a letter and end with a digit");
          return false;
        }
      }

      function radiovalidate() 
      {
        var male = document.getElementById("male").checked;
        var female = document.getElementById("female").checked;
        var others = document.getElementById("others").checked;

        if (male == false && female == false && others == false)
         {
          alert("Please choose your gender");
          return false;
        } else
         {
          alert("Your form has been submitted");
          return true;
        }
      }

      // && vaneko tyo madhye euta true or false, || vaneko sabai true or false
  