'use client';

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {fromAddress, setDefaults} from 'react-geocode';
import FmSpinner, {FmSpinnerColorKeys} from "@/components/common/spinner/spinner.component";
import Map, {Marker} from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import {FaLocationDot} from "react-icons/fa6";


interface MarkerData {
    name: string;
    lat: number;
    lng: number;
}

const cityNames = ['New York', 'London', 'Jakarta', 'Yokohama', 'Moscow', 'Vancouver', 'Paris', 'Nome'];

const FmMap = () => {
    const [markers, setMarkers] = useState<MarkerData[]>([]);
    const [loading, setLoading] = useState(true);

    const mapRef = useRef(null);

    // @ts-ignore
    setDefaults({
        key: process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY,
        language: 'en',
        region: 'us',
    });

    const handleFlyTo = useCallback((lat: number, lng: number) => {
        // @ts-ignore
        mapRef.current?.flyTo({
            center: [lng, lat],
            zoom: 8,
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        const fetchAllCoords = async () => {
            const results: MarkerData[] = [];

            for (const city of cityNames) {
                try {
                    const res = await fromAddress(city);
                    if (res.results.length === 0) continue;

                    const {lat, lng} = res.results[0].geometry.location;
                    results.push({name: city, lat, lng});
                } catch (error) {
                    console.error(`Geocode error for ${city}:`, error);
                }
            }

            setMarkers(results);
            setLoading(false);
        };

        fetchAllCoords();
    }, []);

    if (loading) return <FmSpinner color={FmSpinnerColorKeys.YELLOW} loading={true}/>;

    return (
        <Map
            ref={mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            mapLib={import('mapbox-gl')}
            style={{width: '100%', height: 500}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            initialViewState={{
                longitude: 10,
                latitude: 35,
                zoom: 1.5
            }}
        >
            {markers.map(({lat, lng, name}, index) => (
                <Marker key={lat + index}
                        longitude={lng}
                        latitude={lat}>
                    <button onClick={() => handleFlyTo(lat, lng)}>
                        <FaLocationDot className='h-6 w-6'/>
                    </button>
                </Marker>
            ))}
        </Map>
    );
};

export default FmMap;