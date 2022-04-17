function toggle_function(){
    //toggle change the iner html of the button
    var x = document.getElementById("appreance_toggle");
    if(x.innerHTML === "Dark Mode"){
        document.getElementById('appreance_toggle').className = 'btn btn-dark';

        document.getElementById('atas').style.backgroundColor = 'white';
        document.getElementById('atas').style.color = 'black';

        document.getElementById('tengah').style.backgroundColor = 'white';
        document.getElementById('tengah').style.color = 'black';
        document.getElementById('tes-grid').style.color = 'black';

        document.getElementById('bawah').style.backgroundColor = 'white';
        document.getElementById('bawah').style.color = 'black';

        x.innerHTML = "Light Mode";
    }else{
        document.getElementById('appreance_toggle').className = 'btn btn-light';

        document.getElementById('atas').style.backgroundColor = '#282828';
        document.getElementById('atas').style.color = 'white';

        document.getElementById('tengah').style.backgroundColor = '#282828';
        document.getElementById('tengah').style.color = 'white';
        document.getElementById('tes-grid').style.color = 'black';

        document.getElementById('bawah').style.backgroundColor = '#282828';
        document.getElementById('bawah').style.color = 'white';
      x.innerHTML = "Dark Mode";
    }
  }