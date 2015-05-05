Meteor.startup(function() {
  GoogleMaps.load();
});

Template.map.helpers({
  showMap: function() {
    return GoogleMaps.loaded() && Posts.findOne();
  },
  mapOptions: function() {
    var firstPost = Posts.findOne();
    return {
      zoom: 3,
      disableDefaultUI: true,
      center: { lat: firstPost.lat, lng: firstPost.lng },
      styles: mapStyle
    }
  }
});

Template.map.onCreated(function() {
  GoogleMaps.ready('map', function(map) {
    Posts.find({visible: true}).forEach(function(post) {

      // create a new marker representing this post
      var marker = new google.maps.Marker({
        position: { lat: post.lat, lng: post.lng },
        map: map.instance,
        title: post.name,
        clickable: true,
        icon: {
          url: post.thumbnailUrl,
          size: new google.maps.Size(40, 40),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 20)
        }
      });

      // when the marker is clicked on, open the article modal
      google.maps.event.addListener(marker, 'click', function() {
        Session.set("currentPostName", post.name);
        window.history.pushState("", "", "/" + post.name);
        $('#postModal').openModal();
      });
    });
  });
});

var mapStyle = [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "hue": "#FFAD00"
            },
            {
                "saturation": 50.2
            },
            {
                "lightness": -34.8
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "hue": "#FFAD00"
            },
            {
                "saturation": -19.8
            },
            {
                "lightness": -1.8
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "hue": "#FFAD00"
            },
            {
                "saturation": 72.4
            },
            {
                "lightness": -32.6
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "hue": "#FFAD00"
            },
            {
                "saturation": 74.4
            },
            {
                "lightness": -18
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "hue": "#00FFA6"
            },
            {
                "saturation": -63.2
            },
            {
                "lightness": 38
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "hue": "#FFC300"
            },
            {
                "saturation": 54.2
            },
            {
                "lightness": -14.4
            },
            {
                "gamma": 1
            }
        ]
    }
];