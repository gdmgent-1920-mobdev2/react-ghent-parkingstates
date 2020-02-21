import React from 'react';

import classnames from 'classnames';

const ParkingListItem = ({parking, prevParking}) => {

    const getTrendIndicator = (available, prevAvailable) => {
        if (available > prevAvailable) {
            return '⇑';
        } else if (available < prevAvailable) {
            return '⇓';
        }
        return '⇔';
    };

    const getClassnameForCapacity = (available, total) => {
        const percentage = Math.round(available / total * 100);
        if (percentage >= 60) {
            return 'capacity--success';
        } else if(percentage > 20 && percentage < 60) {
            return 'capacity--warning';
        }
        return 'capacity--alert';
    };

    return (
        <li className="parking-list__item">
            <h1 className="name">{parking.name}</h1>
    <span className="trend">{getTrendIndicator(parking.parkingStatus.availableCapacity, (prevParking) ? prevParking.parkingStatus.availableCapacity : parking.parkingStatus.availableCapacity)}</span>
            <span className={classnames('capacity', getClassnameForCapacity(parking.parkingStatus.availableCapacity, parking.parkingStatus.totalCapacity))}>{parking.parkingStatus.availableCapacity}</span>
        </li>
    );
}

export default ParkingListItem;