import React, { useEffect, useState } from 'react';

import ParkingListItem from './ParkingListItem';

const ParkingList = () => {
    const [parkings, setParkings] = useState(null);

    useEffect(() => {
        async function fetchData () {
            const data = await getParkingstatesFromApi();
            setParkings(data);
        }

        if (parkings === null) {
            fetchData();
        }

        const timerId = setInterval(() => fetchData(), 30000);
        return () => clearInterval(timerId);
    }, [parkings]);

    const getParkingstatesFromApi = async () => {
        const GHENT_PARKINGSTATES_URL = 'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json';
        const response = await fetch(GHENT_PARKINGSTATES_URL);
        const jsonData = response.json();

        return jsonData;
    }

    return (
        <ul className="parking-list">
            {
                !!parkings ? (
                    parkings.map(parking =>
                        <ParkingListItem key={parking.id} parking={parking} />
                    )
                ) : (
                    <div>Loading...</div>
                )
            }
        </ul>
    );
}

export default ParkingList;