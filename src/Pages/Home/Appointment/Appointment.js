import React from 'react';
import Navigation from '../../Share/Navigation/Navigation';
import AppoinmentHeader from '../Appointment/AppoinmentHeader/AppoinmentHeader';
import AvailableAppoinments from './AvailableAppoinments/AvailableAppoinments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            
            <Navigation></Navigation>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AvailableAppoinments date={date}></AvailableAppoinments>
    </div>
    );
};

export default Appointment;