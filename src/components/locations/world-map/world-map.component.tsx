import React from 'react';
import styles from './world-map.module.css';
import FmMap from "@/components/common/map.component";

const LocationsWorldMap = () => {
    return (
        <div className={styles.container}>
            <h2 className='text-h2 text-dark-navy text-center'>Our offices</h2>

            <FmMap />
        </div>
    );
};

export default LocationsWorldMap;