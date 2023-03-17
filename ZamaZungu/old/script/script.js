
function ham(){
    var ham = document.getElementById('ham');
    var Mobile = document.getElementById('mobile-none');

    ham.addEventListener('click', function(){
        Mobile.style.display = "block";
        Mobile.style.width = "80%";
        // Mobile.style.display = "block";

    })
}
function cross(){
    var cross = document.getElementById('cross');
    var Mobile = document.getElementById('mobile-none');

    cross.addEventListener('click', function(){
        // Mobile.style.display = "None";
        Mobile.style.width = "0";
    })
}


ham();
cross();