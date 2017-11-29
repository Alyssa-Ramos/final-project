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



  $('#menu').click(function() {

    // but first, hide all the divs to ensure that
    // only one will be open, ever

    //hideAll();

    // here is a switch statement - this was in Codecademy
    // "Control Flow" lesson 7

    // we can get the ID of the thing that was clicked -


    switch ($(this).attr("id")) {
      case "Bangladesh":
        $('#BGD').show(
        //var mymap = L.map('worldMap').setView([16.679590, 66.474645],2.00);
        //Bangladesh
        var marker1 = L.marker([23.562489,90.344352]).addTo(mymap);
        L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cja3f9cd11m9g2smgswlty8bs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(mymap);
        marker1.bindPopup("<b>[h2]</b> <br> [insert fact]").openPopup(););
        break;

      case "Pakistan":
        $('#PAK').show(
          var marker3 = L.marker([30.338895,68.941716]).addTo(mymap);
          L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cja3f9cd11m9g2smgswlty8bs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
              attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
              maxZoom: 18
          }).addTo(mymap);
          //Thailand
          marker3.bindPopup("<b>[h2]</b> <br>[insert fact]").openPopup()
        );
        break;
      case "Thailand":
        $('#THA').show(
          var marker4 = L.marker([13.039180,101.490117]).addTo(mymap);
          L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cja3f9cd11m9g2smgswlty8bs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
              attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
              maxZoom: 18
          }).addTo(mymap);
          marker3.bindPopup("<b>[h2]</b> <br>[insert fact]").openPopup()
        );
        break;
      case "China":
        $('#CHN').show(
          var marker2 = L.marker([34.621201,104.136333]).addTo(mymap);
          L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cja3f9cd11m9g2smgswlty8bs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
              attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
              maxZoom: 18
          }).addTo(mymap);
          marker4.bindPopup("<b>[h2]</b> <br>[insert fact]").openPopup()
        );
        break;
        case "Philippines":
          $('#PHL').show(
            var marker5 = L.marker([12.867438,121.765722]).addTo(mymap);
            L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cja3f9cd11m9g2smgswlty8bs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18
            }).addTo(mymap);
            marker5.bindPopup("<b>[h2]</b> <br>[insert fact]".openPopup()
          );
          break;
    }
  }); // end of function for clicking


});

<select id="menu" name="Asiancountry">
  <option value="Bangladesh" id= "BGD"> Bangladesh </option>
  <option value="Pakistan" id="PAK"> Pakistan </option>
  <option value="Thailand" id="THA"> Thailand </option>
  <option value="China" id="CHN"> China </option>
  <option value="Philippines" id="PHL"> Philippines </option>
</select>
-----

Scratch for css
/*2.0 World Map Page*/
#slide2 {
  background-color: #F0F8FA;
  top:0;
  bottom: 0;
  height: 100vh;
  margin: 0;
}
/*3.0 Introducing Fast Fashion*/
#slide4 {
  background-color: #F0F8FA;
  top:0;
  bottom: 0;
  height: 100vh;
  margin: 0;
}
/*3.1 Transition to Environmental and Social Implications*/
#slide5 {
  background-image:url("../images/threads.jpg");
  background-size: cover;
  background-position: center center;
  position: relative;
  top:0;
  bottom: 0;
  height: 100vh;
  margin: 0;
}
/*3.2 Social Implications*/
#slide6 {
  background-color: #F0F8FA; //Blue
  top:0;
  bottom: 0;
  height: 100vh;
  margin: 0;
}
/*3.3 Environmental Implications*/
#slide7 {
  background-color: #FCE6ED; //Pink
  top:0;
  bottom: 0;
  height: 100vh;
  margin: 0;
}
/*4.0 Why it happens*/
#slide8 {
  background-color: #F0F8FA; //Blue
  top:0;
  bottom: 0;
  height: 100vh;
  margin: 0;
}

/*4.1 Solutions*/
#slide9 {
  background-color: #FCE6ED; //Pink
  top:0;
  bottom: 0;
  height: 100vh;
  margin: 0;
}

/*4.1 Act Now Div*/
#slide10 {
  background-color: #FCE6ED; //Pink
  top:0;
  bottom: 0;
  height: 100vh;
  margin: 0;
}

/*5.0 Why should I care? */
#slide11 {
  background-color: #F0F8FA; //Blue
  top:0;
  bottom: 0;
  height: 100vh;
  margin: 0;
}
