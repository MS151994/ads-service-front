import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import '../../utils/fix-map-icon';
import "./map.css";
import "leaflet/dist/leaflet.css";

export const Map = () => {
    return (
        <div className="map__container">
            <MapContainer center={[51.5954382, 18.9301508]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[51.5954382, 18.9301508]}>
                    <Popup>
                        <h2>test</h2>
                        <p>test p</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}