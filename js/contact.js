$(document).ready(function() {
  
    // Coordinates to center the map
    var myLatlng = new google.maps.LatLng(42.4924, -92.3427778);
 
    // Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    // Attach a map to the DOM Element, with the defined settings
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    
    var markerHtml = '<span>Hello</span>';
  
    var options = {
      id: '1',
      map: map,
      latLng: myLatlng,
      className: 'map-marker',
      content: markerHtml
    }
  
    var marker = new MapMarker(options);
  
    var markers = [];
    markers[marker.id] = marker;
    $(document).on('click', '.map-marker', function() {
      var id = $(this).attr('id');
      
      var myMarker = markers[id];
      
      myMarker.setIcon('halo');
    });
    
});


/* Map Marker */ 
function MapMarker(options) {
  this.latLng = options.latLng;
  this.map = options.map;
  this.className = options.className;
  this.id = options.id;
  this.content = options.content;

  // Once the LatLng and text are set, add the overlay to the map.  This will
  // trigger a call to panes_changed which should in turn call draw.
  this.setMap(options.map);
}

MapMarker.prototype = new google.maps.OverlayView();

MapMarker.prototype.draw = function() {
  var me = this;

  // Check if the div has been created.
  var div = this.div_;
  if (!div) {
    // Create a overlay text DIV
    div = this.div_ = document.createElement('div');

    div.id = this.id;
    div.className = this.className;
    div.innerHTML = this.content;

    google.maps.event.addDomListener(div, "click", function(event) {
      google.maps.event.trigger(me, "click");
    });

    // Then add the overlay to the DOM
    var panes = this.getPanes();
    panes.overlayImage.appendChild(div);
  }

  // Position the overlay 
  var point = this.getProjection().fromLatLngToDivPixel(this.latLng);
  if (point) {
    div.style.left = point.x - 50 + 'px';
    div.style.top = point.y - 100 - 10 + 'px';
  }
};

MapMarker.prototype.remove = function() {
  // Check if the overlay was on the map and needs to be removed.
  if (this.div_) {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};

MapMarker.prototype.getPosition = function() {
  return this.latLng;
};

MapMarker.prototype.setIcon = function(type) {
    if (!type) {
        type = 'marker'; //default
    }

    var markerHtml = '';

    if (type === 'fuel') {
        markerHtml = 'fuel';
    } else if (type === 'halo') {
        markerHtml = 'halo, halo!';
    }

    this.div_.innerHTML = markerHtml;
  
    return type;
};


//back to top

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

