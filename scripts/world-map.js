var mymap = L.map('worldMap').setView([16.679590, 66.474645],2.00);
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

marker1.bindPopup("<b>[h2]</b> <br> [insert fact]").openPopup();
marker2.bindPopup("<b>[h2]</b> <br>[insert fact]")
marker3.bindPopup("<b>[h2]</b> <br>[insert fact]")
marker4.bindPopup("<b>[h2]</b> <br>[insert fact]")
marker5.bindPopup("<b>[h2]</b> <br>[insert fact]")
