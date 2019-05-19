var pullDisplay = document.getElementById('request').addEventListener('click', show);

function show(){
    document.getElementById('request-dropdown').style.display = 'block';
    document.getElementById('githeader').textContent = 'GIT PR HISTORY';
    document.getElementById('issue-dropdown').style.display = 'none';
}

var pullDisplay = document.getElementById('issue').
addEventListener('click', hide);

function hide(){
    document.getElementById('issue-dropdown').style.display = 'block';
    document.getElementById('request-dropdown').style.display ='none';
    document.getElementById('githeader').textContent = 'GIT ISSUES HISTORY';
}


var months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
var now = new Date();
var thisMonth = months[now.getMonth()];
document.getElementById('month').innerHTML = thisMonth;

var today = now.getDate();
document.getElementById('day').innerHTML = today;

var year = now.getFullYear();
document.getElementById('year').innerHTML = year;

var hourCalc = now.getHours();
var hour = now.getHours()%12;
document.getElementById('hour').innerHTML = hour;

var minute = now.getMinutes();
document.getElementById('minute').innerHTML = minute;

if (hourCalc >= 12) {
    document.getElementById('session').innerHTML = "pm";
}else{
    document.getElementById('session').innerHTML = 'am';
}