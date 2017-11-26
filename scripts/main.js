$(document).ready(function() {

// function to hide all divs | Do I need this???


  //function hideAll() {
    //$('#elephantStuff').hide();
    //$('#rhinoStuff').hide();
    //$('#zebraStuff').hide();
    //$('#lionStuff').hide();
//  }

  // run that function right away
  //hideAll();


  // when any animal is clicked, make the suitable div appear
  $('.menu').click(function() {

    // but first, hide all the divs to ensure that
    // only one will be open, ever

    //hideAll();

    // here is a switch statement - this was in Codecademy
    // "Control Flow" lesson 7

    // we can get the ID of the thing that was clicked -
    switch ($(this).attr("id")) {
      case "Bangladesh":
        $('#BGD').show();
        var mymap = L.map('worldMap').setView([16.679590, 66.474645],2.00);
        //Bangladesh
        var marker1 = L.marker([23.562489,90.344352]).addTo(mymap);

        L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cja3f9cd11m9g2smgswlty8bs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(mymap);

        marker1.bindPopup("<b>[h2]</b> <br> [insert fact]").openPopup();
        break;

      case "Pakistan":
        $('#PAK').show(
          marker2.bindPopup("<b>[h2]</b> <br>[insert fact]").openPopup();
        );
        break;
      case "Thailand":
        $('#THA').show(marker3.bindPopup("<b>[h2]</b> <br>[insert fact]").openPopup();
        );
        break;
      case "China":
        $('#CHN').show(marker4.bindPopup("<b>[h2]</b> <br>[insert fact]".openPopup();
        );
        break;
        case "Philippines":
          $('#PHL').show(marker5.bindPopup("<b>[h2]</b> <br>[insert fact]".openPopup();
          );
          break;
    }
  }); // end of function for clicking


});
