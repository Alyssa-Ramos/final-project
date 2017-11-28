$(document).ready(function() {

   function hideAll() {
    $('#worldMap').hide();
    }

  // run that function right away
  hideAll();



  /* $( "#menu select" ).change(function() {
    switch ($(this).val()) {
      case "BGD":
        alert("BGD");


        $('marker?').show(
        //var mymap = L.map('worldMap').setView([16.679590, 66.474645],2.00);
        //Bangladesh
        L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cja3f9cd11m9g2smgswlty8bs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(mymap);
        marker1.bindPopup("<b>[h2]</b> <br> [insert fact]").openPopup(););

        break;


        case "PAK":
          alert("PAK");
          /*
          $('#PAK').show(
            var marker3 = L.marker([30.338895,68.941716]).addTo(mymap);
            L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cja3f9cd11m9g2smgswlty8bs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18
            }).addTo(mymap);
            //Thailand
            marker3.bindPopup("<b>[h2]</b> <br>[insert fact]")
          );

          break;
        } // end switch
  }); // end menu change  */
}); // end document ready
