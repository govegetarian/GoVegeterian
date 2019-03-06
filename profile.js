name = 'Darkwing Duck'
age = '18'
loc = 'Evanston'

//document.getElementById('profile-name').innerHTML = name;
//document.getElementById('form-name').value = name;
//document.getElementById('form-age').value = age;
//document.getElementById('form-location').value = loc;

$('#pro-sub').submit(function(e) {
    e.preventDefault();
});

function test() {
    var queryString = $('#profile-form').serialize();
    console.log(queryString);
}

function callback() {

    name = document.getElementById('form-name').value;
    age =  document.getElementById('form-age').value;
    loc = document.getElementById('form-location').value;
    console.log(name);

    document.getElementById('profile-name').innerHTML = name;
    document.getElementById('form-name').value = name;
    document.getElementById('form-age').value = age;
    document.getElementById('form-location').value = loc;
}


$(document).ready(function() {
    ele = document.getElementById('profile-form');
    document.getElementById('profile-name').innerHTML = name;
    document.getElementById('form-name').value = name;
    document.getElementById('form-age').value = age;
    document.getElementById('form-location').value = loc;
    console.log('Am I here');
})

