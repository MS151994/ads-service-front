import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import '../../utils/fix-map-icon';
import "./map.css";
import "leaflet/dist/leaflet.css";
import {useContext, useEffect, useState} from "react";
import {SearchContext} from "../../contexts/search.context";
import {SimpleAdEntity} from '../../../../ads-service-back/types/index';

export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([])
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/search/${search}`);
            const data = await res.json();
            setAds(data);
        })();
    }, [search])

    return (
        <div className="map__container">
            <MapContainer center={[51.5954382, 18.9301508]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                {ads.map(ad => (
                    <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                        <Popup>
                            {ad.id}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}