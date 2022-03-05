var ham = document.getElementById("ham"),
    cross = document.getElementById("cross"),
    mobile = document.getElementById("mobile");


ham.addEventListener('click', () =>{
    mobile.style = "left:30%";
})


cross.addEventListener('click', () =>{
    mobile.style = "left:100%";
})