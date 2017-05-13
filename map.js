function initMap() {
					var uluru = {lat: 50.015132, lng: 18.329339};
					var map = new google.maps.Map(document.getElementById('MAPA'), {
					  zoom: 14,
					  center: uluru
					});
					var marker = new google.maps.Marker({
					  position: uluru,
					  map: map
					});
				  }