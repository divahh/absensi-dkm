"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as typeof L.Icon.Default.prototype & { _getIconUrl: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

function RecenterMap({ position }: { position: [number, number] }) {
    const map = useMap();
    useEffect(() => {
        map.setView(position, 17);
    }, [position, map]);
    return null;
}

export default function LeafletMap({ position }: { position: [number, number] }) {
    return (
        <MapContainer
            center={position}
            zoom={17}
            style={{ height: "300px", width: "100%" }}  // ← ganti "100%" jadi "300px"
            zoomControl={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Lokasi Anda
                </Popup>
            </Marker>
            <RecenterMap position={position} />
        </MapContainer>
    );
}