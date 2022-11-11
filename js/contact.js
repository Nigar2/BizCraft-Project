$(document).ready(function() {
    var myLatlng = new google.maps.LatLng(42.4924, -92.3427778);
 
    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    
});



function MapMarker(options) {
  this.latLng = options.latLng;
  this.map = options.map;
  this.className = options.className;
  this.id = options.id;
  this.content = options.content;
  this.setMap(options.map);
}

MapMarker.prototype = new google.maps.OverlayView();

MapMarker.prototype.draw = function() {
  var me = this;

  var div = this.div_;
  if (!div) {
    div = this.div_ = document.createElement('div');

    div.id = this.id;
    div.className = this.className;
    div.innerHTML = this.content;

    google.maps.event.addDomListener(div, "click", function(event) {
      google.maps.event.trigger(me, "click");
    });

    var panes = this.getPanes();
    panes.overlayImage.appendChild(div);
  }

  var point = this.getProjection().fromLatLngToDivPixel(this.latLng);
  if (point) {
    div.style.left = point.x - 50 + 'px';
    div.style.top = point.y - 100 - 10 + 'px';
  }
};

MapMarker.prototype.remove = function() {
  if (this.div_) {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};

MapMarker.prototype.getPosition = function() {
  return this.latLng;
};










