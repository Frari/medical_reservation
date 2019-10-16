import React from 'react';
//creo il componente di ogni singolo appuntamento memorizzato nella lista
const Appointment = ({appointment, deleteAppointment}) => {
    return ( 
        <div className = 'media mt-3'>
            <div className = 'media-body'>
                <h3>{appointment.pet}</h3>
                <p className='card-text'><span>Name owner: </span>{appointment.owner}</p>
                <p className='card-text'><span>Name owner: </span>{appointment.owner}</p>
                <p className='card-text'><span>Date: </span>{appointment.date}</p>
                <p className='card-text'><span>Time: </span>{appointment.time}</p>
                <p className='card-text'><span>Symptoms: </span></p>
                <p className='card-text'>{appointment.symptoms}</p>
                
                <button className='btn btn-danger'
                    onClick={() => deleteAppointment(appointment.id)}>
                Delete &times;
                </button>
            </div>
        </div>
    );
}
 
export default Appointment;