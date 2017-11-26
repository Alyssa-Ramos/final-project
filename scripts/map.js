var mymap = L.map('worldMap').setView([25.222137, -8.218156],1.00);
//Bangladesh
var marker1 = L.marker([23.562489,90.344352]).addTo(mymap);
//China
var marker2 = L.marker([34.621201,104.136333]).addTo(mymap);
//Pakistan
var marker3 = L.marker([30.338895,68.941716]).addTo(mymap);
//Thailand
var marker4 = L.marker([13.039180,101.490117]).addTo(mymap);
//Philippines
var marker5 = L.marker([12.867438,121.765722]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/alyssa-ramos/cja3f9cd11m9g2smgswlty8bs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx5c3NhLXJhbW9zIiwiYSI6ImNqYTNleGg4djJuejgyd2xndTV1ZzhmNTUifQ.CkEJwd5T0BA3HPHovs_NTQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

marker1.bindPopup("<b>Curia on the Drag</b><br>2029 NW 6th St, Gainesville, FL 32609").openPopup();
marker2.bindPopup("<b>Cymplify Coffee Co.</b><br>5404 NW 8th Ave, Gainesville, FL 32605")
marker3.bindPopup("<b>Pascals Coffehouse!</b><br>112 NW 16th St, Gainesville, FL 32603")
marker4.bindPopup("<b>Volta Coffee, Tea & Chocolate</b><br>48 SW 2nd St, Gainesville, FL 32601")
marker5.bindPopup("<b>Volta Coffee, Tea & Chocolate</b><br>48 SW 2nd St, Gainesville, FL 32601")
