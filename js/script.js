var ham = document.getElementById('ham')
    cross = document.getElementById('cross')
    slider = document.getElementById('slider');

    ham.addEventListener('click', function(){
        slider.style.display = "block";
      });
    cross.addEventListener('click', function(){
      slider.style.display = "none";
    });
