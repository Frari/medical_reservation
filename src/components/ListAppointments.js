import React from 'react';
import Appointment from './Appointment.js'

//creo il componente della lista degli appuntamenti memorizzati
const ListAppointments = ({appointments, deleteAppointment}) => {
    return ( 
        <div className='card mt-2 py-5'>
            <div className='card-body'>
                <h2 className='card-title text-center'>
                    Manage your appointments here
                </h2>
                <div className='lista-citas'>
                    {appointments.map( appointment => (
                        <Appointment 
                            key = { appointment.id}
                            appointment = { appointment}
                            deleteAppointment = {deleteAppointment}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default ListAppointments;