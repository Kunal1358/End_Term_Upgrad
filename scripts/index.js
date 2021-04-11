
function fun(){
    if(document.getElementById("country").value.length == 0)
        {
            alert("All fields are mandatory");
            return false;
        }
var valueDate = document.getElementById('Date').value;

    if ( valueDate== null || valueDate== '')
        {
            alert('Starting date is empty');
            return false;
        }

var valueDate = document.getElementById('Date2').value;
    if ( valueDate== null || valueDate== '')
        {
            alert('End date is empty');
            return false;
        }
}

function fun1()
{

}

