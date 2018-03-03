$(document).ready(function(){

	$('body').scrollspy({
        target: '.fixed-top',
        offset: 120
    });

	/* to close the navigation after klick/touch */
	$('.navbar-nav li a').on('click', function(){
	    if(!$( this ).hasClass('dropdown-toggle')){
	        $('.navbar-collapse').collapse('hide');
	    }
	});


      // Add smooth scrolling on all links inside the navbar
// 		$("#myNavbar a").on('click', function(event) {

		  // Make sure this.hash has a value before overriding default behavior
// 		  if (this.hash !== "") {

		    // Prevent default anchor click behavior
// 		    event.preventDefault();

		    // Store hash
// 		    var hash = this.hash;

		    // Using jQuery's animate() method to add smooth page scroll
		    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
// 		    $('html, body').animate({
// 		      scrollTop: $(hash).offset().top
// 		    }, 800, function(){

		    // Add hash (#) to URL when done scrolling (default click behavior)
// 		      window.location.hash = hash;
// 		    });

// 		  } // End if

// 		});

});


function initMap() {

                    // Create a new StyledMapType object, passing it an array of styles,
                    // and the name to be displayed on the map type control.
                    var styledMapType = new google.maps.StyledMapType(
                        [
                          {
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#f5f5f5"
                              }
                            ]
                          },
                          {
                            "elementType": "labels.icon",
                            "stylers": [
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#616161"
                              }
                            ]
                          },
                          {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              {
                                "color": "#f5f5f5"
                              }
                            ]
                          },
                          {
                            "featureType": "administrative",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#31809e"
                              }
                            ]
                          },
                          {
                            "featureType": "administrative.locality",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#006088"
                              }
                            ]
                          },
                          {
                            "featureType": "administrative.locality",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              {
                                "color": "#f2f7f9"
                              }
                            ]
                          },
                          {
                            "featureType": "administrative.province",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#006088"
                              }
                            ]
                          },
                          {
                            "featureType": "administrative.province",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              {
                                "color": "#f2f7f9"
                              }
                            ]
                          },
                          {
                            "featureType": "landscape",
                            "stylers": [
                              {
                                "color": "#cce5f0"
                              }
                            ]
                          },
                          {
                            "featureType": "poi",
                            "stylers": [
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#eeeeee"
                              }
                            ]
                          },
                          {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#757575"
                              }
                            ]
                          },
                          {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#e5e5e5"
                              }
                            ]
                          },
                          {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#9e9e9e"
                              }
                            ]
                          },
                          {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#ffffff"
                              }
                            ]
                          },
                          {
                            "featureType": "road",
                            "elementType": "geometry.fill",
                            "stylers": [
                              {
                                "color": "#f2f7f9"
                              }
                            ]
                          },
                          {
                            "featureType": "road",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#006088"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#dadada"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                              {
                                "color": "#98cbdf"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                              {
                                "color": "#f2f7f9"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#616161"
                              }
                            ]
                          },
                          {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#006088"
                              }
                            ]
                          },
                          {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#e5e5e5"
                              }
                            ]
                          },
                          {
                            "featureType": "transit.line",
                            "elementType": "geometry.fill",
                            "stylers": [
                              {
                                "color": "#65a0b7"
                              }
                            ]
                          },
                          {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#eeeeee"
                              }
                            ]
                          },
                          {
                            "featureType": "transit.station.airport",
                            "elementType": "geometry.fill",
                            "stylers": [
                              {
                                "color": "#bfd7e1"
                              }
                            ]
                          },
                          {
                            "featureType": "water",
                            "elementType": "geometry", 
                            "stylers": [
                              {
                                "color": "#c9c9c9"
                              }
                            ]
                          },
                          {
                            "featureType": "water",
                            "elementType": "geometry.fill",
                            "stylers": [
                              {
                                "color": "#65a0b7"
                              }
                            ]
                          },
                          {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#fbfbfb"
                              }
                            ]
                          }
                        ],
                        {name: 'Styled Map'});

                    // Create a map object, and include the MapTypeId to add
                    // to the map type control.
                    var map = new google.maps.Map(document.getElementById('map'), {
                      center: {lat: 53.526442, lng: 10.029492}, 
                      zoom: 14,
                      mapTypeControlOptions: {
                        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                                'styled_map']
                      }
                    });

                    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
                    var icons = {
                      home: {
                        icon: 'img/map-marker-ern.svg'
                      },
                      parking: {
                        icon: iconBase + 'parking_lot_maps.png'
                      },
                      library: {
                        icon: iconBase + 'library_maps.png'
                      },
                      info: {
                        icon: iconBase + 'info-i_maps.png'
                      }
                    };

                    var features = [
                      {
                        position: new google.maps.LatLng(53.526442, 10.029492),
                        type: 'home'
                      }
                    ];

                    var gck = '<div class="mapstitle">E.R.N. Elektro-Recycling NORD GmbH</div><br>Peutestraße 21-23<br>20539 Hamburg<br> <br> <a target="_blank" href="https://maps.google.com/maps?ll=53.526442, 10.029492&daddr=Peutestraße+21-23+20539+Hamburg&saddr=&f=d&hl=de&sll=53.526442, 10.029492&z=16&hl=de-DE&gl=DE&mapclient=apiv3">Routenplaner starten</a>'; 

                    var infowindow = new google.maps.InfoWindow({
                      content: gck
                    });

                    // Create markers.
                    features.forEach(function(feature) {
                      var marker = new google.maps.Marker({
                        position: feature.position,
                        icon: icons[feature.type].icon,
                        map: map,
                        //~ label: gck,
                        //~ labelOrigin: new google.maps.Point(9, 9)
                      });
                      google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map,marker);
                      });
                    });

                    //Associate the styled map with the MapTypeId and set it to display.
                    map.mapTypes.set('styled_map', styledMapType);
                    map.setMapTypeId('styled_map');
                  }