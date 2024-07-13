"use strict";

window.onload = function() {
    var button = document.getElementById("time");
    setInterval(function(){
        button.click();
    },1000);
}

var time_el = document.getElementById("time");

time_el.onclick = function(){
    var date = new Date();
    time_el.innerHTML = "Date:- " + date.toLocaleDateString() + "<br>" + "Time:- " + date.toLocaleTimeString();
}

let httpRequest = new XMLHttpRequest();

var el =  document.getElementById("empty");

let su = document.getElementById('submit');

su.onclick = () => {
    alert('Database Connection is not possible on GitHub');
    alert('Download all files then run SQL file on local machine, to see the working Login dashboard');
}

window.addEventListener("load", function () {
    var login_form = document.getElementById("form");
    login_form.addEventListener("submit", function (event) {
        var XHR = new XMLHttpRequest();
        var form_data = new FormData(login_form);

        // On success
        XHR.addEventListener("load", login_success);

        // On error
        XHR.addEventListener("error", on_error);

        // Set up request
        XHR.open("POST", "../getdata.php");

        // Form data is sent with request
        XHR.send(form_data);

        event.preventDefault();
    });
});

var login_success = function (event) {
    var response = JSON.parse(event.target.responseText);
    if (response.success) {
        alert(response.message + " Welcome " + response.name);
        console.log(response.message);
        window.location.href = "https://sanjayrai98.github.io/auto_bg_color_changer/";
    } else {
        alert(response.message);
        console.log(response.message);
    }
};

var on_error = function (event) {
    alert('Oops! Something went wrong.');
};

const changeBtn = document.getElementById("changeUrl");
const demo = document.getElementById("demo");

changeBtn.addEventListener("click", changeUrl);

function changeUrl(){
  window.history.pushState({}, "", "https://google.com");

  const currentUrl = window.location.href;
  demo.innerHTML = currentUrl;
}
