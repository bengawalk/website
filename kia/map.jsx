import * as React from "react";
import mapboxgl from 'mapbox-gl';
import polyline from "google-polyline";

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VhZGVlcCIsImEiOiJjbDliYW1wZzUwczJtM29xdHpzcnEyMjFpIn0.t_6sNxBfaIvu6C5XqjT5ww';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: 77.57475793027761,
      lat: 12.97724955890747,
      zoom: 11
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { busData } = this.props;
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    map.on('load', () => {
      map.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'MultiLineString',
            'coordinates':
              busData.map(b => polyline.decode(decodeURIComponent(b.route))),
          }
        }
      });
      map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#038cfc',
          'line-width': 4
        }
      });
    });
  }

  render() {
    return (
      <div id="map" ref={this.mapContainer} className="map-container" />
    );
  }
}

export default Map;
