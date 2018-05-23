
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition( function(position) {
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 19,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
        }
        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

var marker = new google.maps.Marker({
    position: latlng,
    map: map
});
    });
} else {
    var para = document.createElement('p');
    para.textContent = 'Argh, no geolocation!';
    document.body.appendChild(para);
}
