var pullDisplay = document.getElementById('request').addEventListener('click', show);

function show(){
    document.getElementById('request-dropdown').style.display = 'block';
    document.getElementById('issue-dropdown').style.display = 'none';
}

var pullDisplay = document.getElementById('issue').
addEventListener('click', hide);

function hide(){
    document.getElementById('issue-dropdown').style.display = 'block';
    document.getElementById('request-dropdown').style.display ='none';
}


// var scrollable = document.getElementById('scrollable').addEventListener('mouseover', scroll);

// function scroll(){
//     document.getElementById('scrollable').style.overflow = 'scroll';
//     document.getElementById('scrollable').style.overflow='auto';
// }

