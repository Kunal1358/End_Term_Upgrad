function fun(){

    if(document.getElementById("country").value.length == 0)
        {
            alert("All fields are mandatory");
            return false;
        }
var valueDate = document.getElementById('Date1').value;
    if ( valueDate== null || valueDate== '')
        {
            alert('Starting date is empty');
            return false;
        }

var valueDate2 = document.getElementById('Date2').value;
    if ( valueDate2== null || valueDate2== '')
        {
            alert('End date is empty');
            return false;
        }

var date1 = document.getElementById('Date1').value;
var date2 = document.getElementById('Date2').value;

    if ( date2<= date1)
    {
        alert('Start date cannot be equal to or later than today' );
        return false;
    }

add();

}


function add() {
    var counrty = document.getElementById("country").value;
    var from = document.getElementById("Date1").value;
    var to = document.getElementById("Date2").value;
    var xhttp1 = new XMLHttpRequest();
    var url = "https://api.covid19api.com/country/" + counrty + "?from=" + from + "T00:00:00Z&to=" + to + "T00:00:00Z";

    xhttp1.open("GET", url, true);
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var list = JSON.parse(this.responseText);
            var count_case = 0;
            var count_death = 0;
            var count_active = 0;
            for (var i = 0; i < list.length; i++) {
                count_case = count_case + list[i].Confirmed;
                count_active = count_active + list[i].Active;
                count_death = count_death + list[i].Deaths;
                create(count_case, count_active, count_death);
            }
        }
    };
    xhttp1.send();
}

function create(cases, active, death){
    var  divc = document.createElement("div");
    divc.setAttribute("id", "card");

    var a = document.createElement("p");
    a.innerHTML="Confirmed Cases:"+cases;
    divc.appendChild(a);

    var b = document.createElement("p");
    b.innerHTML="Active Cases:"+active;
    divc.appendChild(b);

    var c = document.createElement("p");
    c.innerHTML="Deaths :"+death;
    divc.appendChild(c);

    document.getElementById("content").appendChild(divc);
}
