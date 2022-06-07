export const geocode = async (address: string): Promise<{
    lat: number;
    lon: number;
}> => {
    const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    const data = await geoResponse.json();

    const lat = parseFloat(data[0].lat);
    const lon = parseFloat(data[0].lon);

    return {lat, lon}
}