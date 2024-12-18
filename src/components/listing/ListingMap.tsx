import { GoogleMap, Marker } from '@react-google-maps/api';
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM, MAP_STYLES } from '../../config/constants';
import MapContainer from '../map/MapContainer';

interface ListingMapProps {
  location: string;
}

export default function ListingMap({ location }: ListingMapProps) {
  return (
    <MapContainer>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={DEFAULT_MAP_CENTER}
        zoom={DEFAULT_MAP_ZOOM}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          styles: MAP_STYLES.default,
          gestureHandling: 'cooperative'
        }}
      >
        <Marker 
          position={DEFAULT_MAP_CENTER}
          animation={window.google?.maps.Animation.DROP}
        />
      </GoogleMap>
    </MapContainer>
  );
}