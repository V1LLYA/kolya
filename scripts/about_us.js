function initMap() {
    var officeLocation = {lat: -34.397, lng: 150.644};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: officeLocation
    });
    var marker = new google.maps.Marker({
        position: officeLocation,
        map: map
    });
}

// Добавьте асинхронный вызов API карт, например, Google Maps API
