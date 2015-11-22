Meteor.startup(function() {
  GoogleMaps.load();
});


Template.map.onRendered(function() {
  GoogleMaps.load();
});
/*
Template.map.events = {
  'submit #searchCenter': function (evt, template) {
    evt.preventDefault();
    var inputCoordinates = (template.find(".searchCenterInput").value);
    var coords = inputCoordinates.split(',');
    var inputCoordsX = coords[0];
    var inputCoordsY = coords[1];
    var latlng = {lat: parseFloat(inputCoordsX), lng: parseFloat(inputCoordsY)}

    if (isInt(inputCoordsX) && isInt(inputCoordsY)) {
      console.log('hi');
    }

    getGeoAddress(latlng);
   /*   if (GoogleMaps.loaded()) {
      // Map initialization options
        new google.maps.Map(document.getElementById(''), {
          zoom:8,
          center: P
        })
        zoom: 8
        ;

      }
    }*/

    Template.map.helpers({
      exampleMapOptions: function() {
    // Make sure the maps API has loaded
    var themFossilz = Fossils.find().fetch();    
    var lastFossil = (themFossilz.length)-1;

    if (lastFossil >= 0) {
      var centerCoordinatex = themFossilz[lastFossil].coordinates.x; 
      var centerCoordinatey = themFossilz[lastFossil].coordinates.y;
    }
    else { 
      centerCoordinatex == 0; 
      centerCoordinatey == 0;
    }

    if (GoogleMaps.loaded()){
      // Map initialization options
      return {
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
        map: map.instance
      })
      addInfoBox( fossilMarker, themFossilz[i], marker.map );
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

    function isInt(value) {
      return !isNaN(value) && 
      parseInt(Number(value)) == value && 
      !isNaN(parseInt(value, 10));
    }

    function addInfoBox(marker, fossil, map) {
      latlng = {lat: parseFloat(fossil.coordinates.x), lng: parseFloat(fossil.coordinates.y)}
      var infowindow = new google.maps.InfoWindow({
        content: (
          "Specimen Number: " + fossil.specNum + "<br />" +
          "Location: " + latlng.lat + "," + latlng.lng + "<br />" +
          "Collector: " + fossil.collector + "<br />" +
          "Date Collected: " + fossil.date + "<br />" 
          //"Components: " + getComponents(fossil.components)
          )
      })
      
      marker.addListener('click', function() {
        infowindow.open(marker.get('map'), marker);
        map.setCenter(marker.getPosition());
      })
    };