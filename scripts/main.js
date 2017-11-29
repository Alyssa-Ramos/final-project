$(document).ready(function() {

/*
//Hide Map
   function hideAll() {
    $('#worldMap').hide();
    }
    // run that function right away
    hideAll(); */

//Social Implication Functions//
  function hideAll() {
   $(".socImp1").hide();
   $(".socImp2").hide();
   $(".socImp3").hide();
   $(".socImp4").hide();
   }
   hideAll();

  $('.socHead1').click(function() {
    $('.socImp1').slideToggle();
  });

  $('.socHead2').click(function() {
    $('.socImp2').slideToggle();
  });

  $('.socHead3').click(function() {
    $('.socImp3').slideToggle();
  });

  $('.socHead4').click(function() {
    $('.socImp4').slideToggle();
  });

//Environmental Implications Functions//

function hideAll() {
 $(".environImp1").hide();
 $(".environImp2").hide();
 }
 hideAll();

$('.environHead1').click(function() {
  $('.environImp1').slideToggle();
});

$('.environHead2').click(function() {
  $('.environImp2').slideToggle();
});

/* MENU SELECT FUNCTION */

   $( "#menu" ).change(function() {


    switch ($(this).val()) {
      case "BGD":

         // alert("Bangladesh");

        var mymap = L.map('worldMap').setView([23.562489, 66.474645],6.00);

      L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cja3f9cd11m9g2smgswlty8bs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(mymap);

        //Bangladesh
        var marker1 = L.marker([23.562489,90.344352]).addTo(mymap);
        marker1.bindPopup("<b>Bangladesh</b> <br> [insert fact]").openPopup();


        break;


        case "PAK":
          //Pakistan

          var mymap = L.map('worldMap1').setView([23.562489, 66.474645],6.00);

          L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cjalju9fvby0t2rs6t9kcc4mo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
              attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
              maxZoom: 18
          }).addTo(mymap);

          var marker3 = L.marker([30.338895,68.941716]).addTo(mymap);
          marker3.bindPopup("<b>Pakistan</b> <br>[insert fact]").openPopup();

          break;
        } // end switch
  }); // end menu change
}); // end document ready
