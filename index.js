function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

var i = 0;
var txt = "Here you can find suitable gyms for yourself, you can also find various equipment in gyms and learn a lot about them, and you can buy  sports items.";  
var speed = 30; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    if (i % 45 == 0)
        document.getElementById("demo").innerHTML += ("<br>");
    setTimeout(typeWriter, speed);
  }
}
  
function select() {
    $.get('https://my-json-server.typicode.com/Assylken/mockjson/db', function(data) {
      var x = document.getElementById("sel").value;
      var y = document.getElementById("sel3").value;
      var z = document.getElementById("sel2").value;
      var str = document.getElementById("string").value;
      str = str.toLowerCase();
      if (x == "one") {
            $("#par").empty();
            var $par = $('#par');
            for (var i = 0; i < 6; i++) {
              if (str == data.Gyms[i].name.toLowerCase()) {
                    $par.append("Id: " + data.Gyms[i].id + ' ');
                    $par.append("Name: " + data.Gyms[i].name + '<br></br>'); 
                    $par.append("Address: " + data.Gyms[i].address + '<br></br>');
                    $par.append("Phone: " + data.Gyms[i].phone + '<br></br>'); 
                    $par.append("Information: " + data.Gyms[i].info +'<br></br>');
                    var p = $('<iframe />', { src: data.Gyms[i].location, id: "location", width: 300}); p.appendTo($('#par')); 
              } else if (str == "") {
                  $par.append("Id: " + data.Gyms[i].id + ' ');
                  $par.append("Name: " + data.Gyms[i].name + '<br></br>'); 
                  $par.append("Address: " + data.Gyms[i].address + '<br></br>');
                  $par.append("Phone: " + data.Gyms[i].phone + '<br></br>'); 
                  $par.append("Information: " + data.Gyms[i].info +'<br></br>');
                  var p = $('<iframe />', { src: data.Gyms[i].location, id: "location", width: 300}); p.appendTo($('#par')); 
                  $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
              }
            }
        } else if (x == "two") {
            if (y == "ch1") {
              $("#par").empty();
              var $par = $('#par');
              for (var i = 0; i < 7; i++) {
                if (str == data.Equip[i].name.toLowerCase()) {
                $par.append("Id: " + data.Equip[i].id + ' '); $par.append("Name: " + data.Equip[i].name + '<br></br>'); 
                $par.append("Information: " + data.Equip[i].description +'<br></br>'); var p = $('<img />', { src: data.Equip[i].image, id: "images", width: 150 }); p.appendTo($('#par')); 
                $par.append('<br></br>');
                $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
                } else if (str == "") {
                  $par.append("Id: " + data.Equip[i].id + ' '); $par.append("Name: " + data.Equip[i].name + '<br></br>'); 
                  $par.append("Information: " + data.Equip[i].description +'<br></br>'); var p = $('<img />', { src: data.Equip[i].image, id: "images", width: 150 }); p.appendTo($('#par')); 
                  $par.append('<br></br>');
                  $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>'); 
                } 
              }
            } else if (y == "ch2") {
              $("#par").empty();
              var $par = $('#par');
              for (var i = 0; i < 7; i++) {
                if (str == data.Equip[i].name.toLowerCase()) {
                if (data.Equip[i].dest == "For hands") {
                  $par.append("Id: " + data.Equip[i].id + ' '); $par.append("Name: " + data.Equip[i].name + '<br></br>'); 
                  $par.append("Information: " + data.Equip[i].description +'<br></br>'); var p = $('<img />', { src: data.Equip[i].image, id: "images", width: 150 }); p.appendTo($('#par')); 
                  $par.append('<br></br>');
                  $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
                }
              } else if (str == "") {
              if (data.Equip[i].dest == "For hands") {
                $par.append("Id: " + data.Equip[i].id + ' '); $par.append("Name: " + data.Equip[i].name + '<br></br>'); 
                $par.append("Information: " + data.Equip[i].description +'<br></br>'); var p = $('<img />', { src: data.Equip[i].image, id: "images", width: 150 }); p.appendTo($('#par')); 
                $par.append('<br></br>');
                $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
            }
            }
            }
            }  else if (y == "ch3") {
              $("#par").empty();
              var $par = $('#par');
              for (var i = 0; i < 7; i++) {
                if (str == data.Equip[i].name.toLowerCase()) {
                  if (data.Equip[i].dest == "For abdominal") {
                    $par.append("Id: " + data.Equip[i].id + ' '); $par.append("Name: " + data.Equip[i].name + '<br></br>'); 
                    $par.append("Information: " + data.Equip[i].description +'<br></br>'); var p = $('<img />', { src: data.Equip[i].image, id: "images", width: 150 }); p.appendTo($('#par')); 
                    $par.append('<br></br>');
                    $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
                  }
                } 
              else if (str == "") {
                if (data.Equip[i].dest == "For abdominal") {
                  $par.append("Id: " + data.Equip[i].id + ' '); $par.append("Name: " + data.Equip[i].name + '<br></br>'); 
                  $par.append("Information: " + data.Equip[i].description +'<br></br>'); var p = $('<img />', { src: data.Equip[i].image, id: "images", width: 150 }); p.appendTo($('#par')); 
                  $par.append('<br></br>');
                  $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
              }
          }
         }
         } else if (y == "ch4") {
            $("#par").empty();
              var $par = $('#par');
              for (var i = 0; i < 7; i++) {
                if (str == data.Equip[i].name.toLowerCase()) {
                  if (data.Equip[i].dest == "For arms") {
                    $par.append("Id: " + data.Equip[i].id + ' '); $par.append("Name: " + data.Equip[i].name + '<br></br>'); 
                    $par.append("Information: " + data.Equip[i].description +'<br></br>'); var p = $('<img />', { src: data.Equip[i].image, id: "images", width: 150 }); p.appendTo($('#par')); 
                    $par.append('<br></br>');
                    $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
                  }
                } else if (str == "") {
                if (data.Equip[i].dest == "For arms") {
                  $par.append("Id: " + data.Equip[i].id + ' '); $par.append("Name: " + data.Equip[i].name + '<br></br>'); 
                  $par.append("Information: " + data.Equip[i].description +'<br></br>'); var p = $('<img />', { src: data.Equip[i].image, id: "images", width: 150 }); p.appendTo($('#par')); 
                  $par.append('<br></br>');
                  $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
              }
            }
        }
      }
    } else if (x == "three") {
      if (z == "price0") {
        $("#par").empty();
        var $par = $('#par');
        for (var i = 0; i < 8; i++) {
          if (str == data.Items[i].name.toLowerCase()) {
              $par.append("Id: " + data.Items[i].id + ' '); $par.append("Name: " + data.Items[i].name + '<br></br>'); $par.append("Cost: " + data.Items[i].cost + "$" + '<br></br>'); 
              var p = $('<img />', { src: data.Items[i].image, id: "images2", width: 150 }); p.appendTo($('#par')); 
              $par.append('<br></br>');
              $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
           } else if (str == "") {
                $par.append("Id: " + data.Items[i].id + ' '); $par.append("Name: " + data.Items[i].name + '<br></br>'); $par.append("Cost: " + data.Items[i].cost + "$"+  '<br></br>'); 
                var p = $('<img />', { src: data.Items[i].image, id: "images2", width: 150 }); p.appendTo($('#par')); 
                $par.append('<br></br>');
                $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
            }
          } 
      } else if (z == "price1") {
         $("#par").empty();
        var $par = $('#par');
        for (var i = 0; i < 8; i++) {
          if (str == data.Items[i].name.toLowerCase()) {
            if (data.Items[i].cost >= 1 && data.Items[i].cost <= 5) {
              $par.append("Id: " + data.Items[i].id + ' '); $par.append("Name: " + data.Items[i].name + '<br></br>'); $par.append("Cost: " + data.Items[i].cost + "$"+ '<br></br>'); 
              var p = $('<img />', { src: data.Items[i].image, id: "images2", width: 150 }); p.appendTo($('#par')); 
              $par.append('<br></br>');
              $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
           }
           } else if (str == "") {
              if (data.Items[i].cost >= 1 && data.Items[i].cost <= 5) {
                $par.append("Id: " + data.Items[i].id + ' '); $par.append("Name: " + data.Items[i].name + '<br></br>'); $par.append("Cost: " + data.Items[i].cost + "$"+'<br></br>'); 
                var p = $('<img />', { src: data.Items[i].image, id: "images2", width: 150 }); p.appendTo($('#par')); 
                $par.append('<br></br>');
                $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
            }
          }
      }
      } else if (z == "price2") {
        $("#par").empty();
        var $par = $('#par');
        for (var i = 0; i < 8; i++) {
        if (str == data.Items[i].name.toLowerCase()) {
          if (data.Items[i].cost >= 6 && data.Items[i].cost <= 10) {
            $par.append("Id: " + data.Items[i].id + ' '); $par.append("Name: " + data.Items[i].name + '<br></br>'); $par.append("Cost: " + data.Items[i].cost +"$"+ '<br></br>'); 
            var p = $('<img />', { src: data.Items[i].image, id: "images2", width: 150 }); p.appendTo($('#par')); 
            $par.append('<br></br>');
            $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
         }
         } else if (str == "") {
            if (data.Items[i].cost >= 6 && data.Items[i].cost <= 10) {
              $par.append("Id: " + data.Items[i].id + ' '); $par.append("Name: " + data.Items[i].name + '<br></br>'); $par.append("Cost: " + data.Items[i].cost +"$"+ '<br></br>'); 
              var p = $('<img />', { src: data.Items[i].image, id: "images2", width: 150 }); p.appendTo($('#par')); 
              $par.append('<br></br>');
              $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
        }
      }
    }
    } else if (z == "price3") {
      $("#par").empty();
      var $par = $('#par');
      for (var i = 0; i < 8; i++) {
        if (str == data.Items[i].name.toLowerCase()) {
          if (data.Items[i].cost >= 11 && data.Items[i].cost <= 15) {
            $par.append("Id: " + data.Items[i].id + ' '); $par.append("Name: " + data.Items[i].name + '<br></br>'); $par.append("Cost: " + data.Items[i].cost + "$"+'<br></br>'); 
            var p = $('<img />', { src: data.Items[i].image, id: "images2", width: 150 }); p.appendTo($('#par')); 
            $par.append('<br></br>');
            $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
         } }else if (str == "") {
            if (data.Items[i].cost >= 11 && data.Items[i].cost <= 15) {
              $par.append("Id: " + data.Items[i].id + ' '); $par.append("Name: " + data.Items[i].name + '<br></br>'); $par.append("Cost: " + data.Items[i].cost +"$"+ '<br></br>'); 
              var p = $('<img />', { src: data.Items[i].image, id: "images2", width: 150 }); p.appendTo($('#par')); 
              $par.append('<br></br>');
              $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
          }
        
      }
      }
     } else if (z == "price4") {
      $("#par").empty();
      var $par = $('#par');
      for (var i = 0; i < 8; i++) {
        if (str == data.Items[i].name.toLowerCase() ) {
          if (data.Items[i].cost >= 16 && data.Items[i].cost <= 20) {
            $par.append("Id: " + data.Items[i].id + ' '); $par.append("Name: " + data.Items[i].name + '<br></br>'); $par.append("Cost: " + data.Items[i].cost + "$"+'<br></br>'); 
            var p = $('<img />', { src: data.Items[i].image, id: "images2", width: 150 }); p.appendTo($('#par')); 
            $par.append('<br></br>');
            $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
         } } else if (str == "") {
            if (data.Items[i].cost >= 16 && data.Items[i].cost <= 20) {
              $par.append("Id: " + data.Items[i].id + ' '); $par.append("Name: " + data.Items[i].name + '<br></br>'); $par.append("Cost: " + data.Items[i].cost + "$"+'<br></br>'); 
              var p = $('<img />', { src: data.Items[i].image, id: "images2", width: 150 }); p.appendTo($('#par')); 
              $par.append('<br></br>');
              $par.append("---------------------------------------------------------------------------------------------------------------------------------------------------" + '<br></br>');
          }
        }
    }
  }
}
    });
}
  

function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "Your Email Address in Valid.";
      text.style.color = "#00ff00";
  
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.innerHTML = "Please Enter Valid Email Address.";
      text.style.color = "#ff0000";
    }
}

function passwordCheck() {
  var pass = document.getElementById("pass").value;
  var text = document.getElementById("text2");
  var regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  if (pass.match(regex)) {
    text.innerHTML = "Your password is correct.";
    text.style.color = "#00ff00";
  } else {
    text.innerHTML = "Your password is not correct.";
    text.style.color = "#ff0000";
  }
}
