import { MapContainer, TileLayer, Marker } from 'react-leaflet';

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitute: number;
    longitude: number;
  };
};

type MapProps = {
  places?: Place[];
};

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{
      height: '100%',
      width: '100%'
    }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {places?.map(({ id, name, location }) => {
      const { latitute, longitude } = location;

      return (
        <Marker
          key={`place-${id}`}
          position={[latitute, longitude]}
          title={name}
        />
      );
    })}
  </MapContainer>
);

export default Map;