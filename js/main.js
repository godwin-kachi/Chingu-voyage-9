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

var hour = now.getHours();
hour = hour % 12;
hour = hour ? hour : 12; // This should return 12 for 00 hours

 document.getElementById('hour').innerHTML = hour;

var minute = now.getMinutes();

if (parseInt(minute) < 10) {
    minutes = "0" + minute;
    document.getElementById('minute').innerHTML = minutes;

} else{
     minutes = minute;
document.getElementById('minute').innerHTML = minutes;
}



if (hour >= 12) {
    document.getElementById('session').innerHTML = "pm";
}else{
    document.getElementById('session').innerHTML = 'am';
}


// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//      hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = hours + ':' + minutes + ' ' + ampm;
//     return strTime;
//   }
  
//   console.log(formatAMPM(new Date));