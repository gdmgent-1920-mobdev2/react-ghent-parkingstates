import React from 'react';

const ParkingListItem = ({parking}) => {
    return (
        <li className="parking-list__item">
            <h1 className="name">{parking.name}</h1>
        </li>
    );
}

export default ParkingListItem;