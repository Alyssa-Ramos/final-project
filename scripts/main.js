$(document).ready(function() {

//Social Implication Functions//

   $(".socImp1").hide();
   $(".socImp2").hide();
   $(".socImp3").hide();
   $(".socImp4").hide();


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

// function to remove and replace the map divided

function manageMapDiv() {
  $("#worldMap").remove();
  $("#worldMapHolder").html("<div id='worldMap'></div>");
}



/* MENU SELECT FUNCTION */
  // initialize the variable for all maps below
  var mymap;


   $( "#menu" ).change(function() {


    switch ($(this).val()) {
      case "BGD":

         // alert("Bangladesh");
         // run the function to remove and remake the div
        manageMapDiv();

        mymap = L.map('worldMap').setView([23.562489, 90.344352],6.00);

      L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cja3f9cd11m9g2smgswlty8bs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(mymap);

        //Bangladesh
        var marker1 = L.marker([23.562489,90.344352]).addTo(mymap);
        marker1.bindPopup("<b>Bangladesh</b> <br> In 2003, women workers in seven garment factories in Dhaka worked an average of  80 hours overtime per month.").openPopup();


        break;


        case "PAK":
          //Pakistan
          // run the function to remove and remake the div
         manageMapDiv();

          mymap = L.map('worldMap').setView([23.562489, 66.474645],6.00);

          L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cjalju9fvby0t2rs6t9kcc4mo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
              attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
              maxZoom: 18
          }).addTo(mymap);

          var marker3 = L.marker([30.338895,68.941716]).addTo(mymap);
          marker3.bindPopup("<b>Pakistan</b> <br> Pakistan ranks as one of the the countriesith the lowest minimum monthly wages").openPopup();

          break;
          case "THA":
            //Pakistan
            // run the function to remove and remake the div
           manageMapDiv();

            mymap = L.map('worldMap').setView([13.039180, 101.490117],5.00);

            L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cjalju9fvby0t2rs6t9kcc4mo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18
            }).addTo(mymap);

            var marker3 = L.marker([13.039180,101.490117]).addTo(mymap);
            marker3.bindPopup("<b>Thailand</b> <br> A firm in Thailand, GFB,  employed 1,500 workers </a>, nearly all of whom were women.").openPopup();

            break;

            case "CHN":
              //Pakistan
              // run the function to remove and remake the div
             manageMapDiv();

              mymap = L.map('worldMap').setView([34.621201, 104.136333],3.00);

              L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cjalju9fvby0t2rs6t9kcc4mo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
                  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                  maxZoom: 18
              }).addTo(mymap);

              var marker3 = L.marker([34.621200,104.136334]).addTo(mymap);
              marker3.bindPopup("<b>China</b> <br>More than 70 percent </a> of the labour force is female and young (usually under 25 years of age).").openPopup();

              break;
              case "PHL":
                //Pakistan
                // run the function to remove and remake the div
               manageMapDiv();

                mymap = L.map('worldMap').setView([12.867438, 121.765722],4.00);

                L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cjalju9fvby0t2rs6t9kcc4mo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                    maxZoom: 18
                }).addTo(mymap);

                var marker3 = L.marker([11.434999,123.371701]).addTo(mymap);
                marker3.bindPopup("<b>Philippines</b> <br>The Philippines doesn't have unionized factories or minimum wage for garment workers.").openPopup();

                break;
        } // end switch
  }); // end menu change
}); // end document ready
