if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });
}

Template.map.onRendered(function() {
  GoogleMaps.load();
});

Template.map.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    
    var themFossilz = Fossils.find().fetch();    
    var lastFossil = (themFossilz.length)-1;
    var centerCoordinatex = themFossilz[lastFossil].coordinates.x; 
    var centerCoordinatey = themFossilz[lastFossil].coordinates.y;

    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
    //    center: new google.maps.LatLng(-37.8136, 144.9631),        
    center: new google.maps.LatLng(centerCoordinatex, centerCoordinatey),
    zoom: 8
  };
}
}
});

Template.map.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });

    var themFossilz = Fossils.find().fetch();

    for (i=0; i<themFossilz.length; i++) {
      var fossilLat = {lat: themFossilz[i].coordinates.x, lng: themFossilz[i].coordinates.y};
      var fossilMarker = new google.maps.Marker({
        position: fossilLat,
        title: themFossilz[i].specNum.toString(),
        map: map.instance,
        animation: google.maps.Animation.DROP
      })
      addInfoBox( fossilMarker, themFossilz[i] );
    }

  });
});

function getComponents(fossilComponents) {
  componentString = "";
  for (i =0; i<fossilComponents.length; i++){
    componentString += fossilComponents[i] + "<br />"
  }
  return componentString
}

function addInfoBox(marker, fossil) {
  var infowindow = new google.maps.InfoWindow({
    content: (
      "Specimen Number: " + fossil.specNum + "<br />" +
      "Collector: " + fossil.collector + "<br />" +
      "Date Collected: " + fossil.date + "<br /."  +
      "Components: " + getComponents(fossil.components)
      )
    })

    marker.addListener('click', function() {
      infowindow.open(marker.get('map'), marker),
    })
  } 